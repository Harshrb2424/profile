import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { portfolioData } from "./data";

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