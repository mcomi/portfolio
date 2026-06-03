import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import CaseStudyVisual from "@/components/CaseStudyVisual";
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
        <p className={styles.confidentialityLabel}>{study.confidentiality}</p>
        <dl className={styles.heroFacts}>
          <div>
            <dt>Role</dt>
            <dd>{study.roleLabel}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{study.category}</dd>
          </div>
          <div>
            <dt>Why it matters</dt>
            <dd>{study.whyMatters}</dd>
          </div>
        </dl>
        <TagList items={study.stack} label={`${study.title} technology stack`} />
      </section>

      <section className={`${styles.container} ${styles.article}`}>
        <CaseStudyVisual study={study} />
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
        {study.deepDive?.map((section) => (
          <div className={styles.articleBlock} key={section.title}>
            <h2>{section.title}</h2>
            {section.text ? <p>{section.text}</p> : null}
            {section.items ? (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
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
