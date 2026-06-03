import ContactPanel from "@/components/ContactPanel";
import SiteLayout from "@/components/SiteLayout";
import TagList from "@/components/TagList";
import { labs } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function LabsPage() {
  return (
    <SiteLayout
      title="Labs and Public Experiments - Manuel Comi"
      description="Public experiments and supporting proof of work from Manuel Comi, including AI streaming UI and portfolio source code."
    >
      <section className={`${styles.container} ${styles.pageHero}`}>
        <p className={styles.eyebrow}>Labs</p>
        <h1 className={styles.pageTitle}>Public proof of work around modern frontend and AI UX.</h1>
        <p className={styles.pageLead}>
          Much of my strongest work is private enterprise work. Labs are public supporting artifacts that show how I think about frontend systems, AI product interfaces and production-ready portfolio architecture.
        </p>
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
                    View public work
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
