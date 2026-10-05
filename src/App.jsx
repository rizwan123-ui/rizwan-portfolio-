import './App.css'

function App() {
  const certificates = [
    {
      title: 'Front-end AI Engineering',
      issuer: 'FlyRank',
      image: '/FLYRANK.png',
      type: 'Internship Certificate',
    },
    {
      title: 'Google Data Analytics',
      issuer: 'Google • Coursera',
      image: '/GOOGLE DATA ANALAYTICS.png',
      type: 'Professional Certificate',
    },
    {
      title: 'Google AI',
      issuer: 'Google • Coursera',
      image: '/GOOGLE AI.png',
      type: 'Professional Certificate',
    },
    {
      title: 'Fundamentals of Building AI Agents',
      issuer: 'IBM • Coursera',
      image: '/IBM.png',
      type: 'Course Certificate',
    },
    {
      title: 'Essentials of MS Excel – Formulas and Functions',
      issuer: 'UniAthena • Cambridge International Qualifications',
      image: '/certificate.pdf',
      type: 'Course Certificate',
    },
    {
      title: 'AI for Beginners',
      issuer: 'HP LIFE • HP Foundation',
      image: '/Hp.png',
      type: 'Course Certificate',
    },
    {
      title: 'Generative AI Application Developer',
      issuer: 'UETIANS Lahore Endowment Foundation',
      image: '/ASPIRE.png',
      type: 'Professional Training',
    },
    {
      title: 'Generative AI',
      issuer: 'Arfa Karim Technology Incubator',
      image: '/AKTI.png',
      type: '2-Month Program',
    },
    {
      title: 'Summer Internship – Artificial Intelligence',
      issuer: 'AKSA-SDS',
      image: '/AKSA.png',
      type: 'Internship Certificate',
    },
  ]

  const achievements = [
    {
      title: 'CUST Hackathon 2026',
      issuer: 'Capital University of Science & Technology',
      image: '/Hackathon.png',
      type: 'Certificate of Achievement',
    },
    {
      title: 'Big Data Analytics in Life Sciences',
      issuer: 'BioCode Innovators',
      image: '/Biocode.png',
      type: 'Certificate of Participation',
    },
  ]

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <h2 className="logo">Rizwan.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ================= HOME ================= */}
      <section className="hero" id="home">
        <p className="hello">Hello, I'm</p>

        <h1>Rizwan Ali Khoso</h1>

        <h2>Software Engineer | AI / Data Analyst</h2>

        <p className="description">
          I am passionate about data analytics, artificial intelligence,
          and building data-driven solutions that turn complex information
          into meaningful insights.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a
            href="/Rizwan_Ali_Khoso_CV.pdf"
            download="Rizwan_Ali_Khoso_CV.pdf"
            className="secondary-btn"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about" id="about">
        <div className="about-container">

          <div className="about-title">
            <p>Get To Know More</p>
            <h2>About Me</h2>
          </div>

          <div className="about-content">

            <div className="about-card">
              <h3>🎓 Education</h3>
              <p>BS Software Engineering</p>
              <span>Capital University of Science & Technology</span>
            </div>

            <div className="about-card">
              <h3>💼 Focus</h3>
              <p>AI & Data Analytics</p>
              <span>Python • SQL • Excel • Power BI • Machine Learning</span>
            </div>

          </div>

          <p className="about-description">
            I am a Software Engineering graduate with a strong interest in
            Artificial Intelligence and Data Analytics. I enjoy working with
            data, creating interactive dashboards, analyzing business insights,
            and building machine learning solutions. I am continuously improving
            my technical skills through practical projects and internship
            experience.
          </p>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="skills" id="skills">
        <div className="skills-container">

          <div className="skills-title">
            <p>What I Work With</p>
            <h2>My Skills</h2>
          </div>

          <div className="skills-grid">

            <div className="skill-card">
              <h3>🐍 Python</h3>
              <p>Data Analysis & Machine Learning</p>
            </div>

            <div className="skill-card">
              <h3>🗄️ SQL</h3>
              <p>Queries & Data Analysis</p>
            </div>

            <div className="skill-card">
              <h3>📊 Power BI</h3>
              <p>Dashboards & Data Visualization</p>
            </div>

            <div className="skill-card">
              <h3>📗 Excel</h3>
              <p>Data Cleaning & Analysis</p>
            </div>

            <div className="skill-card">
              <h3>🤖 Machine Learning</h3>
              <p>Prediction & Classification</p>
            </div>

            <div className="skill-card">
              <h3>⚛️ React</h3>
              <p>Frontend Development</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="projects" id="projects">
        <div className="projects-container">

          <div className="projects-title">
            <p>Explore My Work</p>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">

            <ProjectCard
              number="01"
              title="Customer Churn Prediction"
              description="Built a machine learning system to predict customer churn using Python, Pandas and Scikit-learn with data preprocessing and model evaluation."
              tech={['Python', 'Machine Learning', 'Scikit-learn']}
              link="https://github.com/rizwan123-ui/Customer-Churn-Prediction-"
            />

            <ProjectCard
              number="02"
              title="Retail Analytics Dashboard"
              description="Analyzed online retail data to discover sales trends, customer patterns and useful business insights."
              tech={['Python', 'Data Analytics', 'EDA']}
              link="https://github.com/rizwan123-ui/Online_Retail_Data_Analysis"
            />

            <ProjectCard
              number="03"
              title="Canvio"
              description="Developed a project management system for Final Year Projects with task boards, group management, submissions, communication and role-based access."
              tech={['React', 'Python', 'Web Development']}
              link="https://github.com/rizwan123-ui/canvio-fyp-frontend"
            />

            <ProjectCard
              number="04"
              title="Retail Chain Profitability & Inventory Risk Dashboard"
              description="Built an interactive Power BI dashboard to analyze retail chain profitability, sales performance, targets, and inventory risk across multiple stores and regions."
              tech={['Power BI', 'Excel', 'Data Analytics']}
              link="https://github.com/rizwan123-ui/Retail-Chain-Profitability-Inventory-Risk-Dashboard"
            />

            <ProjectCard
              number="05"
              title="Superstore Sales Dashboard"
              description="Built an interactive Superstore Sales Dashboard in Microsoft Excel to analyze sales performance and present key business insights through clear visualizations."
              tech={['Excel', 'Data Analytics', 'Dashboard']}
              link="https://github.com/rizwan123-ui/Superstore-Sales-Dashboard-"
            />

            <ProjectCard
              number="06"
              title="Netflix Power BI Dashboard"
              description="Created an interactive Power BI dashboard to analyze Netflix data and visualize content trends, categories, release years, and other key insights."
              tech={['Power BI', 'Data Visualization', 'Data Analytics']}
              link="https://github.com/rizwan123-ui/Netflix-PowerBI-Dashboard"
            />

            <ProjectCard
              number="07"
              title="AI CV Resume Checker"
              description="Developed a web-based CV and resume checker that analyzes resume information and provides useful feedback through a simple and user-friendly interface."
              tech={['JavaScript', 'HTML/CSS', 'AI']}
              link="https://github.com/rizwan123-ui/ai-cv-resume-checker"
            />

            <ProjectCard
              number="08"
              title="No-Show Appointments Analysis"
              description="Analyzed appointment data using Python to perform data cleaning, visualization, and feature engineering to identify useful patterns and insights."
              tech={['Python', 'Pandas', 'Data Visualization', 'Feature Engineering']}
              link="https://github.com/rizwan123-ui/NoShowAppointments_Analysis"
            />

            <ProjectCard
              number="09"
              title="FlyRank AI Front-End Engineering Capstone"
              description="Completed an AI Front-End Engineering capstone project during my FlyRank internship, focusing on modern AI-powered frontend workflows and development practices."
              tech={['React', 'AI Front-End', 'JavaScript']}
              link="https://github.com/rizwan123-ui/flyrank-fe-capstone"
            />

            <ProjectCard
              number="10"
              title="Interactive 3D Web App"
              description="Built an interactive 3D web application using React and React Three Fiber, focusing on interactive 3D experiences and modern frontend development."
              tech={['React', 'React Three Fiber', 'JavaScript', '3D Web']}
              link="https://github.com/rizwan123-ui/my-3d-app"
            />

            <ProjectCard
              number="11"
              title="Expense Tracker"
              description="Built a React-based expense tracking application that allows users to manage expenses through a simple interface with input validation and error handling."
              tech={['React', 'JavaScript', 'Vite', 'Frontend Development']}
              link="https://github.com/rizwan123-ui/expense-tracker"
            />

            <ProjectCard
              number="12"
              title="Neural Networks Basics"
              description="Practiced the fundamentals of neural networks through hands-on experiments in Jupyter Notebook, focusing on core deep learning concepts and model development."
              tech={['Python', 'Neural Networks', 'Deep Learning', 'Jupyter Notebook']}
              link="https://github.com/rizwan123-ui/Neural_Networks_Basics_tasks"
            />

            <ProjectCard
              number="13"
              title="News Article Classification & Topic Clustering"
              description="Worked on news article classification and topic clustering using machine learning and natural language processing techniques."
              tech={['Python', 'Machine Learning', 'NLP', 'Clustering']}
              link="https://github.com/rizwan123-ui/News_Article_Classification_topic_clustering"
            />

          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="experience" id="experience">
        <div className="experience-container">

          <div className="experience-title">
            <p>My Professional Journey</p>
            <h2>Experience</h2>
          </div>

          <div className="experience-grid">

            <ExperienceCard
              date="2026 • 2 Months"
              title="AI Front-End Engineering Intern"
              company="FlyRank"
              description="Worked on AI-powered frontend applications using React, streaming chat interfaces, error handling, responsive design and modern frontend development practices."
            />

            <ExperienceCard
              date="2025 • 6 Weeks"
              title="AI / ML Intern"
              company="AKSA-SDS"
              description="Worked with Python, Pandas, NumPy, data visualization, machine learning algorithms, clustering, classification and basic neural networks."
            />

            <ExperienceCard
              date="2026 • 1 Month"
              title="Power BI Intern"
              company="Auspify Technologies"
              description="Built interactive Power BI reports and dashboards, worked with data visualization, filtering, data preparation and business insights."
            />

            <ExperienceCard
              date="2026 • 1 Month"
              title="Data Analytics Intern"
              company="Progee"
              description="Worked on real-world data analytics tasks involving data cleaning, exploratory data analysis, SQL, statistical analysis, forecasting and business insights using Python and data visualization tools."
            />

          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section className="certificates" id="certificates">
        <div className="certificates-container">

          <div className="certificates-title">
            <p>Learning & Professional Development</p>
            <h2>Certificates</h2>
          </div>

          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <div className="certificate-card" key={index}>

                {certificate.image.endsWith('.pdf') ? (
                  <div className="certificate-pdf-preview">
                    📜
                  </div>
                ) : (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-image"
                  />
                )}

                <div className="certificate-info">
                  <span className="certificate-type">
                    {certificate.type}
                  </span>

                  <h3>{certificate.title}</h3>
                  <p>{certificate.issuer}</p>

                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    View Certificate
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="certificates achievements" id="achievements">
        <div className="certificates-container">

          <div className="certificates-title">
            <p>Milestones & Participation</p>
            <h2>Achievements</h2>
          </div>

          <div className="certificates-grid">
            {achievements.map((achievement, index) => (
              <div className="certificate-card" key={index}>

                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="certificate-image"
                />

                <div className="certificate-info">
                  <span className="certificate-type">
                    {achievement.type}
                  </span>

                  <h3>{achievement.title}</h3>
                  <p>{achievement.issuer}</p>

                  <a
                    href={achievement.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    View Achievement
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">
        <div className="contact-container">

          <div className="contact-title">
            <p>Get In Touch</p>
            <h2>Contact Me</h2>
          </div>

          <p className="contact-description">
            I'm open to opportunities in Data Analytics, Artificial
            Intelligence, and Software Engineering. Feel free to connect
            with me.
          </p>

          <div className="contact-grid">

            <a
              href="mailto:rkhoso17@gmail.com"
              className="contact-card"
            >
              <span className="contact-icon">✉️</span>
              <h3>Email</h3>
              <p>rkhoso17@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/rizwan-ali-khoso"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">💼</span>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </a>

            <a
              href="https://github.com/rizwan123-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">💻</span>
              <h3>GitHub</h3>
              <p>View my repositories</p>
            </a>

          </div>

          <div className="footer">
            <p>© 2026 Rizwan Ali Khoso. All rights reserved.</p>
          </div>

        </div>
      </section>

    </div>
  )
}


/* ================= REUSABLE PROJECT CARD ================= */

function ProjectCard({ number, title, description, tech, link }) {
  return (
    <div className="project-card">

      <span className="project-number">{number}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="project-tech">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-btn"
      >
        View Project
      </a>

    </div>
  )
}


/* ================= REUSABLE EXPERIENCE CARD ================= */

function ExperienceCard({ date, title, company, description }) {
  return (
    <div className="experience-card">

      <span className="experience-date">
        {date}
      </span>

      <h3>{title}</h3>
      <h4>{company}</h4>

      <p>{description}</p>

    </div>
  )
}

export default App