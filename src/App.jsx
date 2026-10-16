import {useState} from "react";
import { AnimatePresence, motion} from "motion/react";
import rithikPhoto from "./assets/rithik.png";
import {
  ArrowRight,
  ArrowDown,
  BrainCircuit,
  Code2,
  Globe,
  Mail,
  Sparkles,
  UserRound,
  FolderGit2,
  GraduationCap,
  Award,
  FileText,
  Download,
  ArrowUpRight
} from "lucide-react";
import "./App.css";


const skills = [
  { name: "Python", url: "https://www.w3schools.com/python/" },
  { name: "Java", url: "https://www.w3schools.com/java/" },
  { name: "JavaScript", url: "https://www.w3schools.com/js/" },
  { name: "React.js", url: "https://www.w3schools.com/react/" },
  { name: "Node.js", url: "https://www.w3schools.com/nodejs/" },
  { name: "SQL", url: "https://www.w3schools.com/sql/" },
  { name: "MongoDB", url: "https://www.w3schools.com/mongodb/" },
  {
    name: "Deep Learning",
    url: "https://www.w3schools.com/python/python_ml_getting_started.asp",
  },
  {
    name: "TensorFlow / Keras",
    url: "https://www.w3schools.com/python/python_ml_getting_started.asp",
  },
  { name: "Git / GitHub", url: "https://www.w3schools.com/git/" },
  { name: "Data Analysis", url: "https://www.w3schools.com/datascience/" },
];

const projects = [
  {
    number: "01",
    type: "AI/MACHINE LEARNING",
    title: "Robust Face Multimodal Emotion Recognition",
    description:
    "Exploring Emotion Recognition using visual,audio and text data with Deep learning and cross-modal attention.",
    technologies: "Python . Deep Learning . TensorFLow",
    
github: "https://github.com/Rithikbhanja/Multi-ML-EmoSentiment",
overview:
  "A deep learning project exploring emotion and sentiment recognition using multiple modalities.",
advantages: [
  "Combines information from different modalities.",
  "Provides practical experience with deep learning pipelines.",
  "Demonstrates multimodal feature processing."
],
limitations: [
  "Performance depends on data quality and modality alignment.",
  "Training multiple modality encoders can be computationally expensive."
],
datasets: [
  "FER2013 — facial emotion images",
  "RAVDESS — audio emotion data",
  "GoEmotions — text emotion data",
  "MELD — multimodal conversational emotion data"
]

  },
  {
    number: "02",
    type: "Full-Stack Development",
    title: "Expense Tracker",
    description:
    "An expense management project focused on user interactions,backend logic,and persistent expense records.",
    technologies : "Javascript . Node.js . Express",

  },
  
];


function FrontPage({ onEnter }) {
  return (
    <motion.main
      className="landing-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Purple sci-fi background */}
      <div className="universe-background">
        <div className="universe-grid" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <div className="universe-glow universe-glow-one" />
        <div className="universe-glow universe-glow-two" />
      </div>

      {/* Landing page content */}
      <section className="landing-content">
        <motion.p
          className="landing-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WELCOME TO MY UNIVERSE
        </motion.p>

        <motion.h1
          className="landing-name"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Rithik <span>Bhanja.</span>
        </motion.h1>

        <motion.h2
          className="landing-role"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          SOFTWARE DEVELOPER
          <span className="role-separator"> · </span>
          AI/ML ENTHUSIAST
        </motion.h2>

        <motion.p
          className="landing-description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Exploring the intersection of code, intelligence, and creativity.
          Building digital experiences and intelligent solutions, one idea
          at a time.
        </motion.p>

        <motion.button
          type="button"
          className="enter-world-button"
          onClick={onEnter}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <span>ENTER MY WORLD</span>
          <span className="enter-arrow" aria-hidden="true">→</span>
        </motion.button>

        <motion.div
          className="landing-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <span>DESIGNED BY RITHIK BHANJA</span>
          <span>PORTFOLIO · 2026</span>
        </motion.div>
      </section>
    </motion.main>
  );
}



function Intro({ onEnter }) {
  return (
    <motion.main
      className="intro-screen cinematic-intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <button
        type="button"
        className="intro-title"
        onClick={onEnter}
        aria-label="Enter Rithik DEV"
      >
        <span className="intro-name">
          Rithik <b>DEV</b>
        </span>
      </button>
    </motion.main>
  );
}




