import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return systemPrefersDark;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Project", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="bg-bg-site sticky top-0 z-50 transition-colors duration-300 border-b border-border-site/50 shadow-[0_4px_20px_rgba(26,49,44,0.18)] dark:shadow-[0_4px_25px_rgba(52,211,153,0.15)]"
    >
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-20 py-4 mx-auto w-full">
        {/* LOGO */}
        <div className="flex-1 flex justify-start">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            <img
              src="/logo.png"
              alt="Logo"
              className="object-contain w-12 md:w-16 lg:w-20 dark:hidden"
            />
            <img
              src="/logo2.png"
              alt="Logo Dark"
              className="object-contain w-12 md:w-16 lg:w-20 hidden dark:block"
            />
          </a>
        </div>

        {/* BACKDROP MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <ul className="flex items-center gap-12 font-medium whitespace-nowrap">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 * idx }}
              >
                <a
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* MOBILE NAV DRAWER */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-2/3 bg-bg-site/90 backdrop-blur-md z-50 p-10 shadow-2xl lg:hidden flex flex-col justify-start"
            >
              <button
                className="text-text-site absolute top-7 right-10 p-2 transition-transform duration-300 hover:rotate-90 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6 text-text-site"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <ul className="flex flex-col items-end gap-8 font-medium whitespace-nowrap mt-15">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-emerald-400 text-lg transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* RIGHT ACTIONS */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            type="button"
            className="p-2.5 rounded-full bg-bg-site/50 border border-border-site/30 text-text-site hover:bg-text-site/10 transition-all duration-300 cursor-pointer shadow-xs group"
            aria-label="Toggle Dark Mode"
          >
            <div className="relative size-5 overflow-hidden">
              {/* Icon Sun */}
              <div
                className={`absolute inset-0 transform transition-transform duration-500 ${
                  isDarkMode
                    ? "translate-y-0 rotate-0"
                    : "-translate-y-8 rotate-45"
                }`}
              >
                <Sun className="size-5" />
              </div>

              {/* Icon Moon */}
              <div
                className={`absolute inset-0 transform transition-transform duration-500 ${
                  isDarkMode
                    ? "translate-y-8 -rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              >
                <Moon className="size-5" />
              </div>
            </div>
          </button>

          {/* HAMBURGER BUTTON */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-text-site cursor-pointer hover:scale-110 transition-transform"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
