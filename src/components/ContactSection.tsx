import { motion, type Variants } from "framer-motion";
import Contact from "./Contact";

export default function ContactSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.1, 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center text-center text-slate-300"
      id="contact"
    >
      <motion.div
        className="max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-15 md:px-15"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} 
      >
        <motion.p
          variants={itemVariants}
          className="font-mono text-text-second text-sm sm:text-base tracking-wide mb-3"
        >
          What’s Next?
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl font-extrabold text-text-site tracking-tight mb-5"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto"
        >
          I'm actively looking for new opportunities. Whether you want to
          discuss a project or say hi, my inbox is always open!
        </motion.p>

        <motion.div variants={itemVariants}>
          <Contact />
        </motion.div>
      </motion.div>
    </section>
  );
}
