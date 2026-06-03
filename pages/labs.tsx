import ContactPanel from "@/components/ContactPanel";
import SiteLayout from "@/components/SiteLayout";
import TagList from "@/components/TagList";
import { githubActivityNote, labs } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function LabsPage() {
  return (
    <SiteLayout
      title="Selected Public Work - Manuel Comi"
      description="Selected public GitHub projects and experiments from Manuel Comi, used as supporting examples alongside private enterprise case studies."
    >
      <section className={`${styles.container} ${styles.pageHero}`}>
        <p className={styles.eyebrow}>Selected Public Work</p>
        <h1 className={styles.pageTitle}>Public GitHub projects used as supporting examples, not a complete work history.</h1>
        <p className={styles.pageLead}>
          Because most of my enterprise work is private, I use public projects to demonstrate current frontend interests, architecture patterns and product experiments.
        </p>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.noteBox}>
          <h2>About GitHub activity</h2>
          <p>{githubActivityNote}</p>
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.cardsGrid}>
          {labs.map((lab) => (
            <article className={styles.card} key={lab.title}>
              <span className={styles.cardKicker}>{lab.status}</span>
              <h3>{lab.title}</h3>
              <p>{lab.summary}</p>
              <TagList items={lab.stack} label={`${lab.title} stack`} />
              {lab.href ? (
                <div className={styles.heroActions}>
                  <a className={styles.buttonSecondary} href={lab.href} target="_blank" rel="noreferrer">
                    View selected public work
                  </a>
                </div>
              ) : null}
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
