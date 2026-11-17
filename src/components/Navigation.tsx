import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
  };

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center items-center px-3 sm:px-6">
      <div
        ref={menuRef}
        className={`w-full max-w-4xl rounded-[26px] md:rounded-full border transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white/95 dark:bg-card/95 backdrop-blur-xl border-black/10 dark:border-white/10 shadow-lg shadow-black/5"
            : "bg-white/90 dark:bg-card/90 backdrop-blur-md border-black/5 dark:border-white/5 shadow-md"
        }`}
      >
        <div className="flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
            className="flex items-center gap-2 pl-1 group"
          >
            <img
              src="https://res.cloudinary.com/dppiuypop/image/upload/v1757152646/uploads/c8zrmasykfalqcqhahwc.png"
              alt="SPARCX Logo"
              className="h-7 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Nav Links (CodeDale Pill Style) */}
          <nav className="hidden md:flex items-center gap-1.5 text-sm font-medium text-foreground/80">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="relative px-4 py-1.5 rounded-full text-xs lg:text-sm text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA (CodeDale Pill Button) */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary hover:bg-primary-light text-primary-foreground px-5 py-2 text-xs sm:text-sm font-semibold shadow-sm hover:shadow-elegant hover:scale-102 transition-all duration-300"
            >
              <span>Work With Us</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-black/5 dark:bg-white/5 text-foreground hover:bg-black/10 transition-colors"
            >
              <div className="w-4 h-3.5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden md:hidden px-4 pb-4 pt-2 border-t border-border/50"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="px-3.5 py-2 rounded-xl text-sm font-medium text-foreground/85 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="mt-2 text-center rounded-xl bg-primary text-primary-foreground py-2.5 text-sm font-semibold shadow-sm"
                >
                  Work With Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;
