import { Card } from "@/components/ui/card";

interface Technology {
  name: string;
  category: string;
  description: string;
  color: string;
}

const technologies: Technology[] = [
  {
    name: "React.js",
    category: "Frontend",
    description: "Modern UI library for building interactive user interfaces",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Next.js",
    category: "Framework",
    description: "Full-stack React framework with server-side rendering",
    color: "from-gray-800 to-gray-600"
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "JavaScript runtime for building scalable server applications",
    color: "from-green-600 to-green-400"
  },
  {
    name: "Express",
    category: "Backend",
    description: "Fast, minimalist web framework for Node.js applications",
    color: "from-gray-700 to-gray-500"
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL database for modern applications with flexible schemas",
    color: "from-green-700 to-green-500"
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Advanced relational database with powerful features",
    color: "from-blue-700 to-blue-500"
  },
  {
    name: "Django",
    category: "Backend",
    description: "High-level Python web framework for rapid development",
    color: "from-green-800 to-green-600"
  },
  {
    name: "Cloudinary",
    category: "Cloud Services",
    description: "Cloud-based media management and optimization platform",
    color: "from-orange-500 to-yellow-500"
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powered by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                {/* Tech Icon/Logo Area */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tech.color} mb-4 flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
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

        {/* Development Process */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center mb-8">Our Development Approach</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold mb-2">Planning & Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Understanding requirements and choosing the right tech stack
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-foreground font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold mb-2">Design & Architecture</h4>
              <p className="text-sm text-muted-foreground">
                Creating scalable architecture and user-centered designs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold mb-2">Development & Testing</h4>
              <p className="text-sm text-muted-foreground">
                Agile development with continuous testing and code reviews
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-foreground font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold mb-2">Deployment & Support</h4>
              <p className="text-sm text-muted-foreground">
                Production deployment with ongoing maintenance and support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;