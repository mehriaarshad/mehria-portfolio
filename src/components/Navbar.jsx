
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.055,
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
    y: -5,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-0 z-50 flex min-h-[82px] items-center justify-between border-b border-[#17171622] bg-[#f5f4ef]/90 px-[6vw] backdrop-blur-xl"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 font-display text-[19px] font-bold"
        >
          <span className="h-[35px] w-[35px] overflow-hidden rounded-full">
            <img
              src={`${import.meta.env.BASE_URL}images/profile.png`}
              alt="Mehria Arshad"
              className="h-full w-full object-cover"
            />
          </span>
          Mehria.
        </Link>
      </motion.div>

      {/* Mobile menu button */}
      <motion.button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        whileTap={{ scale: 0.92 }}
        className="flex flex-col gap-[5px] border-0 bg-transparent p-2 md:hidden"
      >
        <motion.span
          animate={
            menuOpen
              ? { rotate: 45, y: 3.5 }
              : { rotate: 0, y: 0 }
          }
          transition={{ duration: 0.25 }}
          className="h-0.5 w-6 bg-[#171716]"
        />
        <motion.span
          animate={
            menuOpen
              ? { rotate: -45, y: -3.5 }
              : { rotate: 0, y: 0 }
          }
          transition={{ duration: 0.25 }}
          className="h-0.5 w-6 bg-[#171716]"
        />
      </motion.button>

      {/* Navigation */}
      <nav className="hidden md:block">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.25,
                staggerChildren: 0.08,
              },
            },
          }}
          className="flex items-center gap-[35px]"
        >
          {links.map((link) => (
            <motion.div
              key={link.to}
              variants={linkVariants}
              whileHover={{ y: -2 }}
            >
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-[13px] font-semibold transition-colors duration-300 hover:text-[#171716] ${
                    isActive ? "text-[#171716]" : "text-[#777770]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      {/* Contact button */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link
          to="/contact"
          className="hidden rounded-full border border-[#171716] px-4 py-[11px] text-xs font-bold transition-colors duration-300 hover:bg-[#171716] hover:text-[#c9f36b] md:inline-flex"
        >
          Let&apos;s talk ↗
        </Link>
      </motion.div>

      {/* Animated mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="absolute left-0 right-0 top-[81px] flex origin-top flex-col gap-5 border-b border-[#17171622] bg-[#f5f4ef] px-[6vw] py-6 shadow-lg md:hidden"
          >
            {links.map((link) => (
              <motion.div
                key={link.to}
                variants={linkVariants}
                whileHover={{ x: 4 }}
              >
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block text-[13px] font-semibold transition-colors duration-300 hover:text-[#171716] ${
                      isActive ? "text-[#171716]" : "text-[#777770]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.div variants={linkVariants}>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="inline-flex rounded-full border border-[#171716] px-4 py-3 text-xs font-bold transition-colors duration-300 hover:bg-[#171716] hover:text-[#c9f36b]"
              >
                Let&apos;s talk ↗
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
