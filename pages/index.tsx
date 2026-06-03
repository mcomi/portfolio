import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import ContactPanel from "@/components/ContactPanel";
import SectionHeader from "@/components/SectionHeader";
import SiteLayout from "@/components/SiteLayout";
import {
  bring,
  getFeaturedCaseStudies,
  organizations,
  profile,
  productSignals,
  timeline,
} from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function HomePage() {
  const featuredCases = getFeaturedCaseStudies();

  return (
    <SiteLayout>
      <section className={styles.container}>
        <div className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Senior Frontend Engineer</p>
            <h1>{profile.headline}</h1>
            <p className={styles.heroLead}>{profile.subheadline}</p>
            <div className={styles.heroActions}>
              <Link className={styles.button} href="/work">
                View case studies
              </Link>
              <Link className={styles.buttonSecondary} href="/contact">
                Contact Manuel
              </Link>
            </div>
          </div>
          <aside className={styles.heroPanel} aria-label="Profile summary">
            <p className={styles.statusLine}>{profile.availability}</p>
            <div className={styles.quickGrid}>
              <div className={styles.quickItem}>
                <strong>Recent focus</strong>
                <span>HBR modernization, micro frontends, component systems and AI product UX.</span>
              </div>
              <div className={styles.quickItem}>
                <strong>Working style</strong>
                <span>Product-minded, precise with UI, comfortable across frontend architecture and delivery.</span>
              </div>
              <div className={styles.quickItem}>
                <strong>Core stack</strong>
                <span>React, Next.js, TypeScript, CSS Modules, Storybook, AWS, Jenkins, Docker.</span>
              </div>
            </div>
          </aside>
        </div>
        <div className={styles.logoStrip} aria-label="Relevant organizations">
          {organizations.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <SectionHeader
          eyebrow="What I bring"
          title="Modern frontend work with product and platform judgment."
          text="The strongest signal in this portfolio is not a list of tools. It is the pattern of working inside complex systems, making them easier to evolve and shipping experiences people actually use."
        />
        <div className={styles.cardsGrid}>
          {bring.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <SectionHeader
          eyebrow="Selected work"
          title="Case studies built around modernization, systems and business-critical UX."
          text="These are written as senior engineering case studies: context, problem, role, approach and impact, without invented metrics."
        />
        <div className={styles.cardsGrid}>
          {featuredCases.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <section className={styles.textBand}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Professional arc"
            title="From full-stack infrastructure roots to frontend architecture."
            text="My earlier UNAM/Filmoteca work gave me systems depth. Since 2021, my strongest work has been modern frontend delivery for Harvard Business Review and Harvard Business Publishing."
          />
          <div className={styles.timeline}>
            {timeline.map((item) => (
              <article className={styles.timelineItem} key={item.title}>
                <strong>{item.period}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <SectionHeader
          eyebrow="Product judgment"
          title="Product thinking grounded in professional delivery."
          text="My product signal comes from real production work: revenue-sensitive flows, premium editorial experiences, AI interfaces, internal tools, analytics and rollout details."
        />
        <div className={styles.cardsGrid}>
          {productSignals.map((signal) => (
            <article className={styles.card} key={signal.title}>
              <h3>{signal.title}</h3>
              <p>{signal.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <ContactPanel />
      </section>
    </SiteLayout>
  );
}
