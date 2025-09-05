import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Smartphone, Database, Zap } from "lucide-react";

const ProjectsSection = () => {


const projects = [
  {
    id: 1,
    title: "Healthcare – Textas Healthcare",
    description: "Home and hospice care delivered with compassion—providing personalized nursing, rehabilitation, and post-surgery support in the comfort of patients’ homes.",
    technologies: ["Next.js"],
    image: "https://res.cloudinary.com/dppiuypop/image/upload/v1757053426/uploads/c8thdon5e5fbdjg3ddnk.png",
    liveUrl: "https://textashealthcare.in",
    githubUrl: "#",
    category: "Healthcare",
    icon: Globe
  },
  {
    id: 2,
    title: "Zebotic Projects (Portfolio & Final Year Project Mentorship)",
    description: "Engineering-focused platform offering 1-on-1 mentorship for B.Tech final year projects—supporting students from topic selection to viva, boasting a 100% working project guarantee.",
    technologies: ["Next.js"],
    image: "https://res.cloudinary.com/dppiuypop/image/upload/v1757053524/uploads/xblegab3i6wsqdcw39yv.png",
    liveUrl: "https://zeboticprojects.in",
    githubUrl: "#",
    category: "Portfolio / Mentorship",
    icon: Globe
  },
  {
    id: 3,
    title: "Trading Application – AlgoDukaan",
    description: "An algorithmic trading platform providing tools to build, manage, and monetize trading strategies through an intuitive marketplace.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1556827634-0e9a857c7c59?w=600&h=400&fit=crop",
    liveUrl: "https://algodukaan.store",
    githubUrl: "#",
    category: "Trading / FinTech",
    icon: Globe
  },
  {
    id: 4,
    title: "AI Assistant – StudyMate",
    description: "A smart AI study buddy tailored for IGCSE students—powered by Microsoft, it offers revision support, flexible study plans, multilingual assistance (English, Malay, Chinese), and 24/7 learning help.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1584697964154-d33ac105f0a0?w=600&h=400&fit=crop",
    liveUrl: "https://studymate-swart.vercel.app",
    githubUrl: "#",
    category: "AI / Education",
    icon: Globe
  },
  {
    id: 5,
    title: "Attendance Portal",
    description: "A portal for managing attendance built with Django and SQL (details beyond the tech stack were limited).",
    technologies:  ["React", "Node.js", "Express", "MongoDB"] ,
    image: "https://images.unsplash.com/photo-1581093588401-50e28910654f?w=600&h=400&fit=crop",
    liveUrl: "https://tkrcet.vercel.app",
    githubUrl: "#",
    category: "Education / Admin",
    icon: Globe
  },
  {
    id: 6,
    title: "E-Commerce – Swetha Collections",
    description: "An online boutique offering a curated range of Indian ethnic wear—chudidhars, lehengas, saris, and more—combining traditional craftsmanship with modern comfort and style.",
    technologies:["Django", "SQL"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop",
    liveUrl: "https://swethacollections.shop",
    githubUrl: "#",
    category: "E-Commerce",
    icon: Globe
  }
];


  
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-muted/20 to-background animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-foreground font-medium text-sm mb-4">
              Our Portfolio
            </div>
            <h2 className="mb-6">
              Featured{" "}
              <span className="text-primary">
                Projects
              </span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Explore our latest work showcasing innovative solutions across web applications, 
              mobile apps, and enterprise systems. Each project represents our commitment to 
              excellence and cutting-edge technology.
            </p>
          </div>

          {/* Stats Section */}
          

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-card border border-border rounded-2xl overflow-hidden hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/90 backdrop-blur-sm p-2 rounded-lg">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  {/* Project Links */}
<div className="flex gap-3">
  <a 
    href={project.liveUrl} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button 
      variant="outline" 
      size="sm" 
      className="group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary"
    >
      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
      Live Demo
    </Button>
  </a>
</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <h3 className="text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your ideas and bring them to life with our expertise in modern web development and innovative solutions.
              </p>
              <a href="#contact">
                <Button variant="corporate" size="lg" className="hover-glow">
                  Start Your Project
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
