import CaseStudyCard from "@/components/CaseStudyCard";
import SectionHeader from "@/components/SectionHeader";
import SiteLayout from "@/components/SiteLayout";
import { getAdditionalCaseStudies, getFeaturedCaseStudies } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function WorkPage() {
  const featuredCases = getFeaturedCaseStudies();
  const additionalCases = getAdditionalCaseStudies();

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
        <SectionHeader
          eyebrow="Featured case studies"
          title="The strongest signal: modernization, AI UX, revenue flows and systems thinking."
          text="These case studies represent the professional work most relevant to senior, lead and staff-level frontend roles."
        />
        <div className={styles.cardsGrid}>
          {featuredCases.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
      <section className={`${styles.container} ${styles.section}`}>
        <SectionHeader
          eyebrow="Additional work"
          title="Supporting examples across product surfaces, delivery and systems background."
          text="These projects add depth around premium editorial UX, production deployment, internal tools, frontend craft and earlier full-stack foundations."
        />
        <div className={styles.cardsGrid}>
          {additionalCases.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
