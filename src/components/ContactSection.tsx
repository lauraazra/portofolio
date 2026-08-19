import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import profileData from "../data/profile.json";

export default function ContactSection() {
  const { socials } = profileData;

  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center text-center text-slate-300"
      id="contact"
    >
      <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-15 md:px-15">
        <p className="font-mono text-text-second text-sm sm:text-base tracking-wide mb-3">
          What’s Next?
        </p>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-text-site tracking-tight mb-5">
          Get In Touch
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
          I'm actively looking for new opportunities. Whether you want to
          discuss a project or say hi, my inbox is always open!
        </p>

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
      </div>
    </section>
  );
}
