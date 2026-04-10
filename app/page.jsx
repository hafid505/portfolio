export default function Page() {
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

  const software = [
    { short: "Ps", name: "Photoshop" },
    { short: "Ai", name: "Illustrator" },
    { short: "Ae", name: "After Effects" },
    { short: "Pr", name: "Premiere Pro" },
    { short: "Id", name: "InDesign" },
    { short: "Fg", name: "Figma" },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #05070b;
          color: #f5f5f5;
          font-family: Inter, Arial, sans-serif;
        }
        a { text-decoration: none; color: inherit; }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top, rgba(145,255,0,0.06), transparent 18%),
            linear-gradient(180deg, #04060a 0%, #05070b 100%);
          padding: 24px;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .nav {
          position: sticky;
          top: 16px;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 24px;
          margin-bottom: 28px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          background: rgba(10,12,18,0.82);
          backdrop-filter: blur(14px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.28);
        }

        .brand {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          color: rgba(255,255,255,0.8);
          font-weight: 500;
        }

        .cv-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 26px;
          border-radius: 999px;
          background: #91ff00;
          color: #071000;
          font-weight: 800;
          font-size: 18px;
          box-shadow: 0 10px 30px rgba(145,255,0,0.18);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.65fr 0.95fr;
          gap: 24px;
          align-items: stretch;
        }

        .card {
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 34px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          box-shadow: 0 24px 48px rgba(0,0,0,0.32);
        }

        .hero-main {
          padding: 48px;
          background:
            radial-gradient(circle at top left, rgba(145,255,0,0.08), transparent 20%),
            linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          font-size: 15px;
          color: rgba(255,255,255,0.92);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #91ff00;
          box-shadow: 0 0 14px rgba(145,255,0,0.8);
        }

        .eyebrow {
          margin-top: 24px;
          margin-bottom: 18px;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.42);
        }

        .hero-title {
          margin: 0 0 26px 0;
          max-width: 900px;
          font-size: clamp(54px, 7vw, 92px);
          line-height: 0.94;
          font-weight: 900;
          letter-spacing: -0.05em;
        }

        .hero-text {
          margin: 0 0 34px 0;
          max-width: 760px;
          font-size: clamp(20px, 2vw, 24px);
          line-height: 1.75;
          color: rgba(255,255,255,0.72);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .primary-btn, .secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 62px;
          padding: 16px 26px;
          border-radius: 20px;
          font-size: 18px;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .primary-btn {
          background: #91ff00;
          color: #071000;
          box-shadow: 0 10px 30px rgba(145,255,0,0.18);
        }

        .secondary-btn {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
        }

        .hero-side {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .profile-card {
          padding: 34px;
        }

        .profile-image {
          width: 110px;
          height: 110px;
          border-radius: 999px;
          object-fit: cover;
          border: 2px solid rgba(255,255,255,0.18);
          display: block;
          margin-bottom: 22px;
        }

        .mini-label {
          margin-bottom: 14px;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #91ff00;
        }

        .profile-title {
          margin: 0 0 14px 0;
          font-size: clamp(30px, 2.2vw, 42px);
          line-height: 1.06;
          letter-spacing: -0.03em;
        }

        .profile-text {
          margin: 0;
          font-size: 19px;
          line-height: 1.8;
          color: rgba(255,255,255,0.72);
        }

        .software-card,
        .focus-card,
        .section-card,
        .contact-card,
        .about-card {
          padding: 30px;
        }

        .card-label {
          margin-bottom: 18px;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.42);
        }

        .software-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .software-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 18px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          font-size: 18px;
          font-weight: 700;
        }

        .software-icon {
          width: 46px;
          height: 46px;
          min-width: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(145,255,0,0.08);
          border: 1px solid rgba(145,255,0,0.18);
          color: #91ff00;
          font-weight: 900;
          font-size: 24px;
        }

        .focus-text {
          font-size: clamp(30px, 3vw, 44px);
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .section-card {
          margin-top: 24px;
        }

        .section-title {
          margin: 0 0 12px 0;
          font-size: clamp(38px, 4vw, 56px);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .section-text {
          max-width: 900px;
          margin: 0 0 26px 0;
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255,255,255,0.72);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .project-card {
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
        }

        .project-image {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
        }

        .project-content {
          padding: 20px;
        }

        .project-title {
          margin: 0 0 12px 0;
          font-size: 22px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .project-text {
          margin: 0;
          font-size: 17px;
          line-height: 1.75;
          color: rgba(255,255,255,0.7);
        }

        .about-grid,
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 24px;
        }

        .about-title,
        .contact-title {
          margin: 0 0 14px 0;
          font-size: 32px;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .about-text,
        .contact-text {
          margin: 0;
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255,255,255,0.72);
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 18px;
        }

        .contact-link {
          padding: 16px 18px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          font-size: 17px;
          color: rgba(255,255,255,0.92);
        }

        @media (max-width: 1100px) {
          .hero-grid,
          .about-grid,
          .contact-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .hero-main {
            padding: 34px;
          }

          .hero-title {
            font-size: clamp(46px, 11vw, 72px);
          }

          .hero-text,
          .profile-text,
          .about-text,
          .contact-text,
          .section-text,
          .project-text {
            font-size: 17px;
          }
        }

        @media (max-width: 700px) {
          .page {
            padding: 14px;
          }

          .nav {
            padding: 16px 18px;
            border-radius: 22px;
            flex-wrap: wrap;
          }

          .nav-links {
            order: 3;
            width: 100%;
            justify-content: center;
            gap: 22px;
            font-size: 15px;
          }

          .brand {
            font-size: 18px;
          }

          .cv-btn {
            width: 100%;
            font-size: 17px;
          }

          .hero-main,
          .profile-card,
          .software-card,
          .focus-card,
          .section-card,
          .about-card,
          .contact-card {
            padding: 22px;
            border-radius: 24px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
          }

          .software-grid {
            grid-template-columns: 1fr;
          }

          .profile-image {
            width: 86px;
            height: 86px;
          }

          .focus-text {
            font-size: 28px;
          }
        }
      `}</style>

      <main className="page">
        <div className="container">
          <nav className="nav">
            <div className="brand">Abdulhafid</div>

            <div className="nav-links">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

            <a href="/cv.pdf" download className="cv-btn">
              Download my CV
            </a>
          </nav>

          <section className="hero-grid">
            <div className="card hero-main">
              <div className="badge">
                <span className="dot" />
                Available for projects
              </div>

              <div className="eyebrow">Creative Portfolio</div>

              <h1 className="hero-title">
                Abdulhafid crafts design, video, and social media visuals that
                help brands communicate with clarity and impact.
              </h1>

              <p className="hero-text">
                I create branding, campaign materials, edited video content, and
                platform-ready creative work designed to look polished, feel
                modern, and connect with the right audience.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="primary-btn">
                  Get in touch
                </a>

                <a
                  href="https://www.linkedin.com/in/hafid505"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.behance.net/hafid505"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
                >
                  Behance
                </a>
              </div>
            </div>

            <div className="hero-side">
              <div className="card profile-card">
                <img
                  src="/profile.jpg"
                  alt="Abdulhafid"
                  className="profile-image"
                />

                <div className="mini-label">Creative Profile</div>

                <h2 className="profile-title">
                  Graphic designer and video editor focused on digital
                  communication.
                </h2>

                <p className="profile-text">
                  I build visual content across branding, social media,
                  campaigns, and video, with a strong focus on clean design,
                  consistency, and audience-friendly presentation.
                </p>
              </div>

              <div className="card software-card">
                <div className="card-label">Software</div>

                <div className="software-grid">
                  {software.map((item) => (
                    <div className="software-item" key={item.name}>
                      <span className="software-icon">{item.short}</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card focus-card">
                <div className="card-label">Focus</div>
                <div className="focus-text">
                  Branding, Campaign Design, Video Editing, Social Media Content
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="card section-card">
            <h2 className="section-title">Featured Work</h2>
            <p className="section-text">
              A selection of branding, campaign design, video, and social media
              work created for digital communication and visual impact.
            </p>

            <div className="projects-grid">
              {projects.map((project) => (
                <div className="project-card" key={project.title}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-text">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="about-grid">
            <div className="card about-card">
              <h2 className="about-title">About</h2>
              <p className="about-text">
                I work in graphic design, video editing, and social media
                content, creating visual work that is practical, modern, and
                built for real communication goals.
              </p>
            </div>

            <div className="card about-card">
              <h2 className="about-title">What I do</h2>
              <p className="about-text">
                Branding support, campaign visuals, content layouts, promotional
                edits, social media design, and creative materials prepared for
                digital platforms and presentations.
              </p>
            </div>
          </section>

          <section id="contact" className="contact-grid">
            <div className="card contact-card">
              <h2 className="contact-title">Let’s work together</h2>
              <p className="contact-text">
                Available for freelance work, collaborations, brand visuals,
                campaign design, social media content, and video editing
                projects.
              </p>
            </div>

            <div className="card contact-card">
              <h2 className="contact-title">Contact</h2>
              <p className="contact-text">
                Reach out through email or connect with me on LinkedIn and
                Behance.
              </p>

              <div className="contact-list">
                <a className="contact-link" href="mailto:hafid.360@gmail.com">
                  hafid.360@gmail.com
                </a>

                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/hafid505"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>

                <a
                  className="contact-link"
                  href="https://www.behance.net/hafid505"
                  target="_blank"
                  rel="noreferrer"
                >
                  Behance Portfolio
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
