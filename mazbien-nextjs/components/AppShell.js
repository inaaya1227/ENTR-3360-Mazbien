"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, History, LayoutDashboard, MessageSquareText } from "lucide-react";
import { DraftProvider } from "@/lib/draftContext";
import styles from "./AppShell.module.css";

const LINKS = [
  { href: "/", label: "Discovery Intake", icon: ClipboardList },
  { href: "/followup", label: "Adaptive Follow-up", icon: MessageSquareText },
  { href: "/dashboard", label: "Consultant Dashboard", icon: LayoutDashboard },
  { href: "/history", label: "Assessment History", icon: History },
];

function AppShellInner({ children, eyebrow, title, lede }) {
  const pathname = usePathname();

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.mark}>M</div>
          <div>
            <h1>Mazbien</h1>
            <p>AI Training Needs Assessment</p>
          </div>
        </div>
        <nav className={styles.nav}>
          {LINKS.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? `${styles.link} ${styles.active}` : styles.link}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className={styles.consultant}>
          <strong>Elena Rostova</strong>
          Lead consultant · internal use only
        </div>
      </aside>
      <div className={styles.main}>
        {eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
        {title ? (
          <h2 className="serif" style={{ fontSize: "2rem", marginBottom: "0.35rem" }}>
            {title}
          </h2>
        ) : null}
        {lede ? (
          <p style={{ color: "var(--muted)", maxWidth: "46rem", marginBottom: "1.25rem" }}>{lede}</p>
        ) : null}
        <DraftProvider>{children}</DraftProvider>
      </div>
    </div>
  );
}

export default function AppShell(props) {
  return (
    <Suspense fallback={<div className={styles.shell}>Loading workspace…</div>}>
      <AppShellInner {...props} />
    </Suspense>
  );
}
