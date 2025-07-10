import styles from '../css/Home.module.css';
import iconImage from '../images/icon.png'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <img src={iconImage} alt="プロフィール画像" className={styles.icon} />
                <h1 className={styles.name}>山田 太郎</h1>
                <p className={styles.title}>ジュニアエンジニア</p>
            </div>


            <div className={styles.content}>
                <h2>Home</h2>

                <section>
                    <h3>生い立ち</h3>
                    <p>
                        学生時代にITに興味を持ち、個人でWebアプリの開発を始めました。現在は業務アプリケーションの開発にも取り組んでいます。
                    </p>
                </section>

                <section>
                <h3>スキル</h3>
                    <ul>
                        <li>React / Next.js</li>
                        <li>Spring Boot / Java</li>
                        <li>PostgreSQL / Docker</li>
                        <li>AWS / GitHub / CI/CD</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