function Portfolio({ onOpenCredentials }) {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const navigation = [
    { id: "home", label: "Home", icon: Sparkles },
    { id: "about", label: "About", icon: UserRound },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "training", label: "Training", icon: GraduationCap },
    { id: "internships", label: "Internships & Certifications", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const goToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.div
      className="portfolio portfolio-dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <aside className="portfolio-sidebar">
        <a
          className="brand"
          href="#home"
          onClick={() => goToSection("home")}
        >
          RB<span>.</span>
        </a>

        <div className="sidebar-profile">
          <div className="sidebar-avatar">RB</div>
          <h3>Rithik Bhanja</h3>
          <p>Software Developer</p>
          <span className="profile-status">
            <span className="status-dot" /> Open to opportunities
          </span>
        </div>

        <p className="sidebar-heading">WORKSPACE</p>

        <nav className="sidebar-navigation" aria-label="Portfolio sections">
          {navigation.map(({ id, label, icon: Icon }) => (
            <button
              type="button"
              key={id}
              className={`sidebar-link ${
                activeSection === id ? "active" : ""
              }`}
              
              onClick={() => {
                if (id === "internships") {
                  onOpenCredentials?.();
                } else {
                  goToSection(id);
                }
              }}

            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <p>BUILD · LEARN · INNOVATE</p>
          <a
            href="https://github.com/rithikbhanja83"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={16} /> GitHub Profile
          </a>
        </div>
      </aside>

      <main className="portfolio-main">
        <header className="portfolio-topbar">
          <div>
            <p className="topbar-label">DEVELOPER UNIVERSE</p>
            <p className="topbar-subtitle">
              My space to build, experiment, and grow.
            </p>
          </div>
          <a className="nav-cta" href="#contact">
            Let's connect <ArrowRight size={15} />
          </a>
        </header>

        <section id="home" className="dashboard-hero">
          <div className="dashboard-hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              SOFTWARE DEVELOPMENT + AI/ML
            </p>

            <h1>
              Turning curiosity
              <br />
              into <span>possibility.</span>
            </h1>

            <p className="hero-description">
              I'm Rithik, a B.Tech graduate interested in software
              engineering, artificial intelligence, and building
              technology that solves real problems.
            </p>

            <div className="hero-actions">
              <button
                className="button-primary"
                type="button"
                onClick={() => goToSection("projects")}
              >
                Explore my work <ArrowRight size={17} />
              </button>

              <button
                className="button-secondary"
                type="button"
                onClick={() => goToSection("about")}
              >
                My story
              </button>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/rithikbhanja83"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Code2 size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/rithik-bhanja08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Globe size={19} />
              </a>
              <span>BUILD · EXPERIMENT · LEARN</span>
            </div>
          </div>

          <div className="dashboard-hero-visual">
            <div className="dashboard-photo-glow" />
            <div className="dashboard-photo-frame">
              <img
                src={rithikPhoto}
                alt="Rithik Bhanja, software developer"
              />
            </div>
            <div className="photo-caption">
              <span className="status-dot" />
              <div>
                <strong>Rithik Bhanja</strong>
                <p>Developer · AI/ML Enthusiast</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="dashboard-section">
          <p className="section-kicker">01 / ABOUT ME</p>
          <h2>
            Curious by nature.
            <br />
            <span>Driven by possibilities.</span>
          </h2>
          <p className="section-description">
            I'm a B.Tech graduate exploring the intersection of software
            development and artificial intelligence. I enjoy learning
            technologies, understanding complex problems, and turning
            ideas into working projects.
          </p>
          <p className="section-description">
            I use AI tools to explore ideas and learn unfamiliar concepts,
            while checking generated code, testing assumptions, and taking
            responsibility for the final result.
          </p>
        </section>

        <section id="skills" className="dashboard-section">
          <p className="section-kicker">02 / MY TOOLKIT</p>
          <h2>Technologies for <span>building things.</span></h2>
          <p className="section-description">
            A growing toolkit across software development, data, and AI.
          </p>
          <div className="skills-grid">
            {skills.map((skill) => (
              <a
                className="skill-chip"
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={17} aria-hidden="true" />
                {skill.name}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section id="projects" className="dashboard-section">
          <p className="section-kicker">03 / SELECTED WORK</p>
          <h2>Ideas turned into <span>projects.</span></h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card clickable-project"
                key={project.number}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                <div className="project-art" aria-hidden="true">
                  <span>{project.number}</span>
                  <BrainCircuit size={38} strokeWidth={1.1} />
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                <p className="project-tech">{project.technologies}</p>
              </article>
            ))}
          </div>
        </section>

        {selectedProject && (
  <section className="dashboard-section project-detail">
    <button
      type="button"
      className="button-secondary"
      onClick={() => setSelectedProject(null)}
    >
      ← Back to projects
    </button>

    <p className="section-kicker">
      PROJECT DETAILS
    </p>

    <h2>{selectedProject.title}</h2>

    <p className="section-description">
      {selectedProject.overview || selectedProject.description}
    </p>

    <h3>Technologies</h3>
    <p className="section-description">
      {selectedProject.technologies}
    </p>

    {selectedProject.datasets?.length > 0 && (
      <>
        <h3>Datasets</h3>
        <ul>
          {selectedProject.datasets.map((dataset) => (
            <li key={dataset}>{dataset}</li>
          ))}
        </ul>
      </>
    )}

    {selectedProject.advantages?.length > 0 && (
      <>
        <h3>Advantages</h3>
        <ul>
          {selectedProject.advantages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    )}

    {selectedProject.limitations?.length > 0 && (
      <>
        <h3>Limitations</h3>
        <ul>
          {selectedProject.limitations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    )}

    {selectedProject.github && (
      <a
        className="button-primary"
        href={selectedProject.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        View source code <ArrowRight size={17} />
      </a>
    )}
  </section>
)}

        <section id="training" className="dashboard-section">
          <p className="section-kicker">04 / CURRENTLY LEARNING</p>
          <div className="training-card">
            <Sparkles size={27} />
            <h2>Data Science &amp; AI/ML</h2>
            <p className="training-location">
              JSPiders · Bengaluru, Marathahalli
            </p>
            <p className="section-description">
              Currently enrolled in structured training focused on
              Data Science, Artificial Intelligence, and Machine Learning.
            </p>
            <a
              className="button-primary"
              href="https://qspiders.com/branches/marathahalli-jspiders?branchId=11-branchId"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore JSPiders <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section id="internships" className="dashboard-section">
          <p className="section-kicker">05 / PROFESSIONAL DEVELOPMENT</p>
          <h2>Internships &amp; <span>Certifications.</span></h2>
          <div className="training-card">
            <Award size={28} />
            <h3>Experience and learning</h3>
            <p className="section-description">
              This section will showcase verified internships,
              certifications, and practical training as you add them.
            </p>
            <p className="small-note">
              Add your certificate names, providers, dates, and credential
              links before publishing this section.
            </p>
          </div>
        </section>

        <section id="contact" className="dashboard-section">
          <p className="section-kicker">06 / LET'S CONNECT</p>
          <h2>Have an idea? <span>Let's talk.</span></h2>
          <p className="section-description">
            Interested in software development, AI, or building something
            useful together? I'd be happy to connect.
          </p>
          <div className="hero-actions">
            <a
              className="button-primary"
              href="mailto:rithikbhanja83@gmail.com"
            >
              <Mail size={17} /> Email me
            </a>
            <a
              className="button-secondary"
              href="https://www.linkedin.com/in/rithik-bhanja08"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowRight size={16} />
            </a>     
            

            
          </div>
        </section>

        <footer className="footer">
          <a className="brand" href="#home">RB<span>.</span></a>
          <p>Designed with curiosity. Built with purpose.</p>
          <p>© {new Date().getFullYear()} Rithik Bhanja</p>
        </footer>
      </main>
    </motion.div>
  );
}



const credentials = [
  {
    id: "internpe",
    category: "INTERNSHIP",
    title: "Web Development Intern",
    organization: "InternPe",
    duration: "30 June 2025 – 27 July 2025",
    description:
      "Completed a web development internship focused on practical learning and frontend development.",
    image: "/certificates/intern.png",
    type: "image",
    linkLabel: "View Certificate",
  },
  {
    id: "kaggle-python",
    category: "COURSE COMPLETION",
    title: "Python Course",
    organization: "Kaggle",
    duration: "26 April 2024",
    description:
      "Completed Kaggle's Python course and developed foundational Python programming knowledge.",
    image: "/certificates/kaggle.jpeg",
    type: "image",
    linkLabel: "View Certificate",
  },
  {
    id: "oasis-infobyte",
    category: "LETTER OF RECOMMENDATION",
    title: "Web Development & Designing Intern",
    organization: "Oasis Infobyte",
    duration: "1 month · 15 July 2025",
    description:
      "Recognized for technical proficiency, commitment, analytical thinking, and problem-solving skills.",
    image: "/certificates/oasis.png",
    type: "image",
    linkLabel: "View Letter",
  },
  {
    id: "aws-architecture",
    category: "JOB SIMULATION",
    title: "Solutions Architecture Job Simulation",
    organization: "AWS · Forage",
    duration: "10 December 2025",
    description:
      "Completed a practical task focused on designing a simple, scalable hosting architecture.",
    image: "/certificates/aws.png",
    type: "image",
    linkLabel: "View Certificate",
  },
  {
    id: "linkedin-mastery",
    category: "SKILLING CERTIFICATE",
    title: "LinkedIn Mastery for IT Professionals",
    organization: "Skill India Digital Hub",
    duration: "18 September 2026 · 55 minutes",
    description:
      "Completed an online course focused on professional visibility and career opportunities.",
    image: "/certificates/it proff.png",
    type: "image",
    linkLabel: "View Certificate",
  },
];


function CredentialCard({ credential }) {
  return (
    <article className="training-card credential-card">
      <div className="credential-details">
        <p className="section-kicker">{credential.category}</p>
        <h2>{credential.title}</h2>
        <p className="credential-organization">
          {credential.organization}
        </p>
        <p className="credential-duration">
          {credential.duration}
        </p>
        <p>{credential.description}</p>

        <a
          className="connect-button"
          href={credential.image}
          target="_blank"
          rel="noopener noreferrer"
        >
          {credential.linkLabel} ↗
        </a>
      </div>

      
        <a
          className="certificate-image-link"
          href={credential.image}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${credential.title}`}
        >
          {credential.type === "image" ? (
            <img
              src={credential.image}
              alt={`${credential.title} certificate`}
              className="certificate-image"
              loading="lazy"
            />
          ) : (
            <div className="certificate-pdf-preview">
              <span className="pdf-label">PDF DOCUMENT</span>
              <h3>{credential.title}</h3>
              <p>{credential.organization}</p>
              <span>Open document ↗</span>
            </div>
          )}
        </a>

    </article>
  );
}

function CredentialsPage({ onBack }) {
  return (
    <motion.main
      className="credentials-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <header className="credentials-header">
        <button
          type="button"
          className="button-secondary"
          onClick={onBack}
        >
          ← Back to Portfolio
        </button>

        <p className="section-kicker">PROFESSIONAL JOURNEY</p>
        <h1>
          Internships &amp; <span>Certifications.</span>
        </h1>
        <p className="section-description">
          A collection of my internships, course completions,
          job simulations, and professional recognition.
        </p>
      </header>

      <div className="credentials-list">
        {credentials.map((credential) => (
          <CredentialCard
            key={credential.id}
            credential={credential}
          />
        ))}
      </div>
    </motion.main>
  );
}



export default function App() {
  const [screen, setScreen] = useState("intro");

  return (
    <AnimatePresence mode="wait">
      {screen === "intro" ? (
        <Intro
          key="intro"
          onEnter={() => setScreen("home")}
        />
      ) : screen === "home" ? (
        <FrontPage
          key="home"
          onEnter={() => setScreen("portfolio")}
        />
      ) : screen === "credentials" ? (
        <CredentialsPage
          key="credentials"
          onBack={() => setScreen("portfolio")}
        />
      ) : (
        <Portfolio
          key="portfolio"
          onOpenCredentials={() => setScreen("credentials")}
        />
      )}
    </AnimatePresence>
  );
}
