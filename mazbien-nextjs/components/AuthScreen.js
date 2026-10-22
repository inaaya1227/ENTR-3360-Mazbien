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

  async function continueWithGoogle() {
    setError("");
    const supabase = getSupabaseClient();
    if (!supabase) {
      setError("Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }
    setSubmitting(true);
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    });
    if (oauthError) {
      setSubmitting(false);
      setError(oauthError.message);
    }
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
            <button
              type="button"
              className={ui.googleBtn}
              onClick={continueWithGoogle}
              disabled={submitting || session === undefined}
            >
              <GoogleMark />
              Continue with Google
            </button>
            <p className={ui.authDivider}>or</p>
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

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </svg>
  );
}
