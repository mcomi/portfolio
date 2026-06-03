import ContactPanel from "@/components/ContactPanel";
import SiteLayout from "@/components/SiteLayout";
import { timeline } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function AboutPage() {
  return (
    <SiteLayout
      title="About Manuel Comi - Senior Frontend Engineer"
      description="The professional background of Manuel Comi, from full-stack and infrastructure systems to modern frontend architecture."
    >
      <section className={`${styles.container} ${styles.pageHero}`}>
        <p className={styles.eyebrow}>About</p>
        <h1 className={styles.pageTitle}>A frontend engineer with full-stack roots and product architecture focus.</h1>
        <p className={styles.pageLead}>
          I am Manuel Comi, a Senior Frontend Engineer based in Mexico. My career started in broader software and infrastructure work, then sharpened into modern frontend engineering for complex product environments.
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
                I care about UI quality, but I do not treat frontend as only visual work. I have worked with APIs, deployment workflows, AWS, Docker, Jenkins and legacy systems, which helps me understand the real constraints behind modern product delivery.
              </p>
            </div>
            <div className={styles.articleBlock}>
              <h2>Recent strength: HBR and enterprise modernization</h2>
              <p>
                Since 2021 my strongest work has centered on Harvard Business Review / Harvard Business Publishing through consulting engagements: micro frontend migration, reusable component libraries, Executive experiences, AI Advisor initiatives, paywall migration and CI/CD work.
              </p>
            </div>
            <div className={styles.articleBlock}>
              <h2>Product and collaboration</h2>
              <p>
                I work well with distributed teams in English, especially where frontend needs to align design, product, backend, analytics and QA. I enjoy turning ambiguous product needs into components, pages and workflows that are clear to users and maintainable for teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.timeline}>
          {timeline.map((item) => (
            <article className={styles.timelineItem} key={item.title}>
              <strong>{item.period}</strong>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
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
