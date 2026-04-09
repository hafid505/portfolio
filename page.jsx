export default function AbdulhafidPortfolio() {
  const projects = [
    {
      title: "Branding & Campaign Design",
      description:
        "Visual campaigns, NGO communication materials, social media creatives, and event design tailored for impact and clarity.",
    },
    {
      title: "Video Editing & Motion",
      description:
        "Promotional edits, social videos, awareness content, and broadcast-ready visuals shaped for engagement and storytelling.",
    },
    {
      title: "Social Media & Content",
      description:
        "Content planning, creative direction, post design, and platform-ready visuals for brands, media, and organizations.",
    },
  ];

  const workItems = [
    {
      category: "NGO / Communication Design",
      name: "Public awareness and campaign materials",
    },
    {
      category: "Media / Broadcast",
      name: "TV, digital, and promotional visual work",
    },
    {
      category: "Brand / Social Media",
      name: "Creative assets for business and online presence",
    },
  ];

  return (
    <div className="min-h-screen bg-[#090b10] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b10]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-2xl font-semibold tracking-tight">Abdulhafid</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#7CFC00] px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:scale-[1.02]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Download my CV
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
        <section className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 shadow-2xl lg:p-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#7CFC00]" />
              Available for projects
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white/95 md:text-6xl">
              Hi, I’m Abdulhafid, a Graphic Designer, Video Editor, and Social Media Manager.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              I create visual content that helps brands, media companies, and organizations communicate clearly, look professional, and connect with their audience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium transition hover:bg-white/10"
              >
                Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/hafid505"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/hafid505"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                Behance
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-2xl">
            <div className="aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
              <div className="flex h-full items-center justify-center text-center text-white/35">
                Your profile image
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mt-6 grid gap-6 lg:grid-cols-3">
          {workItems.map((item) => (
            <div
              key={item.name}
              className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 shadow-xl"
            >
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                {item.category}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">{item.name}</h3>
              <div className="mt-10 flex h-48 items-center justify-center rounded-[22px] border border-dashed border-white/10 bg-black/20 text-sm text-white/30">
                Project image placeholder
              </div>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 shadow-xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white/90">Stack I use</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/75">
              {[
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Premiere Pro",
                "After Effects",
                "Canva",
                "CapCut",
                "Social Media Design",
                "Content Planning",
              ].map((tool) => (
                <div
                  key={tool}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 shadow-xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white/90">What I do</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {projects.map((item) => (
                <div key={item.title}>
                  <div className="mb-5 h-10 w-10 rounded-full border border-white/10 bg-white/5" />
                  <h3 className="text-2xl font-medium text-white/90">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 shadow-xl">
            <h2 className="max-w-sm text-5xl font-semibold tracking-tight text-white/90">Let’s build something strong together.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/65">
              I’m open to freelance projects, creative collaborations, and full-time opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hafid.360@gmail.com"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium transition hover:bg-white/10"
              >
                Email me
              </a>
              <a
                href="https://wa.me/252612085585"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div id="about" className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 shadow-xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white/90">About</h2>
            <p className="mt-6 text-base leading-8 text-white/70">
              I have years of experience across media, design, digital communication, and content production. My work includes social media visuals, awareness campaigns, event branding, video editing, and creative materials for organizations and businesses.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-semibold">9+</div>
                <div className="mt-2 text-sm text-white/60">Years of experience</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-semibold">International projects</div>
                <div className="mt-2 text-sm text-white/60">Creative work across multiple sectors</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-6 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 shadow-xl">
          <h2 className="text-5xl font-semibold tracking-tight text-white/90">Have a project in mind?</h2>
          <p className="mt-4 text-lg text-white/65">
            Let’s connect and bring your digital vision to life.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hafid.360@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium transition hover:bg-white/10"
            >
              hafid.360@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/hafid505"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium transition hover:bg-white/10"
            >
              LinkedIn profile
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
