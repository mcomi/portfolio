import Link from "next/link";
import type { CaseStudy } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      className={`${styles.caseCard} ${styles[`accent-${study.accent}`]}`}
      href={`/work/${study.slug}`}
    >
      <div className={styles.caseVisual} aria-hidden="true">
        <span>{study.eyebrow}</span>
      </div>
      <div className={styles.caseBody}>
        <h3>{study.title}</h3>
        <p>{study.summary}</p>
        <ul className={styles.tagList} aria-label={`${study.title} stack`}>
          {study.stack.slice(0, 5).map((tag) => (
            <li className={styles.tag} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
