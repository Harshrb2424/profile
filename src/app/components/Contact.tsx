import { Mail, Send, MessageSquare, Phone, Github, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import {
  SiDiscord,
  SiFacebook,
  SiPinterest,
  SiReddit,
  SiTelegram,
  SiThreads,
  SiYoutube
} from "react-icons/si";

type ContactProps = {
  socials: Array<{ name: string; link: string }>;
  contact: {
    email: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    instagram: string;
  };
  personalInfo: {
    phoneCode: string;
    phoneNo: string;
  };
};

export function Contact({ socials, contact, personalInfo }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleWhatsAppClick = () => {
    const text = `Hello, my name is ${formData.name}. ${formData.message}`;
    const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  const handleEmailClick = () => {
    const subject = `Message from ${formData.name}`;
    const body = formData.message;
    const url = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };


  const getSocialIcon = (name: String) => {
    const props = { size: 20 }; // Consistent size for all logos

    switch (name.toLowerCase()) {
      case 'discord':
        return <SiDiscord {...props} />;
      case 'facebook':
        return <SiFacebook {...props} />;
      case 'pinterest':
        return <SiPinterest {...props} />;
      case 'reddit':
        return <SiReddit {...props} />;
      case 'telegram':
        return <SiTelegram {...props} />;
      case 'threads':
        return <SiThreads {...props} />;
      case 'youtube':
        return <SiYoutube {...props} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
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
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let's connect and discuss your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none text-gray-900 dark:text-white"
                  placeholder="Your message"
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  disabled={!formData.name || !formData.message}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  <MessageSquare className="size-5" />
                  WhatsApp
                </button>
                <button
                  onClick={handleEmailClick}
                  disabled={!formData.name || !formData.message}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:bg-gray-200 dark:disabled:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
                >
                  <Mail className="size-5" />
                  Email
                </button>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Social Media
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:from-green-100 hover:to-green-200 dark:hover:from-green-800/30 dark:hover:to-green-700/30 rounded-lg transition-all group border border-green-200 dark:border-green-700/50"
                  >
                    <div className="w-10 h-10 bg-green-500 dark:bg-green-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {getSocialIcon(social.name)}
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white capitalize text-sm">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 p-8 rounded-xl shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 hover:underline group"
                >
                  <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                    <Mail className="size-5" />
                  </div>
                  <span className="break-all">{contact.email}</span>
                </a>
                <a
                  href={`tel:${personalInfo.phoneCode}${personalInfo.phoneNo}`}
                  className="flex items-center gap-3 hover:underline group"
                >
                  <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                    <Phone className="size-5" />
                  </div>
                  <span>{personalInfo.phoneCode} {personalInfo.phoneNo}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}