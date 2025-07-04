import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bayu Raihan Paratama</h1>
        <div className={styles.subtitle}>Backend Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a Backend Developer from Balikpapan, Indonesia. I primarily
              work with JavaScript.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on backend development with Node.js and MySQL, while also working with react, Javascript, Three.js, HTML, CSS, Figma, Java, Numpy and Python to build interactive and scalable digital experiences.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Kalimantan Institute of Technology</span> as
              BackEnd Developer,working with a lean team of frontend engineers to build innovative academic and community applications.
            </p>
            <p className={styles.paragraph}>
              I focus on developing backend logic using JavaScript and Python,
              designing and managing relational databases with MySQL,
              and supporting interactive front-end experiences through Three.js.
              My role emphasizes building reliable data processing workflows, maintaining clean and
              maintainable codebases, and ensuring seamless collaboration across a multidisciplinary team.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming stuff, I like to read a good
              action comic dan watch action anime like one piece, listen to pop music or just laze around.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
