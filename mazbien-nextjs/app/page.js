import { Suspense } from "react";
import AuthScreen from "@/components/AuthScreen";
import styles from "./page.module.css";

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
        <p>Mazbien · IntelliHub Inc.</p>
        <p>AI training needs assessment</p>
      </footer>
    </div>
  );
}
