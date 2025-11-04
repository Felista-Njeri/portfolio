import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "njeerikamau2@gmail.com",
      href: "mailto:njeerikamau2@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 712345678",
      href: "tel:+254712345678",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.error("Message failed to send. Please use my email.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 animate-fade-in text-center">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4">
              LET'S CONNECT
            </h2>
            <div className="text-3xl mb-6">✦</div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, innovative projects, and ways we can collaborate to bring your ideas to life. Let's build something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-6">
                  Get in Touch
                </h3>
              </div>

              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="mb-4 flex items-start gap-4 p-6 hover:scale-105 rounded-lg border border-gray-500 hover:border-foreground transition-all duration-300">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-md flex items-center justify-center flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.label}</h4>
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a key={info.label} href={info.href}>
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
              {/* Social Links */}
            <div className="rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg text-foreground font-semibold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/felista-njeri" target="_blank" className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center hover:border-foreground">
                  <Linkedin className="text-white"/>
                </a>
                <a href="https://x.com/njerinjeri__" target="_blank" className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center hover:border-foreground">
                  <Twitter className="text-white"/>
                </a>
                <a href="https://github.com/Felista-Njeri" target="_blank" className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center hover:border-foreground">
                  <Github className="text-white" size={22}/>
                </a>
              </div>
            </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="border border-gray-600 focus:border-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-medium">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-24 pt-8 border-t border-border text-center animate-fade-in">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Felista Njeri. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
