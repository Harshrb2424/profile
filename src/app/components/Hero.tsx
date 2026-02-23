import { ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import DotGrid from './ui/DotGrid'; // Added import

type HeroProps = {
  data: {
    role: string;
    title: string;
    subtitle: string;
    profileImage: string;
  };
};

export function Hero({ data }: HeroProps) {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Determine if we are in dark mode to adjust DotGrid colors dynamically
  // Note: If you have a theme provider, you can use a useTheme hook here instead
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background DotGrid Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60">
        <DotGrid
          dotSize={isDark ? 2 : 3} 
          gap={20}
          // Adaptive colors based on theme
          baseColor={isDark ? "#1f2937" : "#d1d5db"} 
          activeColor={isDark ? "#015520" : "#2de26f"} 
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-green-100/80 dark:bg-green-900/30 backdrop-blur-sm rounded-full"
            >
              <span className="text-green-700 dark:text-green-400 font-medium">
                {data.role}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
            >
              {data.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPortfolio}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors shadow-lg"
              >
                View Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="px-8 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-lg font-medium transition-colors"
              >
                About Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-green-400 dark:bg-green-600 rounded-full blur-3xl"
              ></motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-green-500/50 dark:border-green-400/50 shadow-2xl"
              >
                <ImageWithFallback
                  src={data.profileImage}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}