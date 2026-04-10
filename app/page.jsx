export default function Page() {
  const projects = [
    {
      title: "Campaign & Communication Design",
      description:
        "Awareness materials, social media creatives, branding assets, and visual communication work for organizations and brands.",
      image: "/project-1.jpg",
    },
    {
      title: "Video Editing & Motion",
      description:
        "Promotional videos, short-form content, event edits, and storytelling visuals prepared for digital platforms and media use.",
      image: "/project-2.jpg",
    },
    {
      title: "Social Media Content",
      description:
        "Content design, post layouts, campaign visuals, and platform-ready creative assets built for engagement and consistency.",
      image: "/project-3.jpg",
    },
  ];

  const tools = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Premiere Pro",
    "After Effects",
    "Canva",
    "CapCut",
    "Content Design",
    "Social Media Management",
  ];

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>Abdulhafid</div>

        <nav style={styles.nav}>
          <a href="#work" style={styles.navLink}>Work</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>

        <a href="/cv.pdf" download style={styles.cvButton}>
          Download my CV
        </a>
      </header>

      <section style={styles.heroSection}>
        <div style={styles.heroCard}>
          <div style={styles.availableBadge}>
            <span style={styles.greenDot} />
            Available for projects
          </div>

          <img
            src="/profile.jpg"
            alt="Abdulhafid"
            style={styles.smallProfileImage}
          />

          <h1 style={styles.heroTitle}>
            Hi, I’m Abdulhafid, a Graphic Designer, Video Editor, and Social
            Media Manager.
          </h1>

          <p style={styles.heroText}>
            I create visual content that helps brands, media companies, and
            organizations look professional, communicate clearly, and connect
            better with their audience.
          </p>

          <div style={styles.heroButtons}>
            <a href="#contact" style={styles.primaryButton}>Get in touch</a>
            <a
              href="https://www.linkedin.com/in/hafid505"
              target="_blank"
              rel="noreferrer"
              style={styles.secondaryButton}
            >
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/hafid505"
              target="_blank"
              rel="noreferrer"
              style={styles.secondaryButton}
            >
              Behance
            </a>
          </div>
        </div>
      </section>

      <section id="work" style={styles.section}>
        <div style={styles.sectionCard}>
          <h2 style={styles.sectionTitle}>Featured Work</h2>
          <p style={styles.sectionSubtext}>
            Replace these sample project images with your real designs, video
            thumbnails, campaign posters, branding work, or social media
            projects.
          </p>

          <div style={styles.projectGrid}>
            {projects.map((project, index) => (
              <div key={index} style={styles.projectCard}>
                <div style={styles.projectImageWrap}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={styles.projectImage}
                  />
                </div>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.twoColumnSection}>
        <div style={styles.sectionCard}>
          <h2 style={styles.sectionTitle}>Stack I use</h2>
          <div style={styles.toolsGrid}>
            {tools.map((tool, index) => (
              <div key={index} style={styles.toolBox}>
                {tool}
              </div>
            ))}
          </div>
        </div>

        <div id="about" style={styles.sectionCard}>
          <h2 style={styles.sectionTitle}>About</h2>
          <p style={styles.aboutText}>
            I work across graphic design, video editing, content creation, and
            social media visuals. My experience includes campaign materials,
            branded content, event visuals, promotional designs, and digital
            creative work for different audiences and sectors.
          </p>

          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>9+</div>
              <div style={styles.statLabel}>Years of experience</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>Creative</div>
              <div style={styles.statLabel}>Design and media work</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactCard}>
          <h2 style={styles.contactTitle}>Have a project in mind?</h2>
          <p style={styles.contactText}>
            Let’s connect and build something strong, creative, and professional.
          </p>

          <div style={styles.contactButtons}>
            <a href="mailto:hafid.360@gmail.com" style={styles.primaryButton}>
              hafid.360@gmail.com
            </a>
            <a
              href="https://wa.me/971582048919"
              target="_blank"
              rel="noreferrer"
              style={styles.secondaryButton}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#090b10",
    color: "#ffffff",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    maxWidth: "1280px",
    margin: "0 auto 24px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    padding: "18px 22px",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(10px)",
    flexWrap: "wrap",
  },

  logo: {
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "-0.02em",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
    flexWrap: "wrap",
  },

  navLink: {
    color: "rgba(255,255,255,0.78)",
    textDecoration: "none",
    fontSize: "15px",
  },

  cvButton: {
    backgroundColor: "#8CFF1A",
    color: "#000000",
    padding: "14px 24px",
    borderRadius: "999px",
    fontWeight: "700",
    fontSize: "16px",
    textDecoration: "none",
    display: "inline-block",
  },

  heroSection: {
    maxWidth: "1280px",
    margin: "0 auto",
  },

  heroCard: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "32px",
    padding: "48px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
  },

  availableBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.08)",
    backgroundColor: "rgba(255,255,255,0.04)",
    color: "rgba(255,255,255,0.8)",
    fontSize: "14px",
    marginBottom: "20px",
  },

  greenDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#8CFF1A",
    display: "inline-block",
  },

  smallProfileImage: {
    width: "96px",
    height: "96px",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    border: "2px solid rgba(255,255,255,0.12)",
    marginBottom: "24px",
  },

  heroTitle: {
    fontSize: "56px",
    lineHeight: "1.08",
    fontWeight: "700",
    letterSpacing: "-0.03em",
    margin: "0 0 22px 0",
    maxWidth: "820px",
  },

  heroText: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "rgba(255,255,255,0.68)",
    maxWidth: "760px",
    margin: "0 0 28px 0",
  },

  heroButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryButton: {
    backgroundColor: "#8CFF1A",
    color: "#000000",
    padding: "14px 22px",
    borderRadius: "18px",
    fontWeight: "700",
    fontSize: "15px",
    textDecoration: "none",
    display: "inline-block",
  },

  secondaryButton: {
    backgroundColor: "rgba(255,255,255,0.05)",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "18px",
    fontWeight: "600",
    fontSize: "15px",
    textDecoration: "none",
    display: "inline-block",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  section: {
    maxWidth: "1280px",
    margin: "24px auto 0 auto",
  },

  sectionCard: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "32px",
    padding: "36px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
  },

  sectionTitle: {
    fontSize: "42px",
    fontWeight: "700",
    letterSpacing: "-0.03em",
    margin: "0 0 12px 0",
  },

  sectionSubtext: {
    fontSize: "17px",
    lineHeight: "1.8",
    color: "rgba(255,255,255,0.65)",
    margin: "0 0 26px 0",
    maxWidth: "880px",
  },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "20px",
  },

  projectCard: {
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "26px",
    padding: "18px",
  },

  projectImageWrap: {
    width: "100%",
    aspectRatio: "4 / 3",
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "#111318",
    marginBottom: "18px",
  },

  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  projectTitle: {
    fontSize: "24px",
    fontWeight: "700",
    margin: "0 0 10px 0",
  },

  projectDescription: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "rgba(255,255,255,0.65)",
    margin: 0,
  },

  twoColumnSection: {
    maxWidth: "1280px",
    margin: "24px auto 0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: "24px",
  },

  toolsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "12px",
    marginTop: "24px",
  },

  toolBox: {
    padding: "16px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.08)",
    backgroundColor: "rgba(255,255,255,0.04)",
    color: "rgba(255,255,255,0.82)",
    fontSize: "15px",
  },

  aboutText: {
    fontSize: "18px",
    lineHeight: "1.9",
    color: "rgba(255,255,255,0.68)",
    margin: "18px 0 0 0",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "16px",
    marginTop: "28px",
  },

  statCard: {
    padding: "24px",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.08)",
    backgroundColor: "rgba(255,255,255,0.04)",
  },

  statNumber: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  statLabel: {
    color: "rgba(255,255,255,0.65)",
    fontSize: "15px",
  },

  contactSection: {
    maxWidth: "1280px",
    margin: "24px auto 0 auto",
    paddingBottom: "24px",
  },

  contactCard: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "32px",
    padding: "42px 36px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
  },

  contactTitle: {
    fontSize: "48px",
    fontWeight: "700",
    letterSpacing: "-0.03em",
    margin: "0 0 12px 0",
  },

  contactText: {
    fontSize: "18px",
    color: "rgba(255,255,255,0.68)",
    margin: "0 0 26px 0",
    lineHeight: "1.8",
  },

  contactButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },
};
