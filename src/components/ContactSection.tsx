import Contact from "./Contact";

export default function ContactSection() {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center text-center text-slate-300"
      id="contact"
    >
      <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-15 md:px-15">
        <p className="font-mono text-text-second text-sm sm:text-base tracking-wide mb-3">
          What’s Next?
        </p>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-text-site tracking-tight mb-5">
          Get In Touch
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
          I'm actively looking for new opportunities. Whether you want to
          discuss a project or say hi, my inbox is always open!
        </p>

        <Contact />
      </div>
    </section>
  );
}
