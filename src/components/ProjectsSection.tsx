import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Smartphone, Database, Zap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online shopping platform with real-time inventory management and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Application",
      icon: Globe
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team communication features.",
      technologies: ["TypeScript", "React", "PostgreSQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Productivity",
      icon: Zap
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction tracking.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile App",
      icon: Smartphone
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "Comprehensive analytics platform for business intelligence with interactive charts and reporting.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Analytics",
      icon: Database
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
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:text-primary">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
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
              <Button variant="corporate" size="lg" className="hover-glow">
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
