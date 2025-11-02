import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Afomia Ashagr | Canva Design Portfolio</title>
        <meta name="description" content="Portfolio of Afomia Ashagr, Canva Resume & Instagram Template Designer" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        {/* Home / Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Afomia Ashagr</h1>
          <p className={styles.heroIntro}>Girlish and creative Canva designer. I create beautiful Resume and Instagram templates that stand out!</p>
          <a href="#templates" className={styles.heroButton}>View My Templates</a>
        </section>

        {/* About Me Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.sectionText}>
            Hello! I’m Afomia, a passionate graphic designer specializing in vibrant and modern Canva templates. With a love for color and detail, I help individuals and businesses create stunning resumes and social media profiles.
          </p>
        </section>

        {/* My Templates Section */}
        <section className={styles.section} id="templates">
          <h2 className={styles.sectionTitle}>My Templates</h2>
          <div className={styles.gallery}>
            {/* Replace with your actual template images */}
            <img src="/images/template1.png" alt="Resume Template 1" className={styles.galleryImage}/>
            <img src="/images/template2.png" alt="Instagram Template 1" className={styles.galleryImage}/>
            <img src="/images/template3.png" alt="Resume Template 2" className={styles.galleryImage}/>
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <p className={styles.sectionText}>
            Over 3 years of experience designing for Canva, with 50+ custom templates created for resumes, Instagram, and more. My work is loved for its girlish style, color harmony, and easy customization!
          </p>
        </section>

        {/* Contact Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <ul className={styles.contactList}>
            <li>Email: <a href="mailto:afomiaashagr@email.com">afomiaashagr@email.com</a></li>
            <li>Phone: <a href="tel:+251912345678">+251 912 345 678</a></li>
            <li>Location: Addis Ababa, Ethiopia</li>
          </ul>
        </section>
      </main>
    </div>
  );
}