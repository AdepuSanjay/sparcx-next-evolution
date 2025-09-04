"use client"; // (for Next.js app dir, remove if Vite)

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      project: (form.elements.namedItem("project") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://adepu-sanjay-svf9.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus("❌ Failed to send message: " + result.error);
      }
    } catch (err) {
      setStatus("❌ Error sending message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <Card className="p-8 shadow-card">
          <h3 className="text-xl md:text-2xl font-bold mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <Input id="firstName" name="firstName" required placeholder="John" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <Input id="lastName" name="lastName" required placeholder="Doe" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input id="email" name="email" type="email" required placeholder="john@example.com" />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company (Optional)
              </label>
              <Input id="company" name="company" placeholder="Your Company" />
            </div>

            <div>
              <label htmlFor="project" className="block text-sm font-medium mb-2">
                Project Type
              </label>
              <select
                id="project"
                name="project"
                className="w-full px-3 py-2 border rounded-md bg-background"
                required
              >
                <option>Web Application</option>
                <option>E-commerce Platform</option>
                <option>SaaS Product</option>
                <option>API Development</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Project Details
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your project..."
              />
            </div>

            <Button type="submit" disabled={loading} variant="corporate" size="lg" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm font-medium">{status}</p>
          )}
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
