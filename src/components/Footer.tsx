import profileData from "../data/profile.json";

export default function Footer() {
  const { name, socials } = profileData;

  return (
    <footer className="py-8 w-full text-center text-slate-400 font-mono text-xs">
      <div className="max-w-5xl mx-auto px-4">
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-porto-mint transition-colors duration-200 block"
        >
          <p>Designed & Built by {name}</p>
        </a>
      </div>
    </footer>
  );
}
