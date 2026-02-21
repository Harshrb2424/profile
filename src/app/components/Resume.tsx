import { Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "motion/react";

type Education = {
  title: string;
  course: string;
  institute: string;
  logo: string;
  startYear: string;
  endYear: string;
  link: string;
};

type Course = {
  title: string;
  course: string;
  instructor: string;
  platform: string;
  platformLogo: string;
  startYear: string;
  endYear: string;
  link: string;
  certificateLink: string;
};

type ResumeProps = {
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
  education: Education[];
  courses: Course[];
};

export function Resume({ personalInfo, skills, education, courses }: ResumeProps) {
  return (
    <section
      id="resume"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Personal Info */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="inline-block border-b-4 border-green-500 pb-2">
              Personal Info
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Name", value: personalInfo.name },
              { label: "Age", value: personalInfo.age },
              { label: "Phone", value: `${personalInfo.phoneCode} ${personalInfo.phoneNo}` },
              { label: "City", value: personalInfo.city },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-green-200 dark:border-green-800"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{item.label}</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-green-200 dark:border-green-800 sm:col-span-2"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white break-all">
                {personalInfo.email}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-green-200 dark:border-green-800 sm:col-span-2"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Languages</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {personalInfo.languages.join(", ")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-green-200 dark:border-green-800"
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="size-6 text-green-600 dark:text-green-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Technical Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium shadow-sm border border-gray-200 dark:border-gray-600"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-green-200 dark:border-green-800"
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="size-6 text-green-600 dark:text-green-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Soft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium shadow-sm border border-gray-200 dark:border-gray-600"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <GraduationCap className="size-8 text-green-600 dark:text-green-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="inline-block border-b-4 border-green-500 pb-2">
                Education
              </span>
            </h2>
          </motion.div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <img
                    src={edu.logo}
                    alt={edu.institute}
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.course}</p>
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline font-medium inline-block"
                  >
                    {edu.institute}
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {edu.startYear} - {edu.endYear}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="inline-block border-b-4 border-green-500 pb-2">
              Courses & Certificates
            </span>
          </motion.h2>
          <div className="space-y-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 p-6 bg-gradient-to-r from-green-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-200 dark:border-green-800"
              >
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <img
                    src={course.platformLogo}
                    alt={course.platform}
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {course.course} - {course.instructor}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:underline font-medium"
                    >
                      View Course
                    </a>
                    <a
                      href={course.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:underline font-medium"
                    >
                      View Certificate
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {course.startYear} - {course.endYear}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}