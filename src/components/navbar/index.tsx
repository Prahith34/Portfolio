"use client";

import { Container } from "@/components/container";
import avatar from "@/assets/images/avatar.png";
import { NavLink } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const navItems = [
    { id: 1, title: "About", href: "/about" },
    { id: 2, title: "Projects", href: "/projects" },
    { id: 3, title: "Experience", href: "/#experience" },
    { id: 4, title: "Contact", href: "/#contact" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest>20){ setScrolled(true); }else{ setScrolled(false); }
  });

  return (
    <div className="fixed top-0 inset-x-0 z-50 sm:px-6 lg:px-8">
        <Container>
            <motion.nav
                initial={false}
                animate={{
                boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
                backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
                width: scrolled ? "clamp(280px, 75%, 600px)" : "100%",
                borderRadius: scrolled ? "50px" : "0px",
                y: scrolled ? 10 : 0,
                }}
                transition={{
                duration:0.3, ease:"linear"
                }}
                style={{
                willChange: "transform,width,borderRadius",
                }}
                className="fixed top-0 inset-x-0 mx-auto z-50 flex items-center justify-between 
                         pl-2 pr-4 py-2
                        bg-white/80 dark:bg-neutral-900/80
                        max-w-4xl"
            >
                {/* Logo */}
                <NavLink to="/" className="shrink-0">
                <img
                    className="h-10 w-10 md:h-12 md:w-12"
                    src={avatar}
                    alt="avatar"
                />
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center">
                {navItems.map((item, idx) => (
                    <NavLink
                    key={item.id}
                    to={item.href}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    className={({ isActive }) =>
                        `relative text-sm px-4 py-2 rounded-md hover:text-white transition-colors duration-200
                        ${isActive ? "text-primary" : "text-neutral-600 dark:text-neutral-300"}`
                    }
                    >
                    {hovered === idx && (
                        <motion.span
                        layoutId="hover-bg"
                        className="absolute inset-0 rounded-full bg-neutral-800 dark:bg-neutral-800"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10 text-[15px]">{item.title}</span>
                    </NavLink>
                ))}
                </div>

                {/* Mobile Toggle */}
                <button
                className="md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                {/* Mobile Menu */}
                {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-full left-0 w-full mt-4 rounded-2xl 
                            bg-white dark:bg-neutral-900 shadow-lg p-4 md:hidden"
                >
                    {navItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm"
                    >
                        {item.title}
                    </NavLink>
                    ))}
                </motion.div>
                )}
            </motion.nav>
            </Container>
    </div>
  );
};