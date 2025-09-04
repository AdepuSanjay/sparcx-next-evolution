import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, ExternalLink, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  portfolio: string;
  email: string;
  expertise: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Katikola karthik",
    role: "Lead Full Stack Developer",
    bio: "Specialized in MERN stack with 5+ years of experience building scalable web applications and leading development teams.",
    image: "https://res.cloudinary.com/dppiuypop/image/upload/v1756993459/uploads/effqkv70nopivmbfl0vg.jpg",
    linkedin: "https://linkedin.com/in/alex-rodriguez-dev",
    portfolio: "https://alex-rodriguez.dev",
    email: "alex@sparcx.in",
    expertise: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    name: "Byagari vinay",
    role: "Frontend Architect",
    bio: "Expert in modern React ecosystems and UI/UX design with a passion for creating beautiful, accessible user interfaces.",
    image: "https://res.cloudinary.com/dppiuypop/image/upload/v1756993400/uploads/ws7lxqgz4hlsoetj30cn.jpg",
    linkedin: "https://linkedin.com/in/sarah-chen-frontend",
    portfolio: "https://sarah-chen.dev",
    email: "sarah@sparcx.in",
    expertise: ["React", "Next.js", "TypeScript", "Design Systems"]
  },
  {
    name: "Chamakuri Naveen",
    role: "Backend Engineer",
    bio: "Django and Node.js specialist focusing on building robust APIs, microservices, and cloud infrastructure solutions.",
    image: "https://res.cloudinary.com/dppiuypop/image/upload/v1756993494/uploads/g8uv2ppwfh1cj8cdiwa1.jpg",
    linkedin: "https://linkedin.com/in/michael-park-backend",
    portfolio: "https://michael-park.dev",
    email: "michael@sparcx.in",
    expertise: ["Django", "PostgreSQL", "Docker", "Cloud Architecture"]
  },
  {
    name: "Adepu Sanjay",
    role: "DevOps & Full Stack Developer",
    bio: "Full stack developer with expertise in deployment, CI/CD pipelines, and maintaining production-grade applications.",
    image:"https://res.cloudinary.com/dppiuypop/image/upload/v1756993559/uploads/tjz06st5imh5pmtzeekx.jpg",
    linkedin: "https://linkedin.com/in/priya-sharma-devops",
    portfolio: "https://priya-sharma.dev",
    email: "priya@sparcx.in",
    expertise: ["DevOps", "React", "Express", "Cloudinary"]
  }
];

const TeamSection = () => {
  // Randomize team members order on each render
  const [shuffledMembers, setShuffledMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
  const shuffled = [...teamMembers].sort(() => Math.random() - 0.5);
  setShuffledMembers(shuffled);
}, []);

  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            👥 Meet Our Team
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            The Experts Behind{" "}
            <span className="text-foreground">
              Your Success
            </span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of full stack developers, designers, and architects 
            work together to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shuffledMembers.map((member) => (
            <Card key={member.name} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="p-6">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-border group-hover:ring-foreground transition-all">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-card"></div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 p-0 hover:bg-accent/10 hover:text-accent"
                    asChild
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 p-0 hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s Portfolio`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 p-0 hover:bg-accent/10 hover:text-accent"
                    asChild
                  >
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
