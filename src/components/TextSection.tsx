import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface TextSectionProps {
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// Varian dinamis berdasarkan isRight
const getChildVariants = (isRight: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isRight ? 30 : -30,
    y: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
});

export default function TextSection({
  title,
  subtitle,
  className = "",
}: TextSectionProps) {
  const isRight = className.includes("text-right");
  const childVariants = getChildVariants(isRight);

  return (
    <motion.div
      variants={containerVariants}
      className={`w-full text-text-site ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {title && (
        <motion.div
          variants={childVariants}
          className={`flex items-center gap-4 w-full ${
            isRight ? "ml-auto flex-row-reverse" : "mr-auto flex-row"
          }`}
        >
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight whitespace-nowrap">
            {title}
          </h2>

          <div className="flex-1 h-px bg-text-site" />
        </motion.div>
      )}

      {subtitle && (
        <motion.p
          variants={childVariants}
          className={`mt-4 text-sm sm:text-base lg:text-lg font-light leading-relaxed whitespace-pre-line text-balance ${
            isRight ? "ml-auto text-right" : "mr-auto text-left"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
