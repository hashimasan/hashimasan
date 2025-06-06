import {
  Briefcase,
  Code,
  ExternalLink,
  GraduationCap,
  Github,
  Instagram,
  Twitter,
} from "lucide-react";
import styles from "./page.module.css"; // CSSモジュールをインポート

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* ヘッダー: 名前 */}
        <header className={styles.header}>
          <h1 className={styles.title}>hashimasan</h1>
          <p className={styles.subtitle}>Web Developer</p>
        </header>

        {/* メインコンテンツ */}
        <div className={styles.content}>
          {/* 技術スタック */}
          <section>
            <h2 className={styles.sectionTitle}>
              <Code className={styles.icon} />
              Technical Skills
            </h2>
            <div className={styles.skillsContainer}>
              {["Java", "Go", "Python", "React", "TypeScript", "SQL"].map(
                (skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                )
              )}
            </div>
          </section>

          {/* その他 */}
          <section>
            <h2 className={styles.sectionTitle}>
              <GraduationCap className={styles.icon} />
              Other
            </h2>
            <p className={styles.otherText}>
              行政書士資格あり (Administrative Scrivener License)
            </p>
          </section>

          {/* リンク */}
          <section>
            <h2 className={styles.sectionTitle}>
              <ExternalLink className={styles.icon} />
              Links
            </h2>
            <div className={styles.linksContainer}>
              {/* Social Links */}
              <div className={styles.socialLinks}>
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2F5515Honobono"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <Twitter size={20} /> X (Twitter)
                </a>
                <a
                  href="https://www.instagram.com/hashimasan_design/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <Instagram size={20} /> Instagram
                </a>
                <a
                  href="https://github.com/hashimasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <Github size={20} /> GitHub
                </a>
              </div>

              {/* Divider */}
              <hr className={styles.divider} />

              {/* Project Link */}
              <div>
                <h3 className={styles.projectTitle}>
                  <Briefcase size={20} className={styles.projectIcon} />
                  Project
                </h3>
                <a
                  href="https://gen-exercise.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  英語 Reading練習
                  <ExternalLink size={16} className={styles.externalIcon} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
