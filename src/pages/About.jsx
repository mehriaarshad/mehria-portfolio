
import SectionLabel from "../components/SectionLabel";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const easing = [0.16, 1, 0.3, 1];

function TiltCard({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [7, -7]),
    { stiffness: 180, damping: 18 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
    { stiffness: 180, damping: 18 }
  );

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      className={className}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3, ease: easing }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="min-h-[70vh] px-[8vw] py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: easing }}
      >
        <SectionLabel>01 / ABOUT ME</SectionLabel>
      </motion.div>

      <div
        className="grid gap-12 md:grid-cols-2"
        style={{ perspective: 1200 }}
      >
        <TiltCard>
          <motion.div
            initial={{ opacity: 0, x: -35, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: easing }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <p
              className="mb-4 text-xs font-bold tracking-widest text-[#777770]"
              style={{ transform: "translateZ(20px)" }}
            >
              WHO I AM
            </p>

            <h1
              className="font-display text-4xl font-bold leading-tight sm:text-6xl"
              style={{ transform: "translateZ(35px)" }}
            >
              Turning simple ideas into{" "}
              <motion.span
                className="inline-block text-[#777770]"
                whileHover={{
                  color: "#a3d94f",
                  z: 25,
                  textShadow: "0 8px 25px rgba(163,217,79,0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                beautiful
              </motion.span>{" "}
              digital experiences.
            </h1>
          </motion.div>
        </TiltCard>

        <TiltCard className="max-w-xl text-[#777770]">
          <motion.div
            initial={{ opacity: 0, x: 35, rotateY: 8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.12, ease: easing }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <p
              className="mb-5 leading-8"
              style={{ transform: "translateZ(18px)" }}
            >
              Hi, I&apos;m Mehria Arshad. I enjoy transforming ideas into
              websites that are simple, functional and visually engaging.
            </p>

            <p
              className="mb-5 leading-8"
              style={{ transform: "translateZ(18px)" }}
            >
              I care about the small details — typography, spacing,
              interaction, responsiveness and the overall feeling of a page.
              I&apos;m learning, building and improving with every project.
            </p>

            <motion.div
              style={{ transform: "translateZ(28px)" }}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                to="/contact"
                className="font-bold text-[#171716] hover:underline"
              >
                Work with me →
              </Link>
            </motion.div>
          </motion.div>
        </TiltCard>
      </div>

      <motion.div
        className="mt-16 grid grid-cols-2 gap-8 border-y border-[#17171622] py-8 md:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        style={{ perspective: 1000 }}
      >
        {[
          ["01+", "Years learning & building"],
          ["10+", "Projects & experiments"],
          ["100%", "Curiosity"],
          ["∞", "Ideas to create"],
        ].map(([n, t], index) => (
          <motion.div
            key={t}
            variants={{
              hidden: {
                opacity: 0,
                y: 35,
                rotateX: -15,
                scale: 0.92,
              },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
                transition: {
                  duration: 0.75,
                  ease: easing,
                },
              },
            }}
            whileHover={{
              y: -8,
              rotateY: index % 2 === 0 ? 5 : -5,
              scale: 1.04,
              transition: { duration: 0.3 },
            }}
            style={{
              transformPerspective: 800,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.strong
              className="inline-block font-display text-4xl font-bold"
              style={{ transform: "translateZ(25px)" }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.25 }}
            >
              {n}
            </motion.strong>

            <p className="mt-2 text-sm text-[#777770]">{t}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
