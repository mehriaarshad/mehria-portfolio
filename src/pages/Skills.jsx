
import { motion } from "framer-motion";
import SectionLabel from "../components/SectionLabel";

const skills = [
  ["01", "HTML & CSS", "Responsive layouts · Grid · Flexbox"],
  ["02", "JavaScript", "Interactive experiences · DOM · Logic"],
  ["03", "React & Tailwind CSS", "Components · Routing · Utility-first styling"],
  ["04", "UI / UX Design", "Figma · Wireframes · Prototypes"],
  ["05", "Creative Direction", "Visual systems · Typography · Layout"],
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section className="min-h-[70vh] overflow-hidden px-[8vw] py-24">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel>03 / MY SKILLS</SectionLabel>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Left content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 text-xs font-bold tracking-widest text-[#777770]"
          >
            EXPERTISE
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl font-bold sm:text-7xl"
          >
            Design +{" "}
            <motion.span
              className="inline-block text-[#777770]"
              whileHover={{ color: "#171716", x: 5 }}
              transition={{ duration: 0.25 }}
            >
              code.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-sm leading-7 text-[#777770]"
          >
            A growing toolkit for turning ideas into polished digital
            experiences.
          </motion.p>

          {/* Decorative animated line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 72 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 h-1 rounded-full bg-[#c9f36b]"
          />
        </motion.div>

        {/* Animated skills list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skills.map(([num, title, desc]) => (
            <motion.div
              key={num}
              variants={itemVariants}
              whileHover={{
                x: 6,
                backgroundColor: "rgba(201, 243, 107, 0.10)",
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="group flex items-center gap-5 border-t border-[#17171622] px-3 py-6"
            >
              <motion.span
                className="text-xs text-[#777770]"
                whileHover={{ color: "#171716" }}
              >
                {num}
              </motion.span>

              <div className="flex-1">
                <h2 className="font-display text-xl font-bold transition-colors duration-300 group-hover:text-[#55554d]">
                  {title}
                </h2>

                <p className="mt-1 text-sm text-[#777770]">
                  {desc}
                </p>
              </div>

              <motion.b
                className="text-xl"
                whileHover={{ x: 4, y: -4 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
              >
                ↗
              </motion.b>
            </motion.div>
          ))}

          {/* Bottom border */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-px origin-left bg-[#17171622]"
          />
        </motion.div>
      </div>
    </section>
  );
}
