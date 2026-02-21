import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

type FooterProps = {
  contact: {
    email: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    instagram: string;
  };
};

export function Footer({ contact }: FooterProps) {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Email */}
          <div className="text-center">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors text-lg"
            >
              <Mail className="size-5" />
              <span>{contact.email}</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-6" />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-6" />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="size-6" />
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8 w-full">
            <p>© {new Date().getFullYear()} Harsh R Bagtharia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
