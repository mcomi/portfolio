import ContactPanel from "@/components/ContactPanel";
import SiteLayout from "@/components/SiteLayout";
import { profile } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function ContactPage() {
  return (
    <SiteLayout
      title="Contact Manuel Comi"
      description="Contact Manuel Comi for Senior Frontend Engineer, Lead Frontend Engineer and AI Product Frontend roles."
    >
      <section className={`${styles.container} ${styles.pageHero}`}>
        <p className={styles.eyebrow}>Contact</p>
        <h1 className={styles.pageTitle}>Let us talk about senior frontend roles, architecture and product work.</h1>
        <p className={styles.pageLead}>
          Best fit: React/Next.js product teams, frontend modernization, design systems, AI-powered experiences, enterprise delivery and international collaboration.
        </p>
      </section>
      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.cardsGrid}>
          <ContactPanel />
          <article className={styles.contactCard}>
            <h3>Direct links</h3>
            <p>Email is the clearest way to start. LinkedIn and GitHub are available as supporting profile links.</p>
            <div className={styles.heroActions}>
              <a className={styles.button} href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className={styles.buttonSecondary} href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className={styles.buttonSecondary} href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
