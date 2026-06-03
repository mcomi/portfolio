import ContactPanel from "@/components/ContactPanel";
import SiteLayout from "@/components/SiteLayout";
import TagList from "@/components/TagList";
import { skillGroups } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function SkillsPage() {
  return (
    <SiteLayout
      title="Skills and Tech Stack - Manuel Comi"
      description="Manuel Comi's frontend, architecture, quality, infrastructure and AI product skill set."
    >
      <section className={`${styles.container} ${styles.pageHero}`}>
        <p className={styles.eyebrow}>Skills</p>
        <h1 className={styles.pageTitle}>A senior frontend stack shaped by product systems, not tool collecting.</h1>
        <p className={styles.pageLead}>
          My core is React and Next.js, supported by component systems, micro frontend architecture, CI/CD, cloud delivery and AI product UX.
        </p>
      </section>
      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.cardsGrid}>
          {skillGroups.map((group) => (
            <article className={styles.skillCard} key={group.title}>
              <h3>{group.title}</h3>
              <TagList items={group.items} label={`${group.title} skills`} />
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
