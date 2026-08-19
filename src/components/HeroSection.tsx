import { useState, useEffect } from "react";
import profileData from "../data/profile.json";
import Contact from "./Contact";

export default function HeroSection() {
  const { name, roles, tagline } = profileData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsFading(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      className="min-h-screen w-full flex items-center justify-center -mt-16 sm:-mt-20 scroll-mt-28 "
      id="home"
    >
      <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-10 md:px-15">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text flex-1">
            <div className="tagline flex flex-col gap-4">
              <p className="text-xl font-bold text-left">Hi👋, my name is</p>
              <h1 className="text-4xl md:text-5xl font-bold text-text-site">
                {name}
              </h1>

              <div className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <span>I am a</span>
                <span
                  className={`inline-block text-porto-mint transition-all duration-300 transform ${
                    isFading
                      ? "translate-y-4 opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  {roles[currentRoleIndex]}
                </span>
              </div>
            </div>

            <p className="pt-6 text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
              {tagline}
            </p>
          </div>

          <div className="avatar shrink-0 flex flex-col gap-5 mt-10 md:mt-20 lg:mt-0">
            <img
              src={`https://api.dicebear.com/7.x/lorelei/svg?seed=f`}
              alt="Avatar Profile"
              className="w-48 h-48 object-contain hidden md:block"
            />
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
}
