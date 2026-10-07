"use client";

import { useEffect, useState } from "react";
import { getSupabaseClient } from "./supabaseClient";

export function useSession() {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return undefined;

    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active) setSession(data.session ?? null);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
    });

    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, []);

  if (!getSupabaseClient()) return null;
  return session;
}
