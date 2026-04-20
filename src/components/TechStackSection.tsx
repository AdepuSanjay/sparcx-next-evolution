import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiCloudinary,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiRedis,
  SiGraphql,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-foreground" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-[#68A063]" },
  { name: "Express", icon: <SiExpress />, color: "text-foreground" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-[#4DB33D]" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#336791]" },
  { name: "Django", icon: <SiDjango />, color: "text-[#092E20]" },
  { name: "Python", icon: <FaPython />, color: "text-[#3776AB]" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#38BDF8]" },
  { name: "Vite", icon: <SiVite />, color: "text-[#646CFF]" },
  { name: "Docker", icon: <FaDocker />, color: "text-[#2496ED]" },
  { name: "AWS", icon: <FaAws />, color: "text-[#FF9900]" },
  { name: "Redis", icon: <SiRedis />, color: "text-[#DC382D]" },
  { name: "GraphQL", icon: <SiGraphql />, color: "text-[#E10098]" },
  { name: "Git", icon: <FaGitAlt />, color: "text-[#F05032]" },
  { name: "Cloudinary", icon: <SiCloudinary />, color: "text-[#F38020]" },
];

const categories = ["Frontend", "Backend", "Database", "Framework", "Cloud Services", "DevOps"];

const TechStackSection = () => {
  const loop = [...technologies, ...technologies];

  return (
    <section className="relative py-24 bg-secondary/30 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            ⚡ Technology Stack
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            Powered by{" "}
            <span className="text-foreground">Modern Technologies</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage the latest and most reliable technologies to build fast,
            scalable, and secure applications that grow with your business.
          </p>
        </motion.div>

        {/* Categories chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 + idx * 0.05 }}
              whileHover={{ y: -2 }}
              className="px-4 py-2 bg-card border rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-card transition-all cursor-pointer"
            >
              {category}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary/30 via-secondary/20 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary/30 via-secondary/20 to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-6 px-4 py-4">
          {loop.map((tech, i) => (
            <div
              key={`row1-${tech.name}-${i}`}
              className="group flex items-center gap-3 shrink-0 px-6 py-4 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              title={tech.name}
            >
              <span className={`${tech.color} text-2xl md:text-3xl group-hover:scale-110 transition-transform`}>
                {tech.icon}
              </span>
              <span className="text-sm md:text-base font-semibold text-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Marquee Row 2 (reverse) */}
      <motion.div
        className="relative mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary/30 via-secondary/20 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary/30 via-secondary/20 to-transparent z-10" />

        <div className="flex w-max animate-marquee-reverse gap-6 px-4 py-4">
          {loop.map((tech, i) => (
            <div
              key={`row2-${tech.name}-${i}`}
              className="group flex items-center gap-3 shrink-0 px-6 py-4 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              title={tech.name}
            >
              <span className={`${tech.color} text-2xl md:text-3xl group-hover:scale-110 transition-transform`}>
                {tech.icon}
              </span>
              <span className="text-sm md:text-base font-semibold text-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStackSection;
