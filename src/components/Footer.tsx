import profileData from "../data/profile.json";

export default function Footer() {
  const { name, socials } = profileData;

  return (
    <footer className="py-8 w-full text-center text-slate-400 font-mono text-xs">
      <div className="max-w-5xl mx-auto px-4">
        <p>
          Designed & Built by{" "}
          <a
            className=" text-text-second hover:text-porto-white hover:underline hover:underline-offset-4 transition-colors duration-200"
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </p>
      </div>
    </footer>
  );
}
