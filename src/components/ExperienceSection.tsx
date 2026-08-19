import { useState } from "react";
import TextSection from "./TextSection";
import experiencesData from "../data/experiences.json";
import { LINK_ICONS } from "./LinkIcons";
import { type Experience } from "../data/index";

export default function ExperienceSection() {
  const experiences: Experience[] = experiencesData;
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentExp = experiences[activeTab];

  return (
    <section className="py-12 md:py-20 w-full">
      <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-10 md:px-15">
        <TextSection
          title="Where I’ve Worked"
          subtitle="A timeline of my professional journey, highlighting the teams I’ve collaborated with and the roles I’ve held."
          className="text-right"
        />

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-12 min-h-85">
          {/* Tab Navigation List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-porto-borderslate shrink-0">
            {experiences.map((exp, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={`${exp.company}-${index}`}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left font-mono text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-0.5 md:mb-0 md:-ml-0.5 ${
                    isActive
                      ? "border-porto-mint text-text-second bg-emerald-500/10 font-medium"
                      : "border-transparent text-text-site/50 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                >
                  {exp.company}
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel */}
          <div className="flex-1 py-1 md:py-0">
            <div className="flex justify-between">
              <h3 className="text-text-site text-lg sm:text-xl font-bold">
                <span>{currentExp.role}</span>
              </h3>
              {currentExp.links && (
                <div className="flex items-center gap-3 mt-2 mb-4">
                  {Object.entries(currentExp.links).map(([type, url]) => {
                    if (!url) return null;
                    const icon = LINK_ICONS[type];
                    if (!icon) return null;

                    return (
                      <a
                        key={type}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={type}
                        className="hover:text-porto-mint transition-colors flex items-center gap-1 text-slate-300"
                      >
                        {icon}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
            <span className="text-text-second">@ {currentExp.company}</span>

            <div className="flex">
              <p className="font-mono text-xs sm:text-sm text-slate-400 mt-1 mb-6">
                {currentExp.period}
              </p>
            </div>

            <ul className="space-y-4 text-text-site/80 text-sm leading-relaxed">
              {currentExp.tasks.map((task, idx) => (
                <li key={idx} className="relative pl-6">
                  <span className="absolute left-0 top-0.5 text-porto-mint text-xs select-none">
                    ▹
                  </span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
