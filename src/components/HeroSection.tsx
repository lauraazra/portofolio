import { useState, useEffect } from "react";
import profileData from "../data/profile.json";

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
    <section className="py-12 md:py-20 w-full mt-20" id="home">
      <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-10 md:px-15">
        <div className="tagline flex flex-col gap-4">
          <p className="text-xl font-bold text-left">Hi👋, my name is</p>
          <h1 className="text-5xl font-bold">{name}</h1>
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
        <p className="pt-10">{tagline}</p>
      </div>
    </section>
  );
}
