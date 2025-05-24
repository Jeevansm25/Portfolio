import { Card, CardContent } from "@/components/ui/card";

const skills = [
    {
      category: "Programming Languages",
      technologies: ["C", "Java", "JavaScript", "TypeScript"],
    },
    {
      category: "Databases",
      technologies: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Frontend Development",
      technologies: ["HTML", "CSS", "Tailwind CSS", "ReactJS", "NextJS"],
    },
    {
      category: "Backend Development",
      technologies: ["NodeJS", "ExpressJS"],
    },
    {
      category: "Frameworks and Tools",
      technologies: ["Turborepo", "Git", "GitHub"],
    },
    {
      category: "DevOps and Cloud",
      technologies: ["Docker", "Kubernetes", "AWS", "Cloudflare"],
    },
    {
      category: "System Design and Architecture",
      technologies: [
        "WebSockets",
        "Rate Limiting",
        "Load Balancing"
      ],
    },
    {
      category: "Monitoring and Logging",
      technologies: ["New Relic", "Prometheus", "Grafana"],
    },
    {
      category: "Core Computer Science Concepts",
      technologies: ["DBMS", "OOPS", "Computer Networks", "Operating Systems"],
    },
    

  ];
  
export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Technical Skills
        </h2>
        <p className="text-zinc-400">
          Technologies and tools I work with
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card key={skill.category} className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

