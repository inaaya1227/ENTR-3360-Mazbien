"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { emptyDraft, loadDraft, saveDraft } from "@/lib/draftStore";

const DraftContext = createContext(null);

export function DraftProvider({ children }) {
  const [draft, setDraftState] = useState(() => emptyDraft());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDraftState(loadDraft());
    setReady(true);
  }, []);

  const setDraft = useCallback((next) => {
    setDraftState((current) => {
      const resolved = typeof next === "function" ? next(current) : next;
      saveDraft(resolved);
      return resolved;
    });
  }, []);

  const value = useMemo(() => ({ draft, setDraft, ready }), [draft, setDraft, ready]);

  return <DraftContext.Provider value={value}>{children}</DraftContext.Provider>;
}

export function useDraft() {
  const context = useContext(DraftContext);
  if (!context) {
    throw new Error("useDraft must be used inside DraftProvider");
  }
  return context;
}
