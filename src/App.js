import React, { useState } from "react";

/* PROJECT IMAGES */
import lifepulse from "./images/lifepulse.jpeg";
import henDisease from "./images/hen-disease.jpeg";
import incubator from "./images/incubator.jpeg";
import mindmatch from "./images/mindmatch.jpeg";
import timeloop from "./images/timeloop.jpeg";
import aidoubt from "./images/aidoubt.jpeg";
import frontendCert from "./certificates/frontend.pdf";
import pythonCert from "./certificates/python.pdf";
import sqlCert from "./certificates/sql.pdf";
import javaCert from "./certificates/java1.pdf";
import javascriptCert from "./certificates/javascript.pdf";
import nodejsCert from "./certificates/nodejs.pdf";
import daaCert from "./certificates/daa.pdf";
import dbmsCert from "./certificates/dbms.pdf";
import javaProgrammingCert from "./certificates/java.pdf";
import lifepulseVideo from "./videos/lifepulse.mp4";
import henVideo from "./videos/hen.mp4";
import mindmatchVideo from "./videos/mindmatch.mp4";
import timeloopVideo from "./videos/timeloop.mp4";
import aidoubtVideo from "./videos/aidoubt.mp4";
import aimtrainer from "./images/aimtrainer.jpeg";
import aimtrainerVideo from "./videos/aimtrainer.mp4";
import studysphereVideo from "./videos/studysphere.mp4";
import profilePic from "./images/profile.jpeg"; // change name if needed
import { ExternalLink, Mail, Phone, Download, ChevronLeft, CheckCircle2, Trophy, ArrowRight, User, Terminal, Code2, FileText, Video } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {

  const [showProfile, setShowProfile] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  /* =========================
        PERSONAL INFO
  ========================= */

  const personalInfo = {
    name: "Kancharla Harika Kalyani",
    role: "Computer Science student focused on full-stack web development, machine learning, and IoT.",
    about: `I am a passionate AI/ML and Full Stack Developer who enjoys building innovative, real-world technology solutions that solve meaningful problems. My interests include artificial intelligence, healthcare technology, automation systems, accessibility-focused applications, smart IoT devices, and interactive web development.

I have developed multiple projects including AI-powered healthcare systems, smart automation platforms, intelligent gaming applications, and responsive full stack web applications using modern technologies like React, Node.js, Python, TensorFlow, MySQL, and OpenCV.

I enjoy transforming creative ideas into functional products and continuously improving my skills through hackathons, project expos, ideathons, and hands-on development. My goal is to create impactful software solutions that combine innovation, design, and intelligence to improve everyday life and solve real-world challenges through technology.`,
    email: "kancharlaharikakalyani@gmail.com",
    phone: "+91 7815819552",

    github: "https://github.com/Harika2006706",
    linkedin: "https://www.linkedin.com/in/kancharla-harika-kalyani-56651a313",
  };

  /* =========================
          SKILLS
  ========================= */

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "HTML", "CSS", "JavaScript", "Frontend Advanced"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "MySQL", "SQL", "Backend Intermediate"]
    },
    {
      title: "Languages, Tools & Tech",
      skills: ["Python Intermediate", "Java Basics", "GitHub", "IoT"]
    }
  ];

  /* =========================
          PROJECTS
  ========================= */

  const projects = [
    {
      title: "StudySphere",
      image: "", // Placeholder for image
      video: studysphereVideo,
      description: "A dedicated workspace seamlessly combining peer mentoring, live video, and AI study assistance.",
      tech: "React, Supabase, LLaMA 3",
      details:
        "StudySphere is a pressure-free learning workspace that seamlessly combines peer skill exchange, 1-on-1 mentorship scheduling, built-in live video rooms, and an always-available AI Mentor chatbot into a single, cohesive platform. It eliminates the need to switch between disparate tools, fostering a focused environment where individuals can connect, learn, and grow together.",
      features: [
        "Peer Skill Exchange matching",
        "1-on-1 Mentor scheduling",
        "Integrated live video conferencing",
        "Real-time AI Mentor chatbot",
        "Centralized Opportunities Board",
      ],
      award: "Best Innovation Award @ ByteHearts × Ranovex AI Product Hackathon 2026",
    },
    {
      title: "LifePulse",
      image: lifepulse,
      video: lifepulseVideo,
      description: "Smart blood donation system.",
      tech: "React, Node.js, MySQL",

      details:
        "LifePulse connects donors, hospitals, and receivers during emergencies with smart donor search and request management.",

      features: [
        "Blood donor search",
        "Emergency request system",
        "Hospital management",
        "Responsive UI",
      ],
    },

    {
      title: "Hen Disease Detection",
      image: henDisease,
      video: henVideo,
      description: "AI-powered poultry disease detection.",
      tech: "Python, TensorFlow, OpenCV, Matlab",

      details:
        "Detects poultry diseases using deep learning image classification.",

      features: [
        "Image classification",
        "Disease prediction",
        "AI-powered analysis",
        "Farmer assistance",
      ],
    },

    {
      title: "Smart Hen Incubator",
      image: incubator,
      description: "IoT-based incubator system.",
      tech: "IoT, Python",

      details:
        "Maintains temperature and humidity automatically using sensors.",

      features: [
        "Temperature monitoring",
        "Humidity control",
        "IoT automation",
        "Sensor integration",
      ],
    },

    {
      title: "MindMatch Pro",
      image: mindmatch,
      video: mindmatchVideo,
      description: "AI-powered Tic Tac Toe game.",
      tech: "React, JavaScript",

      details:
        "Modern intelligent Tic Tac Toe game with smart AI opponent.",

      features: [
        "AI gameplay",
        "Modern UI",
        "Responsive design",
        "Interactive game",
      ],
    },

    {
      title: "Time Loop",
      image: timeloop,
      video: timeloopVideo,
      description: "Interactive puzzle web game.",
      tech: "HTML, CSS, JavaScript",

      details:
        "Puzzle-based game with time-control mechanics.",

      features: [
        "Puzzle solving",
        "Game logic",
        "Time control",
        "Responsive UI",
      ],
    },

    {
      title: "AI Doubt Solver",
      image: aidoubt,
      video: aidoubtVideo,
      description: "AI-powered doubt solving platform.",
      tech: "React, Node.js",

      details:
        "Students can ask doubts and receive instant AI explanations.",

      features: [
        "AI-generated answers",
        "Student support",
        "Instant responses",
        "Modern interface",
      ],
    },

    {
      title: "Aim Trainer Pro",
      image: aimtrainer,
      video: aimtrainerVideo,
      description: "Fast-paced reflex and aim training game.",
      tech: "React, JavaScript, CSS",

      details:
        "Aim Trainer Pro is an interactive reflex training game designed to improve mouse accuracy, reaction speed, and hand-eye coordination through dynamic target challenges.",

      features: [
        "Real-time score tracking",
        "Reaction speed testing",
        "Dynamic moving targets",
        "Responsive gaming UI",
      ],
    },

  ];

  /* =========================
        CERTIFICATES
  ========================= */

  const certificates = [

    {
      title: "Frontend Development",
      file: frontendCert,
    },

    {
      title: "Python Programming",
      file: pythonCert,
    },

    {
      title: "SQL Certification",
      file: sqlCert,
    },

    {
      title: "Java Certification",
      file: javaCert,
    },

    {
      title: "JavaScript Certification",
      file: javascriptCert,
    },

    {
      title: "Node.js Certification",
      file: nodejsCert,
    },

    {
      title: "DAA Certification - CodeChef",
      file: daaCert,
    },

    {
      title: "DBMS Certification - CodeChef",
      file: dbmsCert,
    },

    {
      title: "Java Programming Certification - CodeThantra",
      file: javaProgrammingCert,
    },

  ];
  /* =========================
        ACHIEVEMENTS
  ========================= */

  const achievements = [

    "Winner of the 'Best Innovation Award' for building StudySphere at the ByteHearts × Ranovex AI Product Hackathon 2026",

    "Selected participant in Smart India Hackathon for innovative problem-solving and technology-based solutions",

    "Participated in Rajalakshmi Engineering College Hackathon, collaborating on real-world software development ideas",

    "Presented innovative project concepts during the Ideathon at Thiagarajar College of Engineering",

    "Showcased technical projects at the Project Expo conducted by Kalasalingam Academy of Research and Education",

    "Participated in IEEE Project Expo at Kalasalingam Academy of Research and Education, demonstrating AI and software-based solutions",

    "Continuously improving frontend and full stack development skills through hands-on project building",

  ];

  /* =========================
          HACKATHONS
  ========================= */

  const hackathons = [

    {
      title: "StudySphere - ByteHearts × Ranovex AI Product Hackathon 2026",
      year: "2026",
      description:
        "Built a dedicated peer-learning platform featuring skill-exchange matching, 1-on-1 mentor scheduling, and an integrated AI study assistant."
    },

    {
      title: "Innovate X Ideathon",

      year: "2026",

      description:
        "Presented the Hen Disease Detection project idea focused on AI-powered poultry health monitoring and early disease identification.",
    },

    {
      title: "IEEE Project Showcase",

      year: "2025",

      description:
        "Presented AI and software-based project ideas during the IEEE technical project showcase event",
    },

    {
      title: "Smart India Hackathon",

      year: "2025",

      description:
        "Developed AI AgriSave, an intelligent farming solution designed to move across agricultural fields and spray pesticides efficiently using smart automation.",
    },

    {
      title: "24 Hours National Hackathon",

      year: "2026",

      description:
        "Built a web application during a 24-hour hackathon to detect machinery faults and help protect workers from dangerous large-scale industrial machines using smart monitoring and alert systems.",
    },

    {
      title: "Project Expo",

      year: "2026",

      description:
        "Presented the Hen Disease Detection project idea focused on AI-powered poultry health monitoring and early disease identification..",
    },

  ];
  /* =========================
          EDUCATION
  ========================= */

  const education = [

    {
      college: "Murthy Concept School",
      degree: "10th Standard",
      year: "2020",
    },

    {
      college: "Narayana Junior College",
      degree: "Intermediate - MPC",
      year: "2021 - 2023",
    },

    {
      college: "Kalasalingam Academy of Reserch and Education",
      degree: "B.Tech - Computer Science Engineering",
      year: "2023 - 2027",
    },

  ];


  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <div className="fixed top-6 w-full flex justify-center z-50 px-4 pointer-events-none animate-fade-in-down">
        <nav className="flex items-center gap-1 sm:gap-6 px-4 sm:px-8 py-3 bg-black/60 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl pointer-events-auto transition-all">
          <a href="#about" className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors px-2 py-1">
            About
          </a>
          <a href="#skills" className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors px-2 py-1">
            Skills
          </a>
          <a href="#projects" className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors px-2 py-1">
            Projects
          </a>
          <a href="#certificates" className="hidden md:block text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors px-2 py-1">
            Certificates
          </a>
          <a href="#contact" className="text-xs sm:text-sm font-medium text-primary hover:text-white transition-colors px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full ml-2">
            Contact
          </a>
        </nav>
      </div>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh]">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 animate-fade-in-up">

          {/* Text Content (Left) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 mb-6">
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 pb-2 text-transparent bg-clip-text bg-gradient-to-br from-white via-violet-300 to-violet-600 leading-[1.1]">
              {personalInfo.name}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mb-10">
              {personalInfo.role}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="#projects" className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-violet-600 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300">
                View Work <ArrowRight size={18} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors">
                <FaGithub size={18} /> GitHub
              </a>
            </div>
          </div>

          {/* Profile Picture (Right) */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="relative group cursor-pointer w-fit" onClick={() => setShowProfile(true)}>

              {/* ORBITING RING */}
              <div className="absolute inset-[-40px] sm:inset-[-60px] opacity-0 animate-fade-in-delayed z-20 pointer-events-none">
                <div className="w-full h-full border border-white/5 rounded-full animate-orbit">
                  {/* Planet 1 */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface border border-violet-500/40 text-violet-300 text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.3)] animate-orbit-reverse whitespace-nowrap">
                    AI & ML
                  </div>
                  {/* Planet 2 */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-surface border border-fuchsia-500/40 text-fuchsia-300 text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(217,70,239,0.3)] animate-orbit-reverse whitespace-nowrap">
                    Full Stack Developer
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-white/30 rounded-full blur-[50px] group-hover:blur-[70px] transition-all duration-700 opacity-50 group-hover:opacity-80 scale-90"></div>
              <img
                src={profilePic}
                alt="Profile"
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] group-hover:border-white/40"
              />
            </div>
          </div>

        </div>
      </section>
      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden px-4 md:px-8 py-24 md:py-32">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-24">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-3">
                About Me
              </h2>
              <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            {personalInfo.about.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-lg sm:text-xl leading-relaxed md:leading-relaxed font-light text-left">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative overflow-hidden px-4 md:px-8 py-24 md:py-32">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-3">
              Core Skills
            </h2>
            <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card border border-border p-6 sm:p-8 rounded-2xl hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-violet-400 transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-gray-300 shadow-sm hover:border-violet-500 hover:text-white hover:bg-violet-500/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative overflow-hidden px-4 md:px-8 py-24 md:py-32">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-3">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
          </div>

          {/* HALL OF FAME: First Project */}
          {projects.length > 0 && (
            <div
              className="group relative bg-surface border border-violet-500/50 rounded-3xl overflow-hidden mb-12 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col lg:flex-row"
              onClick={() => setSelectedProject(projects[0])}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent pointer-events-none"></div>

              {/* Content Half */}
              <div className="lg:w-[45%] p-8 sm:p-12 flex flex-col justify-center order-2 lg:order-1 relative z-10">
                {projects[0].award && (() => {
                  const awardParts = projects[0].award.split(" @ ");
                  return (
                    <div className="flex items-start gap-3 mb-6">
                      {/* Glowing Trophy */}
                      <span className="text-2xl sm:text-3xl shrink-0 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">🏆</span>

                      {/* Glowing Text */}
                      <div className="leading-snug pt-1">
                        <span className="text-white font-extrabold text-lg sm:text-xl tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                          {awardParts[0]}
                        </span>
                        {awardParts[1] && (
                          <>
                            <span className="mx-2 text-gray-500 font-medium">@</span>
                            <span className="text-violet-300 font-bold text-sm sm:text-base drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]">
                              {awardParts[1]}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })()}
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {projects[0].title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {projects[0].description}
                </p>

                <div className="mt-auto">
                  <p className="text-sm font-semibold text-violet-400 mb-4 uppercase tracking-widest">
                    {projects[0].tech}
                  </p>
                  <div className="flex items-center text-base font-bold text-white group-hover:text-violet-400 transition-colors">
                    View Details <ArrowRight size={18} className="ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </div>

              {/* Media Half */}
              <div className="lg:w-[55%] min-h-[300px] lg:min-h-[400px] p-6 sm:p-8 lg:p-12 lg:pl-0 relative order-1 lg:order-2 flex items-center justify-center z-10">
                <div className="w-full h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                  {projects[0].video ? (
                    <video
                      src={projects[0].video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    />
                  ) : projects[0].image ? (
                    <img
                      src={projects[0].image}
                      alt={projects[0].title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-card text-center text-gray-500 flex flex-col items-center justify-center gap-4 transition-colors">
                      <Video size={32} className="text-gray-600 group-hover:text-violet-400 transition-colors" />
                      <span className="text-sm font-medium">[StudySphere Video/Image Placeholder]</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* OTHER PROJECTS GRID */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project, index) => (
              <div
                key={index}
                className="group flex flex-col bg-surface border border-border rounded-2xl overflow-hidden hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-56 bg-card flex items-center justify-center overflow-hidden border-b border-border p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-t-2xl"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full rounded-xl object-contain transform group-hover:scale-105 transition-transform duration-500 shadow-md"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <p className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wider">
                      {project.tech}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-white transition-colors">
                      View Details <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL PROJECT VIEW */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex justify-center overflow-y-auto bg-black/80 backdrop-blur-md p-4 sm:p-8">
          <div className="relative w-full max-w-5xl bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden my-auto animate-fade-in-up">

            {/* TOP BAR */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 bg-surface/80 backdrop-blur-md border-b border-border">
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <ChevronLeft size={16} /> Back
              </button>
              <h2 className="text-lg font-semibold text-white absolute left-1/2 -translate-x-1/2 hidden sm:block">
                {selectedProject.title}
              </h2>
              <div className="w-[88px]"></div> {/* Spacer for centering */}
            </div>

            <div className="p-6 sm:p-10 space-y-12">
              {/* MEDIA */}
              <div className="bg-card rounded-2xl overflow-hidden border border-border flex items-center justify-center p-6 min-h-[300px]">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    controls
                    autoPlay
                    loop
                    className="w-full max-h-[500px] rounded-xl object-contain bg-black"
                  />
                ) : selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-w-full max-h-[500px] object-contain rounded-xl shadow-lg"
                  />
                ) : (
                  <div className="text-center text-gray-500 border-2 border-dashed border-white/10 rounded-2xl p-8 w-full max-w-sm flex flex-col items-center justify-center gap-4">
                    <Video size={32} className="text-gray-600" />
                    <span className="text-sm font-medium">[{selectedProject.title} Media Placeholder]</span>
                  </div>
                )}
              </div>

              {/* DETAILS */}
              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                      {selectedProject.title}
                    </h1>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sm font-medium text-primary">
                      {selectedProject.tech}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">About the Project</h3>
                    <p className="text-gray-400 leading-relaxed text-lg text-balance">
                      {selectedProject.details}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white">Key Features</h3>
                  <ul className="space-y-4">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-400">
                        <CheckCircle2 size={20} className="text-white mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* CERTIFICATES */}
      <section id="certificates" className="relative overflow-hidden px-4 md:px-8 py-24 md:py-32">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-3">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="mb-6 flex-grow">
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {certificate.title}
                  </h3>
                </div>
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors mt-auto"
                >
                  View Certificate <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ACHIEVEMENTS */}
      <section id="achievements" className="relative overflow-hidden px-4 md:px-8 py-24 md:py-32">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-3">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-surface border border-border p-5 rounded-2xl text-base sm:text-lg text-gray-300 flex items-start gap-4 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <Trophy size={20} className="text-violet-400 mt-1 shrink-0" />
                <span className="leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HACKATHONS */}
      <section id="hackathons" className="relative overflow-hidden px-4 md:px-8 py-24 md:py-32">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-3">
              Hackathons & Events
            </h2>
            <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 sm:p-8 rounded-2xl hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {hackathon.title}
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 bg-white/5 rounded-full text-gray-400">
                    {hackathon.year}
                  </span>
                </div>
                <p className="text-gray-400 text-base leading-relaxed">
                  {hackathon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative overflow-hidden px-4 md:px-8 py-24 md:py-32">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-3">
              Education
            </h2>
            <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-surface border border-border p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.college}
                  </h3>
                  <p className="text-primary text-base mb-4 font-medium">
                    {item.degree}
                  </p>
                </div>
                <p className="text-gray-500 text-sm font-medium tracking-wide">
                  {item.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CONTACT */}
      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden px-4 md:px-8 py-24 md:py-32">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's build something.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl text-balance">
            I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full mb-16">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-violet-600 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300">
              <Mail size={18} /> Say Hello
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              <FileText size={18} /> View Resume
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors p-2">
              <FaGithub size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors p-2">
              <FaLinkedin size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-white transition-colors p-2">
              <Mail size={24} />
            </a>
            <a href={`tel:${personalInfo.phone}`} className="text-gray-500 hover:text-white transition-colors p-2">
              <Phone size={24} />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </section>

      {/* PROFILE FULL SCREEN VIEW */}
      {showProfile && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fade-in-up">
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
            <button
              onClick={() => setShowProfile(false)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft size={16} /> Close
            </button>
          </div>
          <img
            src={profilePic}
            alt="Profile Full"
            className="max-h-[80vh] max-w-full rounded-full border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          />
        </div>
      )}

    </div>
  );
}

export default App;