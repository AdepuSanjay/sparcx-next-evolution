import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const PHONE = "918019792661";
const MESSAGE = "Hi SparcX! I'd like to discuss a project.";

const WhatsAppButton = () => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group"
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-pulse" />

      {/* Main button */}
      <motion.div
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-elegant"
        animate={{ rotate: [0, -8, 8, -8, 0] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "easeInOut",
        }}
      >
        {/* Official WhatsApp glyph */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 md:w-8 md:h-8 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.703.244-1.062 0-.703-.961-.989-1.504-.989zm-2.722 7.677c-1.92 0-3.81-.587-5.388-1.65l-3.762.987 1.005-3.66c-1.18-1.65-1.81-3.62-1.81-5.66 0-5.43 4.42-9.85 9.857-9.85 5.43 0 9.85 4.42 9.85 9.85.014 5.434-4.4 9.984-9.752 9.984zm0-21.71C9.857 3.171 4.43 8.6 4.43 15.272c0 2.135.587 4.213 1.704 6.04L4 26l4.728-1.234a12.05 12.05 0 0 0 7.66 2.65c11.96 0 17.99-14.484 9.51-22.96A12.043 12.043 0 0 0 16.39 3.171z" />
        </svg>
      </motion.div>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-card hidden md:block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
