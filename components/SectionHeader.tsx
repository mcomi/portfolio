import styles from "@/styles/portfolio.module.css";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text: string;
};

export default function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      <div>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}
