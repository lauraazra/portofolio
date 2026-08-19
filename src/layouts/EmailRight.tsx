import { motion } from "framer-motion";

export default function EmailRight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="hidden lg:flex flex-col items-center fixed top-0 right-6 lg:right-12 z-40 gap-5 text-text-site/70"
    >
      <div className="w-px h-100 lg:h-75 bg-slate-600/60" />

      <div className="font-mono text-xs tracking-wider [writing-mode:vertical-rl]">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=lazraaprilyanti@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-porto-mint hover:translate-y-1 transition-all duration-200 block py-2"
        >
          lazraaprilyanti@gmail.com
        </a>
      </div>
    </motion.div>
  );
}
