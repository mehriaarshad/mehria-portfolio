
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const easing = [0.16, 1, 0.3, 1];

export default function Footer() {
  return (
    <motion.footer
      className="flex flex-col items-start justify-between gap-6 border-t border-[#17171622] px-[8vw] py-8 sm:flex-row sm:items-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easing }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25, ease: easing }}
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-[19px] font-bold"
        >
          <motion.img
            src={`${import.meta.env.BASE_URL}images/profile.png`}
            alt=""
            className="h-[35px] w-[35px] rounded-full object-cover"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3, ease: easing }}
          />
          Mehria.
        </Link>
      </motion.div>

      {/* Email and social links */}
      <div className="flex flex-col gap-3 text-sm">
        <motion.a
          href="mailto:sabaharshad777@gmail.com"
          className="text-[#777770] transition-colors duration-200 hover:text-[#171716]"
          whileHover={{ x: 3 }}
        >
          sabaharshad777@gmail.com ↗
        </motion.a>

        <div className="flex flex-wrap gap-4">
          <motion.a
            href="https://www.linkedin.com/in/mehria-arshad-0a781b419/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[#777770] transition-colors duration-200 hover:text-[#171716] hover:underline"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            LinkedIn ↗
          </motion.a>

          <motion.a
            href="https://github.com/mehriaarshad"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[#777770] transition-colors duration-200 hover:text-[#171716] hover:underline"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            GitHub ↗
          </motion.a>
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="text-sm text-[#777770]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: easing }}
      >
        Built with creativity &amp; curiosity.
      </motion.p>

      {/* Back to top */}
      <motion.div
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.25, ease: easing }}
      >
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-1 text-sm font-semibold hover:underline"
        >
          Back to top
          <motion.span
            className="inline-block"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: easing }}
          >
            ↑
          </motion.span>
        </Link>
      </motion.div>
    </motion.footer>
  );
}
