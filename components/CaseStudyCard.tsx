import Link from "next/link";
import type { CaseStudy } from "@/data/portfolio";
import CaseStudyVisual from "@/components/CaseStudyVisual";
import styles from "@/styles/portfolio.module.css";

type CaseStudyCardProps = {
  study: CaseStudy;
  className?: string;
};

export default function CaseStudyCard({ study, className }: CaseStudyCardProps) {
  return (
    <Link
      className={`${styles.caseCard} ${styles[`accent-${study.accent}`]} ${className ?? ""}`}
      href={`/work/${study.slug}`}
    >
      <CaseStudyVisual study={study} compact />
      <div className={styles.caseBody}>
        <span className={styles.cardKicker}>{study.category}</span>
        <h3>{study.title}</h3>
        <p>{study.summary}</p>
        <div className={styles.caseMeta}>
          <strong>Why it matters</strong>
          <p>{study.whyMatters}</p>
        </div>
        <ul className={styles.tagList} aria-label={`${study.title} stack`}>
          {study.stack.slice(0, 5).map((tag) => (
            <li className={styles.tag} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <span className={styles.cardLinkText}>Open case study</span>
      </div>
    </Link>
  );
}
