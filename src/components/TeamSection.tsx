import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, ExternalLink, Mail, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0,
    y: 50,
    rotateY: -15
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    }
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    y: -50,
    rotateY: 15,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

const dotVariants = {
  inactive: {
    scale: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  active: {
    scale: 1.3,
    backgroundColor: "hsl(var(--accent))",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.2,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    transition: {
      duration: 0.2
    }
  }
};

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledMembers, setShuffledMembers] = useState<TeamMember[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const shuffled = [...teamMembers].sort(() => Math.random() - 0.5);
    setShuffledMembers(shuffled);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying || shuffledMembers.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledMembers.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, shuffledMembers.length]);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % shuffledMembers.length);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + shuffledMembers.length) % shuffledMembers.length);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const goToMember = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

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

      <motion.section 
        id="team" 
        className="py-24 bg-secondary/30 team-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👥 Meet Our Team
            </motion.div>
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Experts Behind{" "}
              <motion.span 
                className="text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Your Success
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our diverse team of full stack developers, designers, and architects 
              work together to deliver exceptional digital solutions.
            </motion.p>
          </motion.div>

          {/* Team Carousel */}
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Navigation Controls */}
            <motion.div 
              className="flex justify-center items-center mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevMember}
                  className="mr-4 h-10 w-10 p-0 hover:bg-accent/10"
                  aria-label="Previous team member"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </motion.div>
              
              <div className="flex space-x-2">
                {shuffledMembers.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToMember(index)}
                    className="w-3 h-3 rounded-full"
                    variants={dotVariants}
                    animate={index === currentIndex ? "active" : "inactive"}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to team member ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextMember}
                  className="ml-4 h-10 w-10 p-0 hover:bg-accent/10"
                  aria-label="Next team member"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </motion.div>
              
              {/* Play/Pause Button */}
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="ml-4 h-10 w-10 p-0 hover:bg-accent/10"
                  aria-label={isAutoPlaying ? "Pause auto-rotation" : "Start auto-rotation"}
                >
                  <motion.div
                    key={isAutoPlaying ? "pause" : "play"}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Current Team Member Card */}
            <AnimatePresence mode="wait">
              {shuffledMembers.length > 0 && (
                <motion.div 
                  key={currentIndex}
                  className="flex justify-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={cardVariants}
                >
                  <motion.div
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card className="group hover:shadow-elegant transition-all duration-300 w-full max-w-md">
                      <div className="p-6">
                        {/* Protected Profile Image */}
                        <motion.div 
                          className="relative mb-6"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                          <div className="image-wrapper">
                            <motion.div 
                              className="w-[145px] h-[145px] rounded-full overflow-hidden ring-4 ring-border transition-all protected-image-container mx-auto"
                              whileHover={{ scale: 1.05, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <img
                                src={shuffledMembers[currentIndex].image}
                                alt={shuffledMembers[currentIndex].name}
                                className="w-full h-full object-cover protected-image"
                                onContextMenu={(e) => e.preventDefault()}
                                onDragStart={(e) => e.preventDefault()}
                              />
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Member Info */}
                        <motion.div 
                          className="text-center mb-4"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <motion.h3 
                            className="text-xl font-bold mb-1"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                          >
                            {shuffledMembers[currentIndex].name}
                          </motion.h3>
                          <motion.p 
                            className="text-accent font-medium mb-2"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                          >
                            {shuffledMembers[currentIndex].role}
                          </motion.p>
                          <motion.p 
                            className="text-sm text-muted-foreground leading-relaxed"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                          >
                            {shuffledMembers[currentIndex].bio}
                          </motion.p>
                        </motion.div>

                        {/* Expertise Tags */}
                        <motion.div 
                          className="flex flex-wrap gap-2 mb-6 justify-center"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          {shuffledMembers[currentIndex].expertise.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: 0.8 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                              whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: "hsl(var(--primary))",
                                color: "white",
                                transition: { duration: 0.2 }
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div 
                          className="flex justify-center space-x-2"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                        >
                          {shuffledMembers[currentIndex].linkedin && (
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-10 w-10 p-0 hover:bg-accent/10 hover:text-accent"
                                asChild
                              >
                                <a
                                  href={shuffledMembers[currentIndex].linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${shuffledMembers[currentIndex].name}'s LinkedIn`}
                                >
                                  <Linkedin className="h-4 w-4" />
                                </a>
                              </Button>
                            </motion.div>
                          )}
                          {shuffledMembers[currentIndex].portfolio && (
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-10 w-10 p-0 hover:bg-primary/10 hover:text-primary"
                                asChild
                              >
                                <a
                                  href={shuffledMembers[currentIndex].portfolio}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${shuffledMembers[currentIndex].name}'s Portfolio`}
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              </Button>
                            </motion.div>
                          )}
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-10 w-10 p-0 hover:bg-accent/10 hover:text-accent"
                              asChild
                            >
                              <a
                                href={`mailto:${shuffledMembers[currentIndex].email}`}
                                aria-label={`Email ${shuffledMembers[currentIndex].name}`}
                              >
                                <Mail className="h-4 w-4" />
                              </a>
                            </Button>
                          </motion.div>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Member Counter */}
            <motion.div 
              className="text-center mt-6 text-sm text-muted-foreground"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <motion.span
                key={currentIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {currentIndex + 1} of {shuffledMembers.length} team members
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default TeamSection;