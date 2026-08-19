import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import projectsData from "../data/projects.json";
import { LINK_ICONS } from "./LinkIcons";
import { type Project } from "../data";

export default function MoreProjectsSection() {
  const moreProjects: Project[] = projectsData.moreProjects;
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const zoomInVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: (index % 3) * 0.1,
      },
    }),
  };

  return (
    <section className="py-15 w-full">
      <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-10 md:px-15">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-text-site">
            Other Noteworthy Projects
          </h2>
          <p className="text-text-second font-mono text-xs sm:text-sm mt-2">
            archive of academic & exploratory builds
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {moreProjects.slice(0, visibleCount).map((project, index) => (
              <motion.div
                key={project.Name}
                layout
                variants={zoomInVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-porto-darkblue hover:-translate-y-2 transition-all duration-300 p-7 rounded-lg border border-slate-800 hover:border-slate-700 flex flex-col justify-between shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <svg
                      className="w-10 h-10 text-porto-mint stroke-current fill-none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>

                    <div className="flex items-center gap-3 text-porto-white/80">
                      {Object.entries(project.link).map(([type, url]) => {
                        if (!url) return null;
                        const icon = LINK_ICONS[type];
                        return (
                          <a
                            key={type}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={type}
                            className="hover:text-porto-mint transition-colors flex items-center gap-0.5"
                          >
                            {icon}
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <h3 className="text-slate-100 group-hover:text-porto-mint transition-colors text-lg font-bold mb-3">
                    <a
                      href={
                        project.link.Website ||
                        project.link.Repository ||
                        project.link.Download ||
                        "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.Name}
                    </a>
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.Description}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-slate-500">
                  {project.tool.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tombol */}
        {visibleCount < moreProjects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleShowMore}
              className="px-7 py-3.5 text-xs font-mono font-medium text-porto-mint border border-porto-mint/40 rounded hover:bg-porto-mint/10 transition-all duration-200"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
