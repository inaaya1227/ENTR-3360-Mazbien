import { Suspense } from "react";
import { createLucideIcon, X } from "lucide-react";
import AuthScreen from "@/components/AuthScreen";
import styles from "./page.module.css";

const Instagram = createLucideIcon("instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "ig-frame" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "ig-lens" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "ig-dot" }],
]);

const Linkedin = createLucideIcon("linkedin", [
  ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", key: "li-body" }],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "li-bar" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "li-dot" }],
]);

const Facebook = createLucideIcon("facebook", [
  ["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "fb" }],
]);

const SOCIALS = [
  { label: "Instagram", icon: Instagram },
  { label: "LinkedIn", icon: Linkedin },
  { label: "X", icon: X },
  { label: "Facebook", icon: Facebook },
];

const STEPS = [
  {
    title: "Discover",
    body: "Sit with the client and capture how each team works today.",
  },
  {
    title: "Assess",
    body: "Score AI readiness department by department.",
  },
  {
    title: "Follow up",
    body: "Ask the next question only where the first conversation left a gap.",
  },
  {
    title: "Recommend",
    body: "Turn that picture into a training pathway the consultant reviews before it is shared.",
  },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <img src="/logo.png" alt="Mazbien" width={72} height={65} className={styles.logo} />
          <h1>Know where your team stands with AI.</h1>
          <p className={styles.slogan}>From AI curiosity to a clear training plan.</p>
          <p className={styles.description}>
            Mazbien helps organizations understand their AI training needs by assessing each department’s readiness.
            It then recommends tailored training pathways for the people who need them.
          </p>
          <ul className={styles.chips}>
            <li>Department-by-department readiness</li>
            <li>Tailored training pathways</li>
            <li>Transparent pricing</li>
          </ul>
        </div>
        <div className={styles.auth}>
          <Suspense fallback={<p className={styles.loading}>Loading sign in…</p>}>
            <AuthScreen mode="login" embedded />
          </Suspense>
        </div>
      </section>

      <section className={styles.how} aria-labelledby="how-heading">
        <h2 id="how-heading">How it works</h2>
        <ol className={styles.steps}>
          {STEPS.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.num}>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className={styles.footer}>
        <div className={styles.socials}>
          {SOCIALS.map(({ label, icon: Icon }) => (
            <a key={label} href="#" aria-label={label}>
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className={styles.footerLine}>
          <p>Mazbien · IntelliHub Inc.</p>
          <p>AI training needs assessment</p>
        </div>
      </footer>
    </div>
  );
}
