
  import { useEffect ,useState } from "react";
  import { motion } from "framer-motion";
  import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    Code2,
    Github,
    Globe,
    Layers3,
    Mail,
    Menu,
    Monitor,
    Palette,
    Send,
    Sparkles,
    X,
    Zap,
  } from "lucide-react";

  const EMAIL = "Ansariarbaz9899@gmail.com";
  const GITHUB_URL = "https://github.com/ansariarbaz9899-rgb";
  const LINKEDIN_URL = "https://www.linkedin.com/in/arbaz-ansari-587936242";

  const projects = [
    {
      number: "01",
      name: "Alpha Forge",
      category: "PRODUCT DISCOVERY / AFFILIATE",
      description:
        "A product discovery website focused on presenting products through a clean, modern shopping experience.",
      stack: ["React", "Vite", "CSS", "Vercel"],
      accent: "orange",
      icon: Globe,
      live: "https://alpha-forge-beryl.vercel.app/",
      code: "",
      status: "Personal project",
    },
    {
      number: "02",
      name: "AnimeHub",
      category: "WEB APPLICATION",
      description:
        "An anime discovery experience with ongoing work on authentication, watchlists, viewing history and user profiles.",
      stack: ["React", "Firebase", "Firestore"],
      accent: "purple",
      icon: Layers3,
      live: "",
      code: "",
      status: "In development",
    },
    {
      number: "03",
      name: "Nutrition Tracker",
      category: "HEALTH / PRODUCTIVITY",
      description:
        "A nutrition tracking application concept for logging meals, reviewing calorie intake and monitoring progress.",
      stack: ["React", "JavaScript", "CSS"],
      accent: "green",
      icon: Zap,
      live: "",
      code: "",
      status: "Personal project",
    },
    {
      number: "04",
      name: "CreatorOS",
      category: "CREATOR PRODUCTIVITY",
      description:
        "A content planning interface concept for organizing social content and making publishing workflows easier to manage.",
      stack: ["React", "Vite", "Tailwind CSS"],
      accent: "blue",
      icon: Monitor,
      live: "",
      code: "",
      status: "Personal project",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Tailwind CSS",
    "Firebase",
    "Firestore",
    "Git",
    "GitHub",
    "Responsive UI",
    "Vercel",
  ];

  const services = [
    {
      icon: Monitor,
      number: "01",
      title: "Business websites",
      description:
        "Modern, responsive websites that explain your business clearly and help customers get in touch.",
    },
    {
      icon: Layers3,
      number: "02",
      title: "Landing pages",
      description:
        "Focused pages for a service, product, campaign or new business idea.",
    },
    {
      icon: Code2,
      number: "03",
      title: "React development",
      description:
        "Interactive interfaces, reusable components and improvements to existing React projects.",
    },
    {
      icon: Palette,
      number: "04",
      title: "UI improvements",
      description:
        "Responsive layouts, cleaner visual hierarchy and more consistent user experiences.",
    },
  ];

  const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const gmailCompose = (subject = "Let's work together", body = "") =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      EMAIL
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  function SectionHeading({ eyebrow, title, highlight, description }) {
    return (
      <motion.div
        className="section-heading"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
        <h2>
          {title} <span className="gradient-text">{highlight}</span>
        </h2>
        {description && <p>{description}</p>}
      </motion.div>
    );
  }

  function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
    ["About", "about"],
    ["Projects", "projects"],
    ["Services", "services"],
    ["Contact", "contact"],
  ];

  
