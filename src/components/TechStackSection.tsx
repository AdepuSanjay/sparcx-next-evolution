import { Card } from "@/components/ui/card";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiDjango, SiCloudinary } from "react-icons/si";

interface Technology {
  name: string;
  category: string;
  description: string;
  color: string;
  icon: JSX.Element;
}

const technologies: Technology[] = [
  {
    name: "React.js",
    category: "Frontend",
    description: "Modern UI library for building interactive user interfaces",
    color: "text-[#61DAFB]",
    icon: <FaReact className="w-8 h-8" />
  },
  {
    name: "Next.js",
    category: "Framework",
    description: "Full-stack React framework with server-side rendering",
    color: "text-black",
    icon: <SiNextdotjs className="w-8 h-8" />
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "JavaScript runtime for building scalable server applications",
    color: "text-[#68A063]",
    icon: <FaNodeJs className="w-8 h-8" />
  },
  {
    name: "Express",
    category: "Backend",
    description: "Fast, minimalist web framework for Node.js applications",
    color: "text-gray-700",
    icon: <SiExpress className="w-8 h-8" />
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL database for modern applications with flexible schemas",
    color: "text-[#4DB33D]",
    icon: <SiMongodb className="w-8 h-8" />
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Advanced relational database with powerful features",
    color: "text-[#336791]",
    icon: <SiPostgresql className="w-8 h-8" />
  },
  {
    name: "Django",
    category: "Backend",
    description: "High-level Python web framework for rapid development",
    color: "text-[#092E20]",
    icon: <SiDjango className="w-8 h-8" />
  },
  {
    name: "Cloudinary",
    category: "Cloud Services",
    description: "Cloud-based media management and optimization platform",
    color: "text-[#F38020]",
    icon: <SiCloudinary className="w-8 h-8" />
  }
];

const categories = ["Frontend", "Backend", "Database", "Framework", "Cloud Services"];

const TechStackSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            ⚡ Technology Stack
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            Powered by{" "}
            <span className="text-foreground">
              Modern Technologies
            </span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage the latest and most reliable technologies to build fast, 
            scalable, and secure applications that grow with your business.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category}
              className="px-4 py-2 bg-card border rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/20 transition-colors cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech) => (
            <Card key={tech.name} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                {/* Tech Icon */}
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <span className={`${tech.color}`}>{tech.icon}</span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
