"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabaseClient";
import { useSession } from "@/lib/useSession";
import ui from "./ui.module.css";

export default function AuthScreen({ mode, embedded = false }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const session = useSession();
  const [accountMode, setAccountMode] = useState(mode === "signup" ? "signup" : "login");
  const isSignup = embedded ? accountMode === "signup" : mode === "signup";
  const checkEmail = !isSignup && searchParams.get("checkEmail") === "1";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (session) router.replace("/intake");
  }, [session, router]);

  async function onSubmit(event) {
    event.preventDefault();
    setError("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      setError("Enter an email and a password.");
      return;
    }
    if (password.length < 6) {
      setError("Use at least 6 characters for the password.");
      return;
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      setError("Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }

    setSubmitting(true);
    if (isSignup) {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: trimmedEmail,
        password,
      });
      setSubmitting(false);
      if (signUpError) {
        setError(signUpError.message);
        return;
      }
      if (!data.session) {
        router.replace("/login?checkEmail=1");
        return;
      }
      router.replace("/intake");
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: trimmedEmail,
      password,
    });
    setSubmitting(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }
    router.replace("/intake");
  }

  function chooseMode(nextMode) {
    setAccountMode(nextMode);
    setError("");
  }

  const card = (
    <div className={embedded ? `${ui.card} ${ui.landingCard}` : ui.card}>
        {embedded ? (
          <div className={ui.modeToggle} role="group" aria-label="Account action">
            <button
              type="button"
              className={isSignup ? ui.modeBtn : `${ui.modeBtn} ${ui.modeOn}`}
              aria-pressed={!isSignup}
              onClick={() => chooseMode("login")}
            >
              Sign in
            </button>
            <button
              type="button"
              className={isSignup ? `${ui.modeBtn} ${ui.modeOn}` : ui.modeBtn}
              aria-pressed={isSignup}
              onClick={() => chooseMode("signup")}
            >
              Create account
            </button>
          </div>
        ) : (
          <div className={ui.header}>
            <h3>{isSignup ? "Create consultant account" : "Sign in"}</h3>
          </div>
        )}
        <form onSubmit={onSubmit}>
          <div className={ui.body}>
            <p className={ui.hint} style={{ marginBottom: "1rem" }}>
              {isSignup
                ? "Email and password are stored with Supabase Auth. Assessments you send for review are tied to this account."
                : "Sign in to continue an intake, follow-up, or dashboard draft."}
            </p>
            {!isSupabaseConfigured() ? (
              <div className={ui.callout}>
                Supabase env vars are missing, so sign-in cannot reach a project yet.
              </div>
            ) : null}
            {checkEmail ? (
              <div className={ui.callout}>Check your email to confirm your account, then sign in.</div>
            ) : null}
            {error ? <p className={ui.error}>{error}</p> : null}
            <label className={ui.field}>
              <span className={ui.label} htmlFor="email">
                Email
              </span>
              <input
                id="email"
                className={ui.input}
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label className={ui.field}>
              <span className={ui.label} htmlFor="password">
                Password
              </span>
              <input
                id="password"
                className={ui.input}
                type="password"
                autoComplete={isSignup ? "new-password" : "current-password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className={ui.hint}>At least 6 characters.</span>
            </label>
          </div>
          <div className={embedded ? `${ui.footer} ${ui.landingFooter}` : ui.footer}>
            {embedded ? null : isSignup ? (
              <Link href="/login" style={{ textDecoration: "underline" }}>
                Already have an account? Sign in
              </Link>
            ) : (
              <Link href="/signup" style={{ textDecoration: "underline" }}>
                Don&apos;t have an account? Sign up
              </Link>
            )}
            <button type="submit" className={ui.btn} disabled={submitting || session === undefined}>
              {submitting ? "Please wait..." : isSignup ? "Create account" : "Sign in"}
            </button>
          </div>
        </form>
    </div>
  );

  if (embedded) return card;

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "1.5rem" }}>
      <div style={{ width: "min(440px, 100%)" }}>
        <img src="/logo.png" alt="Mazbien" className={ui.authLogo} />
        {card}
      </div>
    </div>
  );
}
