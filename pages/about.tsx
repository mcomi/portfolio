import ContactPanel from "@/components/ContactPanel";
import SiteLayout from "@/components/SiteLayout";
import { githubActivityNote, timeline } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function AboutPage() {
  return (
    <SiteLayout
      title="About Manuel Comi - Senior Frontend Engineer"
      description="The professional background of Manuel Comi, from full-stack and infrastructure systems to modern frontend architecture."
    >
      <section className={`${styles.container} ${styles.pageHero}`}>
        <p className={styles.eyebrow}>About</p>
        <h1 className={styles.pageTitle}>A frontend engineer who understands the system behind the interface.</h1>
        <p className={styles.pageLead}>
          I am Manuel Comi, a Senior Frontend Engineer based in Mexico. My strongest recent work has been with Harvard Business Review / Harvard Business Publishing through consulting engagements, where frontend quality depends on product context, architecture and delivery details.
        </p>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.twoColumn}>
          <div>
            <p className={styles.eyebrow}>How I work</p>
          </div>
          <div className={styles.article}>
            <div className={styles.articleBlock}>
              <h2>Frontend specialization with systems context</h2>
              <p>
                I started with full-stack and infrastructure work before specializing in modern frontend. That background helps me understand real production constraints: APIs, deployment workflows, AWS, Docker, Jenkins, security, legacy systems and the operational details behind product delivery.
              </p>
            </div>
            <div className={styles.articleBlock}>
              <h2>Recent strength: HBR and enterprise modernization</h2>
              <p>
                Since 2021, my strongest work has centered on React and Next.js modernization, micro frontend migration, reusable component libraries, Executive experiences, AI Advisor initiatives, paywall/Piano migration, editorial layouts, error pages MFE and CI/CD work.
              </p>
            </div>
            <div className={styles.articleBlock}>
              <h2>Product and collaboration</h2>
              <p>
                I like frontend work where the hard part is not only the UI, but the system behind it: data shape, shared components, rollout, analytics, performance and long-term maintainability. I work well with distributed teams in English, especially where frontend needs to align product, UX, backend, QA and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.twoColumn}>
          <div>
            <p className={styles.eyebrow}>How I think about frontend</p>
          </div>
          <div className={styles.voiceBlock}>
            <h2>What I have learned building at scale</h2>
            <p>
              I do not think a frontend migration succeeds because the new app is cleaner. It succeeds when the new surface can live with the old system long enough to move safely: analytics still fire, providers still make sense, QA can verify behavior and teams understand where ownership changes.
            </p>
            <p>
              I see accessibility as an architecture decision, not a final checklist. If component APIs make focus, labels, states and composition awkward, accessibility becomes expensive. If those choices are built into the system early, teams move faster and the product gets more reliable.
            </p>
            <p>
              AI product UX has made that even clearer for me. The frontend is not just rendering a response; it is explaining progress, uncertainty and next actions. Good AI interfaces need loading states, recommendation structure, fallback behavior and enough transparency for users to trust what they are seeing.
            </p>
            <p>
              The frontend work I enjoy most is where product judgment and engineering judgment are hard to separate. The UI matters, but so do data contracts, rollout paths, performance, tracking and the long-term cost of every shortcut.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.timeline}>
          {timeline.map((item) => (
            <article className={styles.timelineItem} key={item.title}>
                <strong>{item.period}</strong>
                <h3>{item.title}</h3>
                <p className={styles.timelineOrg}>{item.org}</p>
                <p>{item.text}</p>
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
