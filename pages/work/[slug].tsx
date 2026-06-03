import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import TagList from "@/components/TagList";
import SiteLayout from "@/components/SiteLayout";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type CaseStudyPageProps = {
  study: CaseStudy;
};

export default function CaseStudyPage({ study }: CaseStudyPageProps) {
  return (
    <SiteLayout
      title={`${study.title} - Manuel Comi Case Study`}
      description={study.summary}
    >
      <section className={`${styles.container} ${styles.pageHero}`}>
        <p className={styles.eyebrow}>{study.eyebrow}</p>
        <h1 className={styles.pageTitle}>{study.title}</h1>
        <p className={styles.pageLead}>{study.summary}</p>
        <TagList items={study.stack} label={`${study.title} technology stack`} />
      </section>

      <section className={`${styles.container} ${styles.article}`}>
        <div className={`${styles.caseVisual} ${styles[`accent-${study.accent}`]}`} aria-hidden="true">
          <span>Visual placeholder for private enterprise work</span>
        </div>
        <div className={styles.articleBlock}>
          <h2>Context</h2>
          <p>{study.context}</p>
        </div>
        <div className={styles.articleBlock}>
          <h2>Problem</h2>
          <p>{study.problem}</p>
        </div>
        <div className={styles.articleBlock}>
          <h2>My role</h2>
          <p>{study.role}</p>
        </div>
        <div className={styles.articleBlock}>
          <h2>Technical approach</h2>
          <ul>
            {study.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.articleBlock}>
          <h2>Impact</h2>
          <ul>
            {study.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.articleBlock}>
          <h2>What I learned</h2>
          <p>{study.learned}</p>
        </div>
        <Link className={styles.buttonSecondary} href="/work">
          Back to all case studies
        </Link>
      </section>
    </SiteLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: caseStudies.map((study) => ({ params: { slug: study.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<CaseStudyPageProps> = async ({ params }) => {
  const slug = String(params?.slug ?? "");
  const study = getCaseStudy(slug);

  if (!study) {
    return { notFound: true };
  }

  return {
    props: {
      study,
    },
  };
};
