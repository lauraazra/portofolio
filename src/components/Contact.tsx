import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import profileData from "../data/profile.json";

export default function Contact() {
  const { socials } = profileData;

  const socialLinks = [
    {
      href: socials.whatsapp,
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
    },
    {
      href: socials.linkedin,
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
    },
    { href: socials.github, icon: <FaGithub size={24} />, label: "GitHub" },
    { href: socials.email, icon: <FaEnvelope size={24} />, label: "Email" },
  ];

  return (
    <div className="flex items-center justify-center gap-6 text-slate-400">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="hover:text-porto-mint hover:-translate-y-1 transition-colors duration-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: index * 0.3,
            ease: "easeOut",
          }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
