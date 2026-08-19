import TextSection from "./TextSection";
import projectsData from "../data/projects.json";
import { LINK_ICONS } from "./LinkIcons";
import { type Project } from "../data/index";

export default function ProjectsSection() {
  const coreProjects: Project[] = projectsData.coreProjects;

  return (
    <section className="py-20 w-full scroll-mt-10" id="projects">
      <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-10 md:px-15">
        <TextSection
          title="Some Things I’ve Built"
          subtitle="Here are a few projects I’ve worked on ranging from web applications to dynamic UI components"
          className="mb-8"
        />

        <div className="flex flex-col">
          {coreProjects.map((project, index) => (
            <div
              key={project.Name}
              className="relative grid grid-cols-1 md:grid-cols-12 items-center border-b border-b-border-site md:border-b-0 py-15"
            >
              {/* GAMBAR PROJECT */}
              <div
                className={`relative z-0 col-span-1 md:col-span-7 lg:col-span-8 md:row-start-1 rounded-lg overflow-hidden border border-porto-borderslate shadow-xl group shadow-glow ${
                  index % 2 === 1
                    ? "md:col-start-6 lg:col-start-5 md:col-end-13"
                    : "md:col-start-1 md:col-end-8 lg:col-end-9"
                }`}
              >
                <a
                  href={project.link.Website || project.link.Repository || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-16/10 w-full overflow-hidden"
                >
                  <img
                    src={`/coreproject/${project.img}`}
                    alt={project.Name}
                    className="w-full h-full object-cover object-top transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-card-site/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300" />
                </a>
              </div>

              {/* DESKRIPSI & INFO */}
              <div
                className={`z-10 col-span-1 md:col-span-7 lg:col-span-6 md:row-start-1 flex flex-col justify-center mt-4 md:mt-0 ${
                  index % 2 === 1
                    ? "md:col-start-1 md:col-end-8 lg:col-end-7 md:items-start md:text-left"
                    : "md:col-start-6 lg:col-start-7 md:col-end-13 md:items-end md:text-right"
                }`}
              >
                <p className="text-text-second font-mono text-xs tracking-wider">
                  {project.Category}
                </p>

                <h3 className="text-text-site text-xl sm:text-2xl font-bold mt-1 mb-4 hover:text-porto-mint transition-colors">
                  <a
                    href={
                      project.link.Website || project.link.Repository || "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.Name}
                  </a>
                </h3>

                <div className="bg-porto-darkblue p-4 md:p-6 rounded-md text-slate-300 text-sm leading-relaxed shadow-2xl border border-slate-700/50 shadow-card">
                  <p>{project.Description}</p>
                </div>

                <ul
                  className={`flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[0.8rem] text-[#818FA3] my-4 ${
                    index % 2 === 1 ? "justify-start" : "justify-end"
                  }`}
                >
                  {project.tool.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div
                  className={`flex items-center gap-4 text-text-site ${
                    index % 2 === 1 ? "justify-start" : "justify-end"
                  }`}
                >
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
                        className="hover:text-porto-mint transition-colors flex items-center gap-1"
                      >
                        {icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
