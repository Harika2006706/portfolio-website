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
import profilePic from "./images/profile.jpeg"; // change name if needed

function App() {

  const [showProfile, setShowProfile] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  /* =========================
        PERSONAL INFO
  ========================= */

  const personalInfo = {
    name: "Kancharla Harika Kalyani",
    role: "AI/ML & Full Stack Developer",
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

  const skills = [
    "SQL",
    "Java Basics",
    "Python Intermediate",
    "Frontend Advanced",
    "Backend Intermediate",
    "React",
    "Node.js",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "GitHub",

    // ADD MORE SKILLS HERE
  ];

  /* =========================
          PROJECTS
  ========================= */

  const projects = [

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
    title: "Innovate X Ideathon",

    year: "2026",

    description:
      "Presented the Hen Disease Detection project idea focused on AI-powered poultry health monitoring and early disease identification.",
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
      {/* NAVBAR */}
<nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 md:py-6 border-b border-zinc-800 sticky top-0 bg-black z-50">

  <h1 className="text-2xl md:text-3xl font-bold text-pink-500 mb-4 md:mb-0 text-center">
    Harika Portfolio
  </h1>

  <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs sm:text-sm md:text-base">

    <a href="#about" className="hover:text-pink-500">
      About
    </a>

    <a href="#skills" className="hover:text-pink-500">
      Skills
    </a>

    <a href="#projects" className="hover:text-pink-500">
      Projects
    </a>

    <a href="#certificates" className="hover:text-pink-500">
      Certificates
    </a>

    <a href="#achievements" className="hover:text-pink-500">
      Achievements
    </a>

    <a href="#hackathons" className="hover:text-pink-500">
      Hackathons
    </a>

    <a href="#education" className="hover:text-pink-500">
      Education
    </a>

    <a href="#contact" className="hover:text-pink-500">
      Contact
    </a>

  </div>
</nav>
     {/* HERO */}
{/* HERO */}
<section className="pt-20 md:pt-28 pb-14 md:pb-20 flex flex-col justify-center items-center text-center px-4">

  <img
    src={profilePic}
    alt="Profile"
    onClick={() => setShowProfile(true)}
    className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-pink-500 shadow-lg mb-5 cursor-pointer hover:scale-105 transition"
  />

  <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text leading-tight">
    {personalInfo.name}
  </h1>

  <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
    {personalInfo.role}
  </p>

</section>
      {/* ABOUT */}
      {/* ABOUT */}
<section id="about" className="px-4 md:px-6 py-14 md:py-20 max-w-6xl mx-auto">

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center md:text-left">
    About Me
  </h2>

  <p className="text-gray-400 text-base sm:text-lg leading-8 md:leading-10 text-justify">
    {personalInfo.about}
  </p>

</section>

      {/* SKILLS */}
      {/* SKILLS */}
<section id="skills" className="bg-zinc-900 px-4 md:px-6 py-14 md:py-20">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center md:text-left">
      Skills
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">

      {skills.map((skill, index) => (

        <div
          key={index}
          className="bg-black border border-zinc-700 p-4 md:p-6 rounded-2xl text-center hover:border-pink-500 transition text-sm sm:text-base md:text-lg"
        >
          {skill}
        </div>

      ))}

    </div>

  </div>
</section>

      {/* PROJECTS */}
      {/* PROJECTS */}
<section id="projects" className="px-4 md:px-6 py-14 md:py-20">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-14 text-center">
      Projects
    </h2>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

      {projects.map((project, index) => (

        <div
          key={index}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl"
        >

          <div className="h-56 md:h-72 bg-black flex items-center justify-center overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain p-4"
            />

          </div>

          <div className="p-5 md:p-6">

            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4 md:mb-5 leading-7 md:leading-8 text-base md:text-lg">
              {project.description}
            </p>

            <p className="text-pink-400 mb-5 md:mb-6 text-base md:text-lg">
              {project.tech}
            </p>

            <button
              onClick={() => setSelectedProject(project)}
              className="bg-white text-black px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition w-full md:w-auto"
            >
              Open Project
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

      {/* FULL PROJECT VIEW */}
{selectedProject && (

  <div className="fixed inset-0 bg-black z-50 overflow-y-auto">

    <div className="min-h-screen flex flex-col">

      {/* TOP BAR */}
      <div className="sticky top-0 z-50 bg-black border-b border-zinc-800 px-6 py-5 flex items-center justify-between">

        {/* BACK BUTTON */}
        <button
          onClick={() => setSelectedProject(null)}
          className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
        >
          ← Back
        </button>

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-pink-500 text-center flex-1">
          {selectedProject.title}
        </h2>

        {/* EMPTY DIV */}
        <div className="w-[120px]"></div>

      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* VIDEO / IMAGE SECTION */}
        <div className="bg-zinc-900 rounded-3xl overflow-hidden mb-10 border border-zinc-800">

          <div className="w-full bg-black flex items-center justify-center p-6">

            {selectedProject.video ? (

              <video
                src={selectedProject.video}
                controls
                autoPlay
                loop
                className="w-full max-h-[600px] rounded-2xl"
              />

            ) : (

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[600px] object-contain rounded-2xl"
              />

            )}

          </div>

        </div>

        {/* PROJECT DETAILS */}
        <div className="space-y-8">

          <div>

            <h1 className="text-5xl font-bold mb-6">
              {selectedProject.title}
            </h1>

            <p className="text-pink-400 text-2xl">
              {selectedProject.tech}
            </p>

          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">

            <h3 className="text-3xl font-bold mb-6">
              About Project
            </h3>

            <p className="text-gray-300 text-xl leading-10">
              {selectedProject.details}
            </p>

          </div>
          {/* FEATURES */}
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">

            <h3 className="text-3xl font-bold mb-6">
              Features
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              {selectedProject.features.map((feature, index) => (

                <div
                  key={index}
                  className="bg-black border border-zinc-700 p-5 rounded-2xl text-lg"
                >
                  ✅ {feature}
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
)}
     <section id="certificates" className="bg-zinc-900 px-6 py-20">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold mb-12">
      Certificates
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {certificates.map((certificate, index) => (

        <div
          key={index}
          className="bg-black border border-zinc-700 rounded-3xl p-8 hover:scale-105 transition"
        >

          <h3 className="text-2xl font-bold mb-6">
            {certificate.title}
          </h3>

          <a
            href={certificate.file}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold inline-block"
          >
            View Certificate
          </a>

        </div>

      ))}

    </div>

  </div>

</section>
      {/* ACHIEVEMENTS */}
      <section id="achievements" className="px-6 py-20">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-12">
            Achievements
          </h2>

          <div className="space-y-6">

            {achievements.map((achievement, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-xl"
              >
                🏆 {achievement}
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* HACKATHONS */}
      <section id="hackathons" className="bg-zinc-900 px-6 py-20">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-12">
            Hackathons
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {hackathons.map((hackathon, index) => (

              <div
                key={index}
                className="bg-black border border-zinc-700 p-8 rounded-3xl"
              >

                <h3 className="text-3xl font-bold mb-4">
                  {hackathon.title}
                </h3>

                <p className="text-pink-400 text-xl mb-4">
                  {hackathon.year}
                </p>

                <p className="text-gray-300 text-lg leading-8">
                  {hackathon.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-6 py-20">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-12">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {education.map((item, index) => (

              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800"
              >

                <h3 className="text-3xl font-bold mb-4">
                  {item.college}
                </h3>

                <p className="text-pink-400 text-xl mb-3">
                  {item.degree}
                </p>

                <p className="text-gray-400">
                  {item.year}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

     

            {/* CONTACT */}
      <section id="contact" className="bg-zinc-900 px-6 py-20">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-8">
            Contact Me
          </h2>

          <p className="text-gray-400 text-xl mb-4">
            Email: {personalInfo.email}
          </p>

          <p className="text-gray-400 text-xl mb-10">
            Phone: {personalInfo.phone}
          </p>

          <div className="flex justify-center gap-6 flex-wrap">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-8 py-3 rounded-2xl font-semibold"
            >
              GitHub
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-8 py-3 rounded-2xl font-semibold"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-pink-500 text-pink-500 px-8 py-3 rounded-2xl font-semibold hover:bg-pink-500 hover:text-white transition"
            >
              Download Resume
            </a>

          </div>

          <p className="text-gray-600 mt-16">
            © 2026 {personalInfo.name}. All Rights Reserved.
          </p>

        </div>

      </section>

      {/* PROFILE FULL SCREEN VIEW */}
      {showProfile && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">

          <div className="absolute top-0 w-full flex justify-start p-6">
            <button
              onClick={() => setShowProfile(false)}
              className="bg-white text-black px-6 py-3 rounded-2xl"
            >
              ← Back
            </button>
          </div>

          <img
            src={profilePic}
            alt="Profile Full"
            className="max-h-[80vh] max-w-[90vw] rounded-3xl"
          />

        </div>
      )}

    </div>
  );
}

export default App;