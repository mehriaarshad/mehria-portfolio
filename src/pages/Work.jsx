
import SectionLabel from "../components/SectionLabel";
import { motion } from "framer-motion";

const projects = [
  { image: "Studio.png", title: "Creative Studio", description: "Web Design · HTML · CSS · JavaScript", url: "projects/creative-studio/index.html", wide: true },
  { image: "Mood App.png", title: "Mood App", description: "UI / UX · Mobile Design", url: "projects/mood-app/index.html" },
  { image: "Creative.png", title: "More Creative", description: "HTML · CSS", url: "projects/more-creative/index.html" },
];

const easing = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: easing,
    },
  },
};

export default function Work() {
  return (
    <section className="min-h-[70vh] px-[8vw] py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={revealVariants}
      >
        <SectionLabel>02 / SELECTED WORK</SectionLabel>
      </motion.div>

      <motion.div
        className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={containerVariants}
      >
        <motion.h1
          className="font-display text-5xl font-bold sm:text-7xl"
          variants={revealVariants}
        >
          My recent <span className="text-[#777770]">work.</span>
        </motion.h1>

        <motion.p
          className="leading-7 text-[#777770]"
          variants={revealVariants}
        >
          Projects, experiments and
          <br className="hidden md:block" /> things I&apos;ve enjoyed building.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className={project.wide ? "md:col-span-2" : ""}
            variants={revealVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.35, ease: easing }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden bg-[#e9e8e2]"
            >
              <motion.img
                src={`${import.meta.env.BASE_URL}images/${project.image}`}
                alt={project.title}
                className={`${project.wide ? "max-h-[560px]" : "aspect-[1.2]"} w-full object-cover transition duration-500 group-hover:scale-[1.02]`}
                whileHover={{ scale: 1.035 }}
                transition={{ duration: 0.7, ease: easing }}
              />
            </a>

            <div className="flex items-center justify-between py-5">
              <div>
                <h2 className="font-display text-2xl font-bold">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-[#777770]">
                  {project.description}
                </p>
              </div>

              <motion.a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-[#17171622] text-xl hover:bg-[#c9f36b]"
                whileHover={{
                  rotate: 45,
                  scale: 1.08,
                  backgroundColor: "#c9f36b",
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.25 }}
              >
                ↗
              </motion.a>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.p
        className="mt-6 text-sm text-[#777770]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Note: project links will work when you add each project folder to the public directory.
      </motion.p>
    </section>
  );
}
