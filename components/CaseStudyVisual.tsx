import type { CaseStudy } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type CaseStudyVisualProps = {
  study: CaseStudy;
  compact?: boolean;
};

function getVisualLayout(study: CaseStudy) {
  if (study.slug === "hbr-frontend-modernization") return styles.visualLayoutTree;
  if (study.slug === "paywall-piano-migration") return styles.visualLayoutPipeline;
  if (study.category === "Design systems" || study.category === "Internal product UI") return styles.visualLayoutGrid;
  if (study.category === "Production delivery") return styles.visualLayoutPipeline;
  if (study.category === "AI product UX") return styles.visualLayoutAdvisor;
  if (study.category.includes("Editorial") || study.category.includes("Premium")) return styles.visualLayoutGrid;
  return styles.visualLayoutFlow;
}

function getNodeIcon(step: string) {
  const normalizedStep = step.toLowerCase();
  let path =
    "M12 3.5 20.5 8v8L12 20.5 3.5 16V8L12 3.5Zm0 4.2 4.4 2.3L12 12.3 7.6 10 12 7.7Zm-5 5.1v2.1l5 2.7 5-2.7v-2.1l-5 2.7-5-2.7Z";

  if (normalizedStep.includes("ai") || normalizedStep.includes("intent") || normalizedStep.includes("advisor")) {
    path = "M12 3a4 4 0 0 0-4 4v1H7a4 4 0 0 0-1 7.87V17a3 3 0 0 0 3 3h1v-4H8.8A1.8 1.8 0 0 1 7 14.2V11a1.8 1.8 0 0 1 1.8-1.8H10V7a2 2 0 0 1 4 0v2.2h1.2A1.8 1.8 0 0 1 17 11v3.2a1.8 1.8 0 0 1-1.8 1.8H14v4h1a3 3 0 0 0 3-3v-1.13A4 4 0 0 0 17 8h-1V7a4 4 0 0 0-4-4Zm-1 9h4v-4h-4v4Z";
  } else if (normalizedStep.includes("piano") || normalizedStep.includes("paywall") || normalizedStep.includes("report")) {
    path = "M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v11A2.5 2.5 0 0 1 16.5 20h-9A2.5 2.5 0 0 1 5 17.5v-11Zm3 2v3h2v-3H8Zm4 0v7h2v-7h-2Zm4 0v4h2v-4h-2Zm-8 5v2h2v-2H8Zm8 4a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2h8Z";
  } else if (normalizedStep.includes("s3") || normalizedStep.includes("cloud") || normalizedStep.includes("build") || normalizedStep.includes("rollback")) {
    path = "M6 5h12v4H6V5Zm1.5 6h9A3.5 3.5 0 0 1 20 14.5v.5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-.5A3.5 3.5 0 0 1 7.5 11Zm0 2A1.5 1.5 0 0 0 6 14.5v.5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.5a1.5 1.5 0 0 0-1.5-1.5h-9Zm2.5 1h4v2h-4v-2Z";
  } else if (normalizedStep.includes("storybook") || normalizedStep.includes("component") || normalizedStep.includes("design")) {
    path = "M5 4h6v6H5V4Zm8 0h6v6h-6V4ZM5 12h6v8H5v-8Zm8 2h6v6h-6v-6Zm2-8v2h2V6h-2ZM7 6v2h2V6H7Zm0 8v4h2v-4H7Zm8 2v2h2v-2h-2Z";
  } else if (normalizedStep.includes("content") || normalizedStep.includes("hero") || normalizedStep.includes("editorial") || normalizedStep.includes("layout")) {
    path = "M5 5h14v4H5V5Zm0 6h8v9H5v-9Zm10 0h4v3h-4v-3Zm0 5h4v4h-4v-4ZM7 7v1h10V7H7Zm0 6v5h4v-5H7Z";
  } else if (normalizedStep.includes("api") || normalizedStep.includes("provider") || normalizedStep.includes("mfe") || normalizedStep.includes("legacy")) {
    path = "M4 7a3 3 0 0 1 3-3h3v2H7a1 1 0 0 0-1 1v3H4V7Zm10-3h3a3 3 0 0 1 3 3v3h-2V7a1 1 0 0 0-1-1h-3V4ZM4 14h2v3a1 1 0 0 0 1 1h3v2H7a3 3 0 0 1-3-3v-3Zm16 0v3a3 3 0 0 1-3 3h-3v-2h3a1 1 0 0 0 1-1v-3h2ZM8 9h8v6H8V9Z";
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={path} fill="currentColor" />
    </svg>
  );
}

export default function CaseStudyVisual({ study, compact = false }: CaseStudyVisualProps) {
  if (compact) {
    return (
      <div
        className={`${styles.caseFlowStrip} ${styles[`accent-${study.accent}`]}`}
        aria-label={`${study.title} abstract flow`}
      >
        <span>{study.visual.caption.replace(" - no proprietary details", "")}</span>
        <ol>
          {study.visual.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div
      className={`${styles.architectureVisual} ${styles[`accent-${study.accent}`]} ${getVisualLayout(study)}`}
      aria-label={study.visual.caption}
    >
      <div className={styles.visualHeader}>
        <span>{study.category}</span>
        <strong>{study.visual.caption}</strong>
      </div>
      <ol className={styles.visualFlow}>
        {study.visual.steps.map((step) => (
          <li key={step}>
            <span>{getNodeIcon(step)}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}
