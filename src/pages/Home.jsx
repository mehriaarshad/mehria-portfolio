
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 18 });
  const springY = useSpring(y, { stiffness: 150, damping: 18 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

  function handleMouseMove(event) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [activeService, setActiveService] = useState([]);
  const services = ["Brand", "Digital", "Campaign", "Other"];

  function toggleService(service) {
    setActiveService((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="grid min-h-[calc(100vh-82px)] items-center gap-12 overflow-hidden px-[8vw] pb-20 pt-[70px] lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={reveal}
            className="mb-7 flex items-center gap-3 text-[11px] font-bold tracking-[0.18em]"
          >
            <motion.span
              animate={{ scale: [1, 1.35, 1], opacity: [1, 0.65, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-[#c9f36b]"
            />
            CREATIVE DEVELOPER &amp; DESIGNER
          </motion.p>

          <motion.h1
            variants={reveal}
            className="font-display text-5xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[clamp(58px,6.5vw,96px)]"
          >
            Building digital
            <br />
            experiences with
            <br />
            <motion.span
              className="inline-block text-[#777770]"
              whileHover={{ x: 8, color: "#171716" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              purpose.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-7 max-w-[510px] text-base leading-8 text-[#777770]"
          >
            Hi, I&apos;m{" "}
            <strong className="text-[#171716]">Mehria Arshad</strong>. I create
            clean, modern and memorable websites where thoughtful design meets
            beautiful code.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/work"
                className="inline-block rounded-full bg-[#171716] px-6 py-4 text-sm font-bold text-[#c9f36b] transition"
              >
                View my work ↗
              </Link>
            </motion.div>

            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/contact"
                className="text-sm font-bold hover:underline"
              >
                Let&apos;s connect →
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-12 flex items-center gap-4 text-sm"
          >
            <motion.a
              whileHover={{ y: -5, rotate: -5 }}
              href="https://www.linkedin.com/in/mehria-arshad-0a781b419/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#17171622] font-bold hover:bg-[#c9f36b]"
            >
              in
            </motion.a>

            <motion.a
              whileHover={{ y: -5, rotate: 5 }}
              href="https://github.com/mehriaarshad"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#17171622] font-bold hover:bg-[#c9f36b]"
            >
              GH
            </motion.a>

            <span className="h-px w-8 bg-[#17171622]" />

            <small className="text-[10px] font-bold tracking-widest text-[#777770]">
              FIND ME ONLINE
            </small>
          </motion.div>
        </motion.div>

        {/* 3D HERO ART */}
        <TiltCard className="hero-art relative mx-auto flex aspect-square w-full max-w-[470px] items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[5%] rounded-full border border-[#17171620]"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[15%] rounded-full border border-[#17171620]"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[25%] rounded-full border border-[#17171620]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            whileHover={{ scale: 1.045, rotate: 2 }}
            className="relative z-10 flex aspect-[.78] w-[56%] flex-col justify-between bg-[#c9f36b] p-5 shadow-[18px_18px_0_#171716] sm:p-7"
          >
            <div className="flex justify-between text-[9px] font-bold tracking-widest">
              <span>PORTFOLIO</span>
              <span>2026</span>
            </div>

            <motion.strong
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="font-display text-7xl tracking-[-0.09em] sm:text-8xl"
            >
              MA
            </motion.strong>

            <div className="flex justify-between text-[8px] font-bold tracking-widest">
              <span>DESIGN</span>
              <span>CODE</span>
              <span>CREATE</span>
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 0.8, duration: 0.6 },
              x: { delay: 0.8, duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute right-0 top-[18%] rounded-full bg-[#171716] px-4 py-2 text-[10px] font-bold text-[#c9f36b]"
          >
            CREATIVE ✦
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.6 },
              x: { delay: 1, duration: 0.6 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute bottom-[15%] left-0 rounded-full border border-[#171716] bg-[#f5f4ef] px-4 py-2 text-[10px] font-bold"
          >
            DEVELOPER ↗
          </motion.span>
        </TiltCard>
      </section>

      {/* MOVING TEXT STRIP */}
      <div className="overflow-hidden border-y border-[#17171622] py-5">
        <motion.p
          animate={{ x: ["0%", "-25%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-center font-display text-xs font-bold tracking-[0.25em]"
        >
          CREATIVE DEVELOPMENT ✦ DIGITAL DESIGN ✦ CREATIVE DEVELOPMENT ✦
          DIGITAL DESIGN ✦ CREATIVE DEVELOPMENT ✦ DIGITAL DESIGN ✦
        </motion.p>
      </div>

      {/* ABOUT SECTION */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-[8vw] py-24"
      >
        <motion.p
          variants={reveal}
          className="mb-8 text-[11px] font-bold tracking-[0.18em] text-[#777770]"
        >
          01 / A LITTLE ABOUT ME
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.h2
            variants={reveal}
            className="font-display text-4xl font-bold leading-tight sm:text-5xl"
          >
            Turning simple ideas into{" "}
            <span className="text-[#777770]">beautiful</span> digital
            experiences.
          </motion.h2>

          <motion.div variants={reveal} className="max-w-lg text-[#777770]">
            <p className="mb-4 leading-7">
              I enjoy transforming ideas into websites that are simple,
              functional and visually engaging.
            </p>

            <p className="mb-6 leading-7">
              I care about the small details — typography, spacing, interaction,
              responsiveness and the overall feeling of a page.
            </p>

            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/about"
                className="inline-block font-bold text-[#171716] hover:underline"
              >
                More about me →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="px-[8vw] pb-28"
      >
        <div className="grid grid-cols-2 gap-6 border-y border-[#17171622] py-8 md:grid-cols-4">
          {[
            ["01+", "Years learning & building"],
            ["10+", "Projects & experiments"],
            ["100%", "Curiosity"],
            ["∞", "Ideas to create"],
          ].map(([number, label]) => (
            <motion.div
              key={label}
              variants={reveal}
              whileHover={{ y: -6 }}
              className="transition-colors"
            >
              <strong className="font-display text-4xl font-bold sm:text-5xl">
                {number}
              </strong>
              <p className="mt-2 text-sm text-[#777770]">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* PROJECT HEADING */}
        <motion.div
          variants={reveal}
          className="mt-12 flex flex-wrap items-center justify-between gap-5"
        >
          <h2 className="font-display text-4xl font-bold">
            A few things I&apos;ve made.
          </h2>

          <motion.div whileHover={{ x: 5 }}>
            <Link to="/work" className="font-bold hover:underline">
              Explore all work ↗
            </Link>
          </motion.div>
        </motion.div>

        {/* PROJECT CARDS */}
        <motion.div
          variants={stagger}
          className="mt-8 grid gap-6 md:grid-cols-3"
        >
          {[
            ["Studio.png", "Creative Studio", "Web Design · HTML · CSS"],
            ["Mood App.png", "Mood App", "UI / UX · Mobile Design"],
            ["Creative.png", "More Creative", "HTML · CSS"],
          ].map(([image, title, desc], index) => (
            <motion.div
              key={title}
              variants={reveal}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <Link to="/work" className="group block">
                <div className="overflow-hidden bg-[#e9e8e2]">
                  <motion.img
                    src={`${import.meta.env.BASE_URL}images/${image}`}
                    alt={title}
                    initial={{ scale: 1.08, opacity: 0.6 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.12 }}
                    className="aspect-[1.2] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 font-display text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-1 text-sm text-[#777770]">{desc}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* QUICK PROJECT ENQUIRY */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-[8vw] pb-24"
      >
        <motion.div
          variants={reveal}
          className="bg-[#171716] px-7 py-12 text-[#f5f4ef] sm:px-12 sm:py-16"
        >
          <p className="mb-5 text-[11px] font-bold tracking-[0.18em] text-[#c9f36b]">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            What would you like to create?
          </h2>

          <p className="mt-4 text-sm text-white/60">
            Select any services that fit your idea.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {services.map((service) => {
              const selected = activeService.includes(service);

              return (
                <motion.button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  aria-pressed={selected}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                    selected
                      ? "border-[#c9f36b] bg-[#c9f36b] text-[#171716]"
                      : "border-white/25 text-white hover:bg-white/10"
                  }`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {selected ? "✓ " : ""}
                  </AnimatePresence>
                  {service}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {activeService.length === 0 ? (
              <motion.p
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-6 text-xs italic"
              >
                Please select a service above.
              </motion.p>
            ) : (
              <motion.div
                key="selected"
                initial={{ opacity: 0, y: 12, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm text-white/75">
                  Ready to inquire about:{" "}
                  <strong className="text-[#c9f36b]">
                    {activeService.join(", ")}
                  </strong>
                </p>

                <motion.div whileHover={{ x: 5 }} className="mt-4">
                  <Link
                    to={`/contact?services=${encodeURIComponent(activeService.join(", "))}`}
                    className="inline-block text-xs font-bold uppercase tracking-widest text-[#c9f36b]"
                  >
                    Let&apos;s Go ↗
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </>
  );
}
