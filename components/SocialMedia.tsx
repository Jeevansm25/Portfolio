import Image from "next/image";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "/github.svg" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "/linkedin.svg" },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: "/twitter.svg" },
];

export default function SocialMedia() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">Connect with Me</h2>
      <div className="flex space-x-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Image src={link.icon} alt={link.name} width={32} height={32} />
          </a>
        ))}
      </div>
    </section>
  );
}

