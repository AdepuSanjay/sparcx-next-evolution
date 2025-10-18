import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, ExternalLink, Mail } from "lucide-react";
import { useState, useEffect } from "react";

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
    name: "Katikola Karthik",
    role: "Lead Full Stack Developer",
    bio: "An experienced full stack developer known for building end-to-end web solutions with efficiency and scalability. His strong foundation in both frontend frameworks and backend systems enables him to architect and deliver enterprise-grade applications.",
    image: "https://res.cloudinary.com/dppiuypop/image/upload/v1756993459/uploads/effqkv70nopivmbfl0vg.jpg",
    linkedin: "https://www.linkedin.com/in/katikola-karthik?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    portfolio: "https://github.com/katikolakarthik",
    email: "katikolakarthik@gmail.com",
    expertise: ["MERN stack","Next.js","flask"]
  },
  {
    name: "Byagari Vinay",
    role: "Full Stack Developer",
    bio: "A passionate full stack developer skilled in creating responsive user interfaces and dynamic web applications. With experience in Django and core web technologies, he brings user-focused solutions to life with precision and adaptability.",
    image: "https://res.cloudinary.com/dppiuypop/image/upload/v1756993400/uploads/ws7lxqgz4hlsoetj30cn.jpg",
    linkedin: "https://www.linkedin.com/in/vinay-byagari-77075a34b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    portfolio: "https://vinaybyagari-portfolio.vercel.app/",
    email: "vinaybyagari07@gmail.com",
    expertise: ["Django", "React", "JavaScript", "Web Technologies"]
  },
  {
    name: "Chamakuri Naveen",
    role: "Frontend Developer",
    bio: "A detail-oriented frontend developer specializing in crafting engaging, high-performance user interfaces using modern frameworks like React. He combines creativity with technical proficiency to deliver smooth and responsive web experiences.",
    image: "https://res.cloudinary.com/dppiuypop/image/upload/v1756993494/uploads/g8uv2ppwfh1cj8cdiwa1.jpg",
    linkedin: "",
    portfolio: "",
    email: "chamakurinaveen11@gmail.com",
    expertise: ["React", "JavaScript", "CSS", "UI/UX"]
  },
  {
    name: "Adepu Sanjay",
    role: "Full Stack Developer",
    bio: "A dedicated full stack developer with expertise in both frontend and backend technologies. With strong command over the MERN stack and React Native, FastAPI, he builds robust, scalable web applications with a focus on clean architecture and seamless user experience.",
    image: "https://res.cloudinary.com/dppiuypop/image/upload/v1757335199/uploads/cqzyzpmx46sitzvk1zxl.jpg",
    linkedin: "https://www.linkedin.com/in/adepu-sanjay-3746662a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    portfolio: "https://sanjayadepu-ax58.vercel.app",
    email: "adepusanjay812@gmail.com",
    expertise: ["MERN Stack", "Next.Js", "FastAPI"]
  }
];

const TeamSection = () => {
  const [shuffledMembers, setShuffledMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const shuffled = [...teamMembers].sort(() => Math.random() - 0.5);
    setShuffledMembers(shuffled);
  }, []);

  return (
    <>
      <style jsx global>{`
        /* Anti-screenshot and screen recording protection */
        #team {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: transparent;
        }

        /* Prevent image dragging and context menu */
        #team img {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
          pointer-events: none;
        }

        /* Disable right-click context menu */
        #team {
          context-menu: none;
        }

        /* Protection against screen recording/capture */
        #team {
          -webkit-filter: none !important;
          filter: none !important;
        }

        /* Additional protection layers */
        #team * {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Prevent text selection */
        #team h1, #team h2, #team h3, #team p, #team span {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Image protection with overlay */
        .protected-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }

        .protected-image-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          z-index: 2;
          pointer-events: none;
          border-radius: 50%;
        }

        .protected-image {
          position: relative;
          z-index: 1;
          display: block;
          margin: 0 auto;
        }

        /* Center the image container */
        .image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        /* Blur protection for screen recording */
        @media screen {
          #team {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        /* Print protection */
        @media print {
          #team {
            display: none !important;
          }
        }

        /* Additional security measures */
        .team-content {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>

      <section id="team" className="py-24 bg-secondary/30 team-content">
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
                  {/* Protected Profile Image - NOW PROPERLY CENTERED */}
                  <div className="relative mb-6">
                    <div className="image-wrapper">
                      <div className="w-[145px] h-[145px] rounded-full overflow-hidden ring-4 ring-border transition-all protected-image-container">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover protected-image"
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                        />
                      </div>
                    </div>
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
                    {member.linkedin && (
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
                    )}
                    {member.portfolio && (
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
                    )}
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
    </>
  );
};

export default TeamSection;