import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Carhub from "@/public/Carshub.png"
import HooBank from "@/public/HooBank.png"
import Todo from "@/public/Todo.png"
const projects = [
  {
    title: "CarsHub",
    description: "Developed with Next.js and leveraging its server-side rendering capabilities, the Car Showcase website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience.",
    image: Carhub,
    link: "#",
    
  },
  {
    title: "Todo Application",
    description: "ToDo Application: A modern task management app built with Next.js 14, enabling users to organize tasks efficiently. Features include user authentication, task creation/editing, filtering, URL-based sharing, comments, and GitHub repository integration.ech Stack: Built using Next.js 14, Prisma ORM with NeonDB, shadcn-ui, Tailwind CSS, react-hook-form, Zod, and TypeScript, and deployed on Vercel for seamless access.",
    image: Todo,
    link: "https://todo-indol-five.vercel.app/",
  },
  {
    title: "HooBank",
    description: "E-commerce platform with payment integration",
    image: HooBank,
    link: "https://hoo-bank-pi-nine.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Featured Projects
        </h2>
        <p className="text-zinc-400">
          Here are some of my recent works and experiments
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Card key={i} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
            <CardHeader className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              <CardDescription className="text-zinc-400">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

