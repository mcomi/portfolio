import ContactPanel from "@/components/ContactPanel";
import SiteLayout from "@/components/SiteLayout";
import { githubActivityNote, profile, timeline } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function ExperiencePage() {
  return (
    <SiteLayout
      title="Experience - Manuel Comi"
      description="Recruiter-friendly experience timeline for Manuel Comi, Senior Frontend Engineer focused on HBR modernization, React, Next.js, micro frontends and enterprise delivery."
    >
      <section className={`${styles.container} ${styles.pageHero}`}>
        <p className={styles.eyebrow}>Experience</p>
        <h1 className={styles.pageTitle}>A web resume for senior frontend and product platform roles.</h1>
        <p className={styles.pageLead}>
          My recent work centers on Harvard Business Review / Harvard Business Publishing through consulting engagements, supported by earlier full-stack and infrastructure experience at UNAM / Filmoteca.
        </p>
        <div className={styles.heroActions}>
          <a className={styles.button} href={profile.resumePath}>
            Download Resume
          </a>
          <a className={styles.buttonSecondary} href={`mailto:${profile.email}`}>
            Contact Manuel
          </a>
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.resumeTimeline}>
          {timeline.map((item) => (
            <article className={styles.resumeItem} key={item.title}>
              <div>
                <span>{item.period}</span>
                <h2>{item.title}</h2>
                <p>{item.org}</p>
                <small>{item.meta}</small>
              </div>
              <div>
                <p>{item.text}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.noteBox}>
          <h2>About GitHub activity</h2>
          <p>{githubActivityNote}</p>
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <ContactPanel />
      </section>
    </SiteLayout>
  );
}
