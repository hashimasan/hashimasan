import {
  Briefcase,
  Code,
  ExternalLink,
  GraduationCap,
  Github,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import profileImage from "./img/profile.jpg";
import styles from "./page.module.css"; // CSSモジュールをインポート

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* ヘッダー: 名前 */}
        <header className={styles.header}>
          <Image
            src={profileImage}
            alt="橋本 真奈 Mana Hashimotoのプロフィール写真"
            width={136}
            height={136}
            className={styles.profileImage}
            priority
          />
          <div className={styles.identity}>
            <h1 className={styles.title}>
              橋本 真奈
              <span className={styles.englishName}>Mana Hashimoto</span>
            </h1>
            <p className={styles.subtitle}>Web Developer</p>
          </div>
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
                ),
              )}
            </div>
          </section>

          {/* その他 */}
          <section>
            <h2 className={styles.sectionTitle}>
              <GraduationCap className={styles.icon} />
              Other
            </h2>
            <h3 className={styles.subheading}>資格 / Certifications</h3>
            <div className={styles.certificationList}>
              <div className={styles.certificationItem}>
                <h4>
                  ウェブデザイン技能
                  <br />
                  検定2級
                </h4>
                <time dateTime="2019-12">2019.12</time>
              </div>
              <div className={styles.certificationItem}>
                <h4>行政書士</h4>
                <time dateTime="2021-02">2021.02</time>
              </div>
              <div className={styles.certificationItem}>
                <h4>Java Silver</h4>
                <time dateTime="2022-01">2022.01</time>
              </div>
              <div className={styles.certificationItem}>
                <h4>基本情報技術者</h4>
                <time dateTime="2024-07">2024.07</time>
              </div>
            </div>
          </section>

          {/* プロジェクト */}
          <section>
            <h2 className={styles.sectionTitle}>
              <Briefcase className={styles.icon} />
              Project
            </h2>
            <p className={styles.projectRoleText}>
              要件定義、設計、実装、テスト、リリース、リーダー
              <br />
              Requirements Definition, Design, Implementation, Testing, Release,
              Team Lead
            </p>
            <ul className={styles.projectList}>
              <li>受発注システム開発 (Order Management System Development)</li>
              <li>コーポレートサイト構築 (Corporate Website Development)</li>
              <li>
                宅配ポータルアプリの管理サイト開発 (Delivery Portal App Admin
                Site Development)
              </li>
              <li>AI研究開発 (AI Research and Development)</li>
              <li>
                在庫管理システム開発 (Inventory Management System Development)
              </li>
              <li>
                メディカル系企業基幹システム開発 (Medical Corporate Core System
                Development)
              </li>
            </ul>
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
                  href="https://x.com/5515Honobono"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <Twitter size={20} /> X
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

              {/* Application Link */}
              <div>
                <h3 className={styles.projectTitle}>
                  <Briefcase size={20} className={styles.projectIcon} />
                  Application
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
