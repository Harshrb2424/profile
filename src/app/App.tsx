import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { portfolioData } from "./data";

type PortfolioData = {
  nav: {
    name: string;
    links: string[];
  };
  home: {
    role: string;
    title: string;
    subtitle: string;
    profileImage: string;
  };
  about: {
    title: string;
    description: string;
    resumeLink: string;
  };
  personalInfo: {
    name: string;
    age: string;
    phoneCode: string;
    phoneNo: string;
    city: string;
    email: string;
    languages: string[];
  };
  skills: {
    technical: string[];
    soft: string[];
  };
  education: Array<{
    title: string;
    course: string;
    institute: string;
    logo: string;
    startYear: string;
    endYear: string;
    link: string;
  }>;
  courses: Array<{
    title: string;
    course: string;
    instructor: string;
    platform: string;
    platformLogo: string;
    startYear: string;
    endYear: string;
    link: string;
    certificateLink: string;
  }>;
  projects: Array<{
    title: string;
    category: string;
    timePeriod: string;
    role: string;
    description: string;
    link: string;
    image: string;
    tags: string[];
  }>;
  socials: Array<{ name: string; link: string }>;
  contact: {
    email: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    instagram: string;
  };
};

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar data={portfolioData.nav} />
        <main>
          <Hero data={portfolioData.home} />
          <About data={portfolioData.about} />
          <Projects data={portfolioData.projects} />
          <Resume
            personalInfo={portfolioData.personalInfo}
            skills={portfolioData.skills}
            education={portfolioData.education}
            courses={portfolioData.courses}
          />
          <Contact socials={portfolioData.socials} contact={portfolioData.contact} personalInfo={portfolioData.personalInfo} />
        </main>
        <Footer contact={portfolioData.contact} />
      </div>
    </ThemeProvider>
  );
}