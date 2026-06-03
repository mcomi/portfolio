import ContactPanel from "@/components/ContactPanel";
import SiteLayout from "@/components/SiteLayout";
import { githubActivityShortNote, profile } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function ContactPage() {
  return (
    <SiteLayout
      title="Contact Manuel Comi"
      description="Contact Manuel Comi for Senior Frontend Engineer, Lead Frontend Engineer and AI Product Frontend roles."
    >
      <section className={`${styles.container} ${styles.pageHero}`}>
        <p className={styles.eyebrow}>Contact</p>
        <h1 className={styles.pageTitle}>Let us talk about senior frontend roles where product and architecture both matter.</h1>
        <p className={styles.pageLead}>
          Based in Mexico and open to remote or international teams. Best fit: senior frontend, lead frontend, AI product frontend and frontend/platform architecture roles.
        </p>
        <p className={styles.pageLead}>
          Public GitHub projects are available as selected examples. Most recent production work is represented through the case studies on this site because it lives in private enterprise repositories and organization-managed GitHub accounts.
        </p>
      </section>
      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.cardsGrid}>
          <ContactPanel />
          <article className={styles.contactCard}>
            <h3>Direct links</h3>
            <p>Email is the clearest way to start. Resume, LinkedIn and selected public GitHub projects are available as supporting profile links.</p>
            <p>{githubActivityShortNote}</p>
            <div className={styles.heroActions}>
              <a className={styles.button} href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className={styles.buttonSecondary} href={profile.resumePath}>
                Resume
              </a>
              <a className={styles.buttonSecondary} href={profile.github} target="_blank" rel="noreferrer">
                Explore public GitHub projects
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
