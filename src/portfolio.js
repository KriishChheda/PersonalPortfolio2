/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kriish Chheda",
  title: "Hi all, I'm Kriish",
  subTitle: emoji(
    "I'm an aspiring Computer Engineer at D. J. Sanghvi College of Engineering, with a passion for building impactful web applications that serve a purpose. I enjoy solving problems through code and am currently expanding my skills into the fascinating world of data science."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1W_7DNQkp24dM2hdlLp5udfkI9vs6Tvp9_wGmuQ0lpos/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KriishChheda",
  linkedin: "https://www.linkedin.com/in/kriish-chheda-8062b8289/",
  gmail: "kriishchheda00522@gmail.com",
  medium: "https://medium.com/@kriishchheda00522",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ENTHUSIASTIC FRONTEND DEVELOPER WITH A KNACK FOR BUILDING FUNCTIONAL & IMPACTFUL PROJECTS",
  skills: [
   emoji("⚡ Craft responsive and dynamic front-end applications using React.js and Tailwind CSS"),
    emoji("⚡ Develop platforms for social good like crime reporting systems and micro-job marketplaces"),
    emoji("⚡ Passionate about problem-solving, Data Science and learning emerging technologies"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code",
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-laptop-code",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
    skillName: "Tailwind CSS",
    fontAwesomeClassname: "fas fa-wind", 
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-square-root-alt", 
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Seaborn",
      fontAwesomeClassname: "fas fa-chart-line", 
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-bar",
    },
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lilavatbai Podar High School",
      logo: require("./assets/images/School.png"),
      subHeader: "Secondary",
      duration: "march 2011 to march-2021",
      desc: "Secured 94% in 10 th boards",
    },
    {
      schoolName: "Prakash College of Commerce and Science",
      logo: require("./assets/images/HigherCollege.png"),
      subHeader: "Senior Secondary",
      duration: "June 2021 - June 2023",
      desc: "Secured 84% in 12 th boards",
      descBullets: ["Came in the top 1% of the college and won the SHE scholarship"],
    },
    {
      schoolName: "Dwarkadas J Sanghvi College of Engineering",
      logo: require("./assets/images/College.png"),
      subHeader: "B.Tech in Computer Engineering",
      duration: "August 2023 - Present",
      desc: "Pursuing a bachelor's degree in Computer Engineering with a strong academic record and active involvement in extracurricular and leadership roles.",
      descBullets: [
        "CGPA: 9.6 / 10 (as of 2025)",
        "Vice Chairperson of DJSCE eXpress (Official Public Speaking Committee)",
        "Events Co-Committee Member at Google Developer Group (GDG)",
        "Frontend Mentee at DJ Unicode (Tech Club)",
        "Cultural Co-Committee Member at DJSCE Trinity",
        "Actively participated in technical projects, events, and student initiatives"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Exploratory Data Analysis",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "oggnTech",
      companylogo: require("./assets/images/oggn.png"),
      date: "June 2025 - August 2025",
      desc: "Worked on developing responsive and visually appealing user interfaces using React.js and Tailwind CSS. Collaborated closely with the design and backend teams to implement dynamic web components. Improved website performance and accessibility, and contributed to the deployment and optimization of the company's client-facing platforms."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE TECH PROJECTS THAT I'VE WORKED ON:",
  projects: [
    {
      // image: require("./assets/images/CivicSphere.png"), // Replace with actual image if available
      projectName: "CivicSphere",
      projectDesc: "A hyperlocal micro-jobs and skills exchange platform that connects users with nearby skilled workers for small tasks.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KriishChheda/UC_ProjectPhase"
        },
        {
          name: "Live Demo",
          url: "https://civicsphere.vercel.app" // Replace with actual link if deployed
        }
      ]
    },
    {
      // image: require("./assets/images/PatrolConnect.png"),
      projectName: "PatrolConnect",
      projectDesc: "A digital platform for police officers to manage daily tasks efficiently and for citizens to report crimes and file FIRs online.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KriishChheda/PoliceWebsite"
        },
        {
          name: "Live Demo",
          url: "https://police-website.vercel.app" 
        }
      ]
    },
    {
      // image: require("./assets/images/ThunderTrail.png"),
      projectName: "Thunder Trail",
      projectDesc: "A real-time weather forecasting application displaying current and future weather based on user location.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KriishChheda/Frontend-projects"
        }
      ]
    },
    {
      // image: require("./assets/images/DataDock.png"),s
      projectName: "DataDock",
      projectDesc: "A basic web app to perform CRUD operations, ideal for beginners exploring database interactions.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KriishChheda/Frontend-projects"
        }
      ]
    },
    {
      // image: require("./assets/images/Drumify.png"),
      projectName: "Drumify",
      projectDesc: "An interactive drum kit application using JavaScript and event listeners for a virtual percussion experience.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KriishChheda/My_projects"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Positions of responsibility, certifications, technical blogs, and some cool initiatives I've been part of!",

  achievementsCards: [
    {
      title: "Vice Chairperson - DJSCE eXpress",
      subtitle:
        "Leading the official public speaking and debating committee of DJSCE, organizing multiple college-level literary and debating events.",
      image: require("./assets/images/Express.png"), 
      imageAlt: "DJSCE eXpress Logo",
      footerLink: [
        {
          name: "Know More",
          url: "https://express2025-phi.vercel.app"
        }
      ]
    },
    {
      title: "Frontend Mentee - DJ Unicode",
      subtitle:
        "Selected as a mentee in DJ Unicode, the college's technical club, and working on real-world projects to gain hands-on frontend development experience.",
      image: require("./assets/images/Unicode.png"), 
      imageAlt: "DJ Unicode Logo",
      footerLink: []
    },
    {
      title: "Events Co-Committee - Google Developer Group (GDG)",
      subtitle:
        "Assisting in planning and managing technical events and hackathons as part of GDG at DJSCE.",
      image: require("./assets/images/GDG.png"), 
      imageAlt: "GDG Logo",
      footerLink: []
    },
    {
      title: "Cultural Co-Committee - DJSCE Trinity",
      subtitle:
        "Working in the cultural team of DJSCE's official fest Trinity, helping organize major annual events and student activities.",
      image: require("./assets/images/Trinity.png"), 
      imageAlt: "Trinity Logo",
      footerLink: []
    },
    {
      title: 'NPTEL Certification - "Python for Data Science"',
      subtitle:
        "Completed a course offered by IIT Madras and scored 97/100 in the final proctored exam. Secured 1st rank in college, showcasing excellence in Data Science fundamentals and Python programming.",
      image: require("./assets/images/Nptel.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://docs.google.com/document/d/1-PC3F4A1f6dEPDWSgaXoZMjo0QO7xrlmfGfbFOtxCAA/edit?usp=sharing"
        }
      ]
    },
  ],
  display: true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love breaking down technical topics and helping others understand concepts through simple and engaging writing.",
  displayMediumBlogs: "false", // We're using custom blogs, not Medium API
  blogs: [
    {
      url: "https://www.geeksforgeeks.org/community/post/52372/unveiling-views-and-tables-in-dbms-the-window-to-structured-data-management/?itm_source=auth&itm_medium=contributions&itm_campaign=community",
      title: "Unveiling Views and Tables in DBMS",
      description:
        "A deep exploration of Views in DBMS — what they are, how they differ from tables, their internal workings, and their advantages. Aimed at helping beginners and enthusiasts understand structured data better."
    }
  ],
  display: true
};


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9167160832",
  email_address: "kriishchheda00522@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

