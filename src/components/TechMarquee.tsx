import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiRedis,
  SiGraphql,
} from "react-icons/si";

const logos = [
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
];

const TechMarquee = () => {
  // duplicate list for seamless loop
  const loop = [...logos, ...logos];

  return (
    <section
      aria-label="Technologies we work with"
      className="py-10 border-y bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground">
          Trusted technologies we build with
        </p>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-12 px-6">
          {loop.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-3 shrink-0 opacity-80 hover:opacity-100 transition-opacity"
              title={tech.name}
            >
              <span className={`${tech.color} text-3xl md:text-4xl`}>
                {tech.icon}
              </span>
              <span className="text-sm md:text-base font-medium text-foreground/80 hidden sm:inline">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
