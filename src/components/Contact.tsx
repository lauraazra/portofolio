import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import profileData from "../data/profile.json";

export default function Contact() {
  const { socials } = profileData;
  return (
    <div className="flex items-center justify-center gap-6 text-slate-400">
      <a
        href={socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="hover:text-porto-mint hover:-translate-y-1 transition-all duration-200"
      >
        <FaWhatsapp size={24} />
      </a>

      <a
        href={socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-porto-mint hover:-translate-y-1 transition-all duration-200"
      >
        <FaLinkedin size={24} />
      </a>

      <a
        href={socials.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-porto-mint hover:-translate-y-1 transition-all duration-200"
      >
        <FaGithub size={24} />
      </a>

      <a
        href={socials.email}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        className="hover:text-porto-mint hover:-translate-y-1 transition-all duration-200"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
}
