import { Linkedin, ExternalLink, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
          
            
      
            <p className="text-muted-foreground leading-relaxed">
              Building modern, scalable web solutions with precision and expertise. 
              Your trusted partner for full-stack development.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/sparcx-solutions"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@sparcx.in"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://sparcx.in"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Website"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Full Stack Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">API Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Cloud Deployment</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">UI/UX Integration</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Technologies</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>MongoDB & PostgreSQL</li>
              <li>Django & Python</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>hello@sparcx.in</p>
              <p>+1 (234) 567-8900</p>
              <p className="text-sm">
                Monday - Friday<br />
                9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Sparcx. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-primary mx-1" /> by the SparcX team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



