import CaseStudyCard from "@/components/CaseStudyCard";
import SiteLayout from "@/components/SiteLayout";
import { caseStudies } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function WorkPage() {
  return (
    <SiteLayout
      title="Work and Case Studies - Manuel Comi"
      description="Senior frontend case studies across HBR modernization, design systems, AI experiences, paywall migration, CI/CD and UNAM archive systems."
    >
      <section className={`${styles.container} ${styles.pageHero}`}>
        <p className={styles.eyebrow}>Work</p>
        <h1 className={styles.pageTitle}>Case studies for senior frontend, product architecture and delivery work.</h1>
        <p className={styles.pageLead}>
          Each case study is structured around context, problem, role, technical approach, impact and lessons learned. The emphasis is on honest senior signal, not inflated numbers.
        </p>
      </section>
      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.cardsGrid}>
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
