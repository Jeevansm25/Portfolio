import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white dark:bg-black shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
        <Image
          src="/your-logo.svg"
          alt="Your Logo"
          width={40}
          height={40}
          priority
        />
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li><a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

