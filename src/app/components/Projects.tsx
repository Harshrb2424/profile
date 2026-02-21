import { ExternalLink, Filter } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

type Project = {
  title: string;
  category: string;
  timePeriod: string;
  role: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
};

type ProjectsProps = {
  data: Project[];
};

export function Projects({ data }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(data.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? data
      : data.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="inline-block border-b-4 border-green-500 pb-2">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Showcase of my work and contributions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 mb-8 overflow-x-auto pb-4"
        >
          <Filter className="size-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-32 sm:h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 p-1.5 sm:p-2 bg-white rounded-full hover:bg-green-500 hover:text-white transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="size-4 sm:size-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-3 sm:p-6 space-y-2 sm:space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
                    {project.title}
                  </h3>
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <p className="line-clamp-1">{project.timePeriod}</p>
                  <p className="font-medium text-green-600 dark:text-green-400 line-clamp-1">
                    {project.role}
                  </p>
                </div>
                <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300 line-clamp-2 hidden sm:block">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 pt-2">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] sm:text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}