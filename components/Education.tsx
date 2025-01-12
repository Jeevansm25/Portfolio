import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    period: "2022 - 2026",
    degree: "Bachelor of Technology in Computer Science and Engineering ",
    institution: "Indian Institute of Information Technology , Dharwad",
   
  },
  {
    period: "2020 - 2022",
    degree: "Pre-University Education",
    institution: "St.Johns College , Davanagere",
  },
];

export default function Education() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Education
        </h2>
        <p className="text-zinc-400">
          My academic background and qualifications
        </p>
      </div>
      <Card className="max-w-2xl mx-auto bg-zinc-900 border-zinc-800">
        <CardContent className="p-6">
          <div className="space-y-8">
            {educationData.map((education, index) => (
              <div
                key={index}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-zinc-700 after:absolute after:left-1 after:top-3 after:h-full after:w-[1px] after:bg-zinc-800 last:after:hidden"
              >
                <div className="space-y-1">
                  <span className="text-sm text-zinc-400">{education.period}</span>
                  <h3 className="text-xl font-semibold">{education.degree}</h3>
                  <p className="text-zinc-400">{education.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

