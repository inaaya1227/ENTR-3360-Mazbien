"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AppShell from "@/components/AppShell";
import { getSupabaseClient } from "@/lib/supabaseClient";
import ui from "@/components/ui.module.css";

function formatMoney(cents, currency) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: (currency || "cad").toUpperCase(),
  }).format((Number(cents) || 0) / 100);
}

function DepositSuccessInner() {
  const params = useSearchParams();
  const sessionId = params.get("session_id") || "";
  const [message, setMessage] = useState("Checking the deposit with Stripe…");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function confirm() {
      if (!sessionId) {
        setError("Stripe did not return a Checkout session.");
        setMessage("");
        return;
      }
      const supabase = getSupabaseClient();
      const session = supabase ? (await supabase.auth.getSession()).data.session : null;
      if (!session?.access_token) {
        setError("Sign in again to confirm this deposit.");
        setMessage("");
        return;
      }
      try {
        const response = await fetch("/api/payments/confirm", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${session.access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        });
        const data = await response.json().catch(() => ({}));
        if (cancelled) return;
        if (!response.ok) {
          setError(data.error || "The deposit could not be confirmed.");
          setMessage("");
          return;
        }
        setError("");
        setMessage(`Deposit paid: ${formatMoney(data.amountCents, data.currency)}.`);
      } catch {
        if (!cancelled) {
          setError("Stripe could not be reached.");
          setMessage("");
        }
      }
    }
    confirm();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  return (
    <AppShell eyebrow="Payments" title="Deposit" lede="Test-mode Checkout. This does not change the tier, score, or quote.">
      <div className={ui.card}>
        <div className={ui.body}>
          {message ? <p>{message}</p> : null}
          {error ? <p className={ui.error}>{error}</p> : null}
        </div>
      </div>
    </AppShell>
  );
}

export default function DepositSuccess() {
  return (
    <Suspense fallback={<p>Checking the deposit…</p>}>
      <DepositSuccessInner />
    </Suspense>
  );
}
