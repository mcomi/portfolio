import type { CaseStudy } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type CaseStudyVisualProps = {
  study: CaseStudy;
  compact?: boolean;
};

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
      className={`${styles.architectureVisual} ${styles[`accent-${study.accent}`]}`}
      aria-label={study.visual.caption}
    >
      <div className={styles.visualHeader}>
        <span>{study.category}</span>
        <strong>{study.visual.caption}</strong>
      </div>
      <ol className={styles.visualFlow}>
        {study.visual.steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}
