import { Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Jeevansm25",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jeevansm25",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/jeevansm_25",
    icon: Twitter,
  },
];

export default function Social() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Connect With Me
        </h2>
        <p className="text-zinc-400">
          Find me on these platforms
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="flex items-center justify-center p-6">
                <social.icon className="w-8 h-8 mr-2" />
                <span className="text-lg">{social.name}</span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}