const navigateToSection = (event, sectionId) => {
  event.preventDefault();
  setOpen(false);

  const scrollToSection = () => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (window.location.pathname !== "/") {
    window.history.pushState({}, "", "/");
  }

  // Scroll after returning to the portfolio homepage.
  requestAnimationFrame(() => {
    requestAnimationFrame(scrollToSection);
  });
};


    return (
      <header className="navbar">
        <div className="nav-inner container">
          
  <a
    className="brand"
    href="/"
    onClick={(event) => {
      setOpen(false);

      if (window.location.pathname === "/") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }}
    aria-label="Arbaz Ansari home"
  >

            <span className="brand-mark">A.</span>
            <span>arbaz<span className="brand-muted">/dev</span></span>
          </a>

  <nav className={`nav-links ${open ? "nav-open" : ""}`}>
    {links.map(([label, sectionId]) => (
      <a
        key={label}
        href={`/${sectionId}`}
        onClick={(event) => {
          navigateToSection(event, sectionId);
          setOpen(false);
        }}
      >
        {label}
      </a>
    ))}

    <button
      className="button button-primary"
      type="button"
      onClick={(event) => {
        setOpen(false);

        if (window.location.pathname === "/project-inquiry") {
          window.history.pushState({}, "", "/");
          window.dispatchEvent(new PopStateEvent("popstate"));
        }

        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
          });
        }, 50);
      }}
    >
      Let's Talk
    </button>
  </nav>


          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    );
  }

  function Hero() {
    return (
      <section className="hero container" id="home">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="availability">
              <span className="availability-dot" />
              OPEN TO SELECT PROJECTS
            </div>

            <p className="hero-pretitle">HELLO, I'M ARBAZ ANSARI</p>

            <h1>
              I turn ideas
              <br />
              into <span className="gradient-text">digital</span>
              <br />
              experiences<span className="hero-period">.</span>
            </h1>

            <p className="hero-description">
              A developer focused on building modern websites and useful web
              applications with thoughtful design, clean interfaces and
              practical functionality.
            </p>

            <div className="hero-actions">
    <a
      className="button button-primary"
      href="/projects"
      onClick={(event) => navigateToSection(event, "projects")}
    >
      Explore my work <ArrowUpRight size={17} />
    </a>

    <a
      className="button button-secondary"
      href="/contact"
      onClick={(event) => navigateToSection(event, "contact")}
    >
      Let's collaborate <ArrowDownRight size={17} />
    </a>
  </div>

            <div className="hero-meta">
              <span><Code2 size={15} /> React & web development</span>
              <span><Sparkles size={15} /> Design-minded builder</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-glow" />

            <div className="code-card">
              <div className="code-card-top">
                <div className="window-dots">
                  <i /><i /><i />
                </div>
                <span>developer.js</span>
                <Code2 size={15} />
              </div>

              <div className="code-content">
                <p><span className="code-purple">const</span> developer = {"{"}</p>
                <p className="code-indent">name: <span className="code-green">"Arbaz"</span>,</p>
                <p className="code-indent">focus: <span className="code-green">"Web"</span>,</p>
                <p className="code-indent">mindset: <span className="code-green">"Build"</span>,</p>
                <p className="code-indent">curiosity: <span className="code-orange">Infinity</span></p>
                <p>{"};"}</p>
                <p className="code-gap">
                  <span className="code-purple">while</span> (learning) {"{"}
                </p>
                <p className="code-indent">
                  <span className="code-blue">build</span>();
                </p>
                <p className="code-indent">
                  <span className="code-blue">improve</span>();
                </p>
                <p>{"}"}</p>
              </div>

              <div className="code-card-footer">
                <span><span className="availability-dot" /> Available for new ideas</span>
                <span>v1.0</span>
              </div>
            </div>

            <div className="floating-chip chip-top">
              <span className="chip-icon">{"</>"}</span>
              <span>Creative code</span>
            </div>

            <div className="floating-chip chip-bottom">
              <span className="chip-spark">✳</span>
              <span>Made to be useful</span>
            </div>

            <span className="art-index">AA — 001</span>
          </motion.div>
        </div>

        
  <a
    className="scroll-cue"
    href="/"
    onClick={(event) => {
      event.preventDefault();
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
    }}
  >
    <span className="scroll-line" />
    SCROLL TO EXPLORE
  </a>

      </section>
    );
  }

  function About() {
    return (
      <section className="section container" id="about">
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title="Curious mind."
          highlight="Builder's mindset."
          description="I enjoy learning how things work, solving problems and turning ideas into useful digital experiences."
        />

        <div className="about-grid">
          <motion.div
            className="about-copy"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              I'm <strong>Arbaz Ansari</strong>, a BCA graduate exploring the
              intersection of development, design and problem-solving.
            </p>
            <p>
              I work with React and modern frontend tools to build interfaces
              that are responsive, intuitive and maintainable. My personal
              projects help me learn by building real features, debugging
              problems and improving the user experience.
            </p>
            <p>
              I'm continuing to grow my skills and looking for opportunities
              to contribute to useful products and help businesses improve
              their online presence.
            </p>

          <a
    className="text-link"
    href="/contact"
    onClick={(event) => navigateToSection(event, "contact")}
  >
    Have a project in mind? <ArrowUpRight size={16} />
  </a>
          </motion.div>

          <motion.div
            className="about-facts"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="fact-card">
              <span className="fact-icon"><Code2 size={20} /></span>
              <div>
                <h3>Development</h3>
                <p>React, JavaScript and modern web interfaces.</p>
              </div>
            </div>
            <div className="fact-card">
              <span className="fact-icon"><Palette size={20} /></span>
              <div>
                <h3>Design thinking</h3>
                <p>Clear hierarchy, usability and responsive layouts.</p>
              </div>
            </div>
            <div className="fact-card">
              <span className="fact-icon"><Sparkles size={20} /></span>
              <div>
                <h3>Continuous learning</h3>
                <p>Learning by building, testing and improving.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  function Skills() {
    return (
      <section className="section skills-section">
        <div className="container">
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title="Tools I use to"
            highlight="bring ideas to life."
            description="Technologies and tools I've worked with in personal projects. My proficiency varies by tool."
          />

          <motion.div
            className="skills-grid"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                className="skill-pill"
                key={skill}
                whileHover={{ y: -4, borderColor: "rgba(183, 142, 255, .65)" }}
                transition={{ duration: 0.2 }}
              >
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  function Projects() {
    return (
      <section className="section container" id="projects">
        <SectionHeading
          eyebrow="SELECTED PROJECTS"
          title="Things I've"
          highlight="been building."
          description="Personal projects where I explore ideas, solve problems and put my development skills into practice."
        />

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.article
                className={`project-card accent-${project.accent}`}
                key={project.name}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className="project-visual">
                  <div className="project-visual-top">
                    <span>{project.number} / PROJECT</span>
                    <span className="project-visual-icon"><Icon size={20} /></span>
                  </div>
                  <div className="project-art">
                    <div className="project-art-orbit" />
                    <div className="project-art-window">
                      <div className="mini-window-top"><i /><i /><i /></div>
                      <div className="mini-window-body">
                        <div className="mini-line mini-line-wide" />
                        <div className="mini-line mini-line-short" />
                        <div className="mini-cards">
                          <span /><span /><span />
                        </div>
                      </div>
                    </div>
                    <span className="project-art-label">{project.name}</span>
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-body">
                  <div className="project-title-row">
                    <h3>{project.name}</h3>
                    <span className="project-number">{project.number}</span>
                  </div>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span className="project-status">{project.status}</span>
                    <div className="project-links">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${project.name}`}
                          title="Visit live project"
                        >
                          <ArrowUpRight size={17} />
                        </a>
                      ) : (
                        <span className="project-link-placeholder" title="Add verified live URL later">
                          <Globe size={16} />
                        </span>
                      )}
                      {project.code ? (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} source code`}
                          title="View source code"
                        >
                          <Github size={17} />
                        </a>
                      ) : (
                        <span className="project-link-placeholder" title="Add public repository when ready">
                          <Github size={16} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="projects-note">
          Project descriptions reflect current or planned work. Features and
          source links should be verified before this portfolio is published.
        </p>
      </section>
    );
  }

  function Services({ onDiscussProject }) {
    return (
      <section className="section services-section" id="services">
        <div className="container">
          <SectionHeading
            eyebrow="HOW I CAN HELP"
            title="Let's make something"
            highlight="useful."
            description="Focused web-development services for small businesses, founders and people with an idea to bring online."
          />

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  className="service-card"
                  key={service.number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ y: -4 }}
                  viewport={{ once: true }}
                >
                  <div className="service-top">
                    <span className="service-icon">
                      <Icon size={22} />
                    </span>
                    <span className="service-number">{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <button
                    type="button"
                    className="service-link"
                    onClick={onDiscussProject}
                  >
                    Discuss a project <ArrowUpRight size={16} />
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  function Contact() {
    const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      alert("Email address copied!");
    } catch {
      window.prompt("Copy this email address:", EMAIL);
    }
  };
    const subject = encodeURIComponent("Let's work together");
    const body = encodeURIComponent(
      "Hi Arbaz,\n\nI'd like to discuss a project.\n\nProject details:\n"
    );

    return (
      <section className="section container contact-section" id="contact">
        <div className="contact-card">
          <div className="contact-decoration contact-decoration-one" />
          <div className="contact-decoration contact-decoration-two" />

          <motion.div
            className="contact-content"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              HAVE SOMETHING IN MIND?
            </span>

            <h2>
              Let's build
              <br />
              something <span className="gradient-text">meaningful.</span>
            </h2>

            <p>
              Have an idea, need a website, or want to collaborate? Tell me
              what you're working on. Let's explore how I can help.
            </p>

          <a
    className="button button-primary contact-button"
    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent("Let's work together")}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Mail size={17} /> Start a conversation <ArrowUpRight size={17} />
  </a>

            <span className="contact-hint">
              Opens Gmail to compose an email
            </span>
          </motion.div>

          <div className="contact-side">
            <span className="contact-side-label">FIND ME ONLINE</span>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub <ArrowUpRight size={15} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <Globe size={18} /> LinkedIn <ArrowUpRight size={15} />
            </a>
            <a
    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Send size={18} /> Email <ArrowUpRight size={15} />
  </a>

      <button
    type="button"
    onClick={copyEmail}
    className="copy-email-button"
  >
    Copy my email address
  </button>

            <div className="contact-mini-note">
              <span className="availability-dot" />
              Open to suitable opportunities
            </div>
          </div>
        </div>
      </section>
    );
  }

  function Footer() {
    return (
      <footer className="footer">
        <div className="container footer-inner">
          <a
    className="brand"
    href="/"
    onClick={(event) => {
      if (window.location.pathname === "/") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }}
    aria-label="Arbaz Ansari home"
  >
            <span className="brand-mark">A.</span>
            <span>arbaz<span className="brand-muted">/dev</span></span>
          </a>
          <p>Designed with curiosity. Built with code.</p>
        <a
    className="back-to-top"
    href="/"
    onClick={(event) => {
      if (window.location.pathname === "/") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }}
  >
    Back to top ↑
  </a>
          <span className="footer-copy">
            © {new Date().getFullYear()} Arbaz Ansari
          </span>
        </div>
      </footer>
    );
  }

    function ProjectInquiry({ onBack }) {
    return (
      <main className="project-inquiry-page">
        <div className="container">
          <button
            type="button"
            className="service-link"
            onClick={onBack}
          >
            <ArrowDownRight
              size={16}
              style={{ transform: "rotate(135deg)" }}
            />
            Back to portfolio
          </button>

          <div className="project-inquiry-content">
            <span className="section-eyebrow">PROJECT INQUIRY</span>

            <h1>
              Let's build something <span>meaningful.</span>
            </h1>

            <p>
              Have a business idea, a website to build, or an existing
              application to improve? Tell me a little about your project
              and let's explore how we can bring it to life.
            </p>

            <div className="project-inquiry-actions">
              <a
                className="button button-primary"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  EMAIL
                )}&su=${encodeURIComponent("Project Inquiry")}&body=${encodeURIComponent(
                  "Hi Arbaz,\n\nI'd like to discuss a project with you.\n\nProject type:\nProject requirements:\nBudget:\nTimeline:\n\n"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={17} />
                Start a project inquiry
                <ArrowUpRight size={17} />
              </a>

              <p>
                Your email app will open with a project inquiry template.
                You can review and send it from there.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }


  export default function App() {
    const [showInquiry, setShowInquiry] = useState(
      window.location.pathname === "/project-inquiry"
    );

    useEffect(() => {
      const handlePopState = () => {
        setShowInquiry(window.location.pathname === "/project-inquiry");
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }, []);

    const openInquiry = () => {
      window.history.pushState({}, "", "/project-inquiry");
      setShowInquiry(true);
      window.scrollTo(0, 0);
    };

    const goHome = () => {
      window.history.pushState({}, "", "/");
      setShowInquiry(false);
      window.scrollTo(0, 0);
    };

    if (showInquiry) {
      return <ProjectInquiry onBack={goHome} />;
    }

    return (
      <>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services onDiscussProject={openInquiry} />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }