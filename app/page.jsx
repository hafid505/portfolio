export default function Page() {
  const software = [
    { name: "Ps", label: "Photoshop" },
    { name: "Ai", label: "Illustrator" },
    { name: "Ae", label: "After Effects" },
    { name: "Pr", label: "Premiere Pro" },
    { name: "Fg", label: "Figma" },
  ];

  const projects = [
    {
      image: "/project-1.jpg",
      title: "Campaign & Communication Design",
      description:
        "Awareness materials, social media creatives, branding assets, and visual communication work for organizations and brands.",
    },
    {
      image: "/project-2.jpg",
      title: "Video Editing & Motion",
      description:
        "Promotional videos, short-form content, event edits, and storytelling visuals prepared for digital platforms and media use.",
    },
    {
      image: "/project-3.jpg",
      title: "Social Media Content",
      description:
        "Content design, post layouts, campaign visuals, and platform-ready creative assets built for engagement and consistency.",
    },
  ];

  return (
    <main style={styles.page}>
      <div style={styles.backgroundGlowOne} />
      <div style={styles.backgroundGlowTwo} />

      <header style={styles.navbar}>
        <div style={styles.logo}>Abdulhafid</div>

        <nav style={styles.navLinks}>
          <a href="#work" style={styles.navLink}>Work</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>

        <a href="/cv.pdf" download style={styles.cvButton}>
          Download my CV
        </a>
      </header>

      <section style={styles.heroSection}>
        <div style={styles.heroLeft}>
          <div style={styles.availabilityBadge}>
            <span style={styles.greenDot} />
            Available for projects
          </div>

          <div style={styles.heroLabel}>Selected Works 2025</div>

          <h1 style={styles.heroTitle}>
            Hi, I’m Abdulhafid, a Graphic Designer, Video Editor, and Social Media Manager.
          </h1>

          <p style={styles.heroText}>
            I create visual content that helps brands, media companies, and organizations
            look professional, communicate clearly, and connect better with their audience.
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

        <div style={styles.heroRight}>
          <div style={styles.rightCardTop}>
            <img src="/profile.jpg" alt="Abdulhafid" style={styles.profileImage} />

            <div>
              <div style={styles.sideMiniLabel}>Creative Direction</div>
              <h2 style={styles.sideTitle}>Abdulhafid</h2>
              <p style={styles.sideText}>
                Branding, visual communication, video editing, and digital content design.
              </p>
            </div>
          </div>

          <div style={styles.toolsBox}>
            <div style={styles.toolsTitle}>Software</div>
            <div style={styles.softwareGrid}>
              {software.map((item) => (
                <div key={item.label} style={styles.softwareItem}>
                  <div style={styles.softwareIcon}>{item.name}</div>
                  <span style={styles.softwareLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.focusBox}>
            <div style={styles.focusLabel}>Focus</div>
            <div style={styles.focusText}>Branding, Social Media, Video Content</div>
          </div>
        </div>
      </section>

      <section id="work" style={styles.sectionCard}>
        <h2 style={styles.sectionTitle}>Featured Work</h2>
        <p style={styles.sectionText}>
          A selection of projects focused on visual storytelling, branding, social media, and digital content production.
        </p>

        <div style={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.title} style={styles.projectCard}>
              <img src={project.image} alt={project.title} style={styles.projectImage} />
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={styles.sectionCard}>
        <h2 style={styles.sectionTitle}>About</h2>
        <p style={styles.aboutText}>
          I work across graphic design, social media content, video editing, and campaign visuals.
          My goal is to create clear, polished, and engaging creative work that supports brands,
          businesses, and organizations in a professional way.
        </p>
      </section>

      <section id="contact" style={styles.sectionCard}>
        <h2 style={styles.sectionTitle}>Let’s Work Together</h2>
        <p style={styles.sectionText}>
          Open to freelance projects, collaborations, and creative opportunities.
        </p>

        <div style={styles.contactButtons}>
          <a href="mailto:hafid.360@gmail.com" style={styles.primaryButton}>
            Email Me
          </a>
          <a
            href="https://wa.me/252612085585"
            target="_blank"
            rel="noreferrer"
            style={styles.secondaryButton}
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#02050b",
    color: "#ffffff",
    padding: "24px",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    position: "relative",
    overflowX: "hidden",
  },

  backgroundGlowOne: {
    position: "absolute",
    top: 120,
    left: -120,
    width: 420,
    height: 420,
    background: "radial-gradient(circle, rgba(142,255,0,0.08), transparent 65%)",
    filter: "blur(30px)",
    pointerEvents: "none",
  },

  backgroundGlowTwo: {
    position: "absolute",
    top: 380,
    right: -120,
    width: 440,
    height: 440,
    background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent 65%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },

  navbar: {
    maxWidth: "1400px",
    margin: "0 auto 28px auto",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "28px",
    padding: "20px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    position: "sticky",
    top: "20px",
    zIndex: 20,
  },

  logo: {
    fontSize: "24px",
    fontWeight: 800,
    letterSpacing: "-0.03em",
  },

  navLinks: {
    display: "flex",
    gap: "28px",
    alignItems: "center",
  },

  navLink: {
    color: "rgba(255,255,255,0.82)",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: 500,
  },

  cvButton: {
    backgroundColor: "#95ff17",
    color: "#071100",
    textDecoration: "none",
    padding: "16px 28px",
    borderRadius: "999px",
    fontWeight: 800,
    fontSize: "18px",
    boxShadow: "0 8px 20px rgba(149,255,23,0.22)",
  },

  heroSection: {
    maxWidth: "1400px",
    margin: "0 auto 28px auto",
    display: "grid",
    gridTemplateColumns: "1.65fr 1fr",
    gap: "24px",
    alignItems: "stretch",
  },

  heroLeft: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "34px",
    padding: "52px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
  },

  availabilityBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.08)",
    backgroundColor: "rgba(255,255,255,0.03)",
    fontSize: "16px",
    color: "rgba(255,255,255,0.9)",
    marginBottom: "18px",
  },

  greenDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#95ff17",
    boxShadow: "0 0 12px rgba(149,255,23,0.7)",
  },

  heroLabel: {
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "rgba(255,255,255,0.45)",
    marginBottom: "18px",
  },

  heroTitle: {
    fontSize: "clamp(52px, 7vw, 86px)",
    lineHeight: 1.02,
    margin: "0 0 28px 0",
    letterSpacing: "-0.05em",
    fontWeight: 800,
    maxWidth: "900px",
  },

  heroText: {
    fontSize: "clamp(20px, 2vw, 26px)",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.7)",
    maxWidth: "900px",
    marginBottom: "34px",
  },

  heroButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#95ff17",
    color: "#071100",
    textDecoration: "none",
    padding: "18px 28px",
    borderRadius: "18px",
    fontWeight: 800,
    fontSize: "18px",
    minWidth: "160px",
  },

  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "#ffffff",
    padding: "18px 26px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.08)",
    backgroundColor: "rgba(255,255,255,0.03)",
    fontWeight: 700,
    fontSize: "18px",
  },

  heroRight: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "34px",
    padding: "34px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "24px",
  },

  rightCardTop: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  profileImage: {
    width: "120px",
    height: "120px",
    borderRadius: "999px",
    objectFit: "cover",
    border: "2px solid rgba(255,255,255,0.18)",
    boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
  },

  sideMiniLabel: {
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    color: "#95ff17",
    marginBottom: "10px",
  },

  sideTitle: {
    fontSize: "48px",
    lineHeight: 1.05,
    margin: "0 0 12px 0",
    letterSpacing: "-0.04em",
    fontWeight: 800,
  },

  sideText: {
    fontSize: "19px",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.68)",
    margin: 0,
  },

  toolsBox: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "24px",
    padding: "22px",
    backgroundColor: "rgba(255,255,255,0.02)",
  },

  toolsTitle: {
    fontSize: "15px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: "rgba(255,255,255,0.48)",
    marginBottom: "18px",
  },

  softwareGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "14px",
  },

  softwareItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 14px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.08)",
    backgroundColor: "rgba(255,255,255,0.025)",
  },

  softwareIcon: {
    width: "42px",
    height: "42px",
    minWidth: "42px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: "16px",
    color: "#95ff17",
    backgroundColor: "rgba(149,255,23,0.08)",
    border: "1px solid rgba(149,255,23,0.16)",
  },

  softwareLabel: {
    fontSize: "16px",
    color: "rgba(255,255,255,0.9)",
    fontWeight: 600,
  },

  focusBox: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "24px",
    padding: "22px",
    backgroundColor: "rgba(255,255,255,0.02)",
  },

  focusLabel: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.48)",
    marginBottom: "10px",
  },

  focusText: {
    fontSize: "34px",
    lineHeight: 1.15,
    letterSpacing: "-0.03em",
    fontWeight: 800,
  },

  sectionCard: {
    maxWidth: "1400px",
    margin: "0 auto 28px auto",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "34px",
    padding: "40px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
  },

  sectionTitle: {
    fontSize: "54px",
    lineHeight: 1.05,
    margin: "0 0 16px 0",
    letterSpacing: "-0.04em",
    fontWeight: 800,
  },

  sectionText: {
    fontSize: "20px",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.68)",
    maxWidth: "980px",
    marginBottom: "28px",
  },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "20px",
  },

  projectCard: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "28px",
    padding: "18px",
    backgroundColor: "rgba(255,255,255,0.02)",
  },

  projectImage: {
    width: "100%",
    aspectRatio: "4 / 3",
    objectFit: "cover",
    borderRadius: "22px",
    display: "block",
    marginBottom: "18px",
  },

  projectTitle: {
    fontSize: "24px",
    lineHeight: 1.2,
    margin: "0 0 12px 0",
    fontWeight: 800,
    letterSpacing: "-0.03em",
  },

  projectDescription: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.68)",
    margin: 0,
  },

  aboutText: {
    fontSize: "22px",
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.72)",
    maxWidth: "1000px",
    margin: 0,
  },

  contactButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },
};
