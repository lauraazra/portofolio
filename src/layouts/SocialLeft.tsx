import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import profileData from "../data/profile.json";

export default function SocialLeft() {
  const { socials } = profileData;

  const socialLinks = [
    {
      name: "GitHub",
      url: socials.github,
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "WhatsApp",
      url: socials.whatsapp,
      icon: <FaWhatsapp className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: socials.linkedin,
      icon: <FaLinkedin className="w-5 h-5" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="hidden lg:flex flex-col items-center fixed top-0 left-6 lg:left-12 z-40 gap-5 text-text-site/70"
    >
      <div className="w-px h-100 lg:h-75 bg-slate-600/60" />

      {/* List Sosmed */}
      <ul className="flex flex-col gap-5">
        {socialLinks.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="hover:text-porto-mint hover:translate-y-1 transition-all duration-200 block"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
