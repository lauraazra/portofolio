import { motion, type Variants } from "framer-motion";
import TextSection from "./TextSection";
import profileData from "../data/profile.json";

export default function AboutSection() {
  const { aboutParagraphs, education, skills } = profileData;

  const paragraphContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  // Varian untuk Tiap Paragraf
  const paragraphItemVariants: Variants = {
    hidden: { opacity: 0, x: -30 }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const resumeBoxVariants: Variants = {
    hidden: { opacity: 0, x: 40 }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="py-15 w-full scroll-mt-15" id="about">
      <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-10 md:px-15">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <TextSection
            title="About Me!"
            subtitle="A short introduction to my skills, experiences, and what I do behind the screen."
            className="text-right"
          />
        </motion.div>

        <div className="aboutme-content w-full flex flex-col md:flex-row gap-8 pt-10 items-stretch">
          <motion.div
            className="desc-abutme flex-1 flex flex-col justify-between gap-5 text-left"
            variants={paragraphContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {aboutParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={paragraphItemVariants}
                className="leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="resume-box w-full md:w-80 lg:w-96 shrink-0 border border-border-site rounded-xl p-5 bg-card-site flex flex-col justify-between text-xs sm:text-sm"
            variants={resumeBoxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Education */}
            <div className="space-y-3">
              <h3 className="font-bold text-text-site uppercase tracking-wider text-xs border-b border-border-site pb-1">
                Education
              </h3>

              {education.map((edu, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-text-site">
                    {edu.institution}
                  </p>
                  <p className="text-porto-mint dark:text-[#d2f7e7] font-medium text-xs">
                    {edu.degree}
                  </p>
                  {edu.supervisor && (
                    <p className="text-porto-mint dark:text-[#d2f7e7] font-medium text-[11px] mt-0.5">
                      {edu.supervisor}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-4 pt-3">
              <h3 className="font-bold text-text-site uppercase tracking-wider text-xs border-b border-border-site pb-1 mb-3.5">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[11px] bg-porto-teal text-porto-white rounded font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
