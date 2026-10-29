
import { motion } from "framer-motion";
import SectionLabel from "../components/SectionLabel";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section className="min-h-[70vh] overflow-hidden px-[8vw] py-24">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel>04 / CONTACT</SectionLabel>
      </motion.div>

      {/* Contact card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative isolate overflow-hidden bg-[#171716] px-7 py-14 text-[#f5f4ef] sm:px-14 sm:py-20"
      >
        {/* Animated background glow */}
        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#c9f36b]/10 blur-[90px]"
        />

        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-40 left-[20%] -z-10 h-72 w-72 rounded-full bg-[#c9f36b]/[0.06] blur-[85px]"
        />

        {/* Availability label */}
        <motion.p
          variants={itemVariants}
          className="relative mb-8 flex items-center gap-3 text-[11px] font-bold tracking-[0.18em]"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.55, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-[#c9f36b]"
          />
          HAVE A PROJECT IN MIND?
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="relative font-display text-5xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-7xl"
        >
          Let&apos;s create
          <br />
          something{" "}
          <motion.span
            whileHover={{ color: "#ffffff" }}
            transition={{ duration: 0.25 }}
            className="inline-block text-[#c9f36b]"
          >
            beautiful.
          </motion.span>
        </motion.h1>

        {/* Email */}
        <motion.a
          variants={itemVariants}
          href="mailto:sabaharshad777@gmail.com"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.99 }}
          className="group relative mt-10 inline-flex max-w-full items-center gap-4 border-b border-[#f5f4ef55] pb-3 text-sm font-semibold transition-colors hover:border-[#c9f36b] sm:text-lg"
        >
          <span className="break-all">sabaharshad777@gmail.com</span>
          <motion.span
            className="shrink-0 text-[#c9f36b]"
            whileHover={{ x: 4, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ↗
          </motion.span>
        </motion.a>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="relative mt-12 flex flex-wrap gap-3"
        >
          <motion.a
            href="https://www.linkedin.com/in/mehria-arshad-0a781b419/"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -4,
              backgroundColor: "#c9f36b",
              color: "#171716",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm"
          >
            LinkedIn ↗
          </motion.a>

          <motion.a
            href="https://github.com/mehriaarshad"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -4,
              backgroundColor: "#c9f36b",
              color: "#171716",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm"
          >
            GitHub ↗
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="relative mt-16 flex flex-col justify-between gap-3 border-t border-white/20 pt-5 text-[10px] font-bold tracking-widest text-white/60 sm:flex-row"
        >
          <span>MEHRIA ARSHAD · CREATIVE DEVELOPER</span>

          <motion.span
            whileHover={{ color: "#c9f36b" }}
            className="w-fit"
          >
            © 2026
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
