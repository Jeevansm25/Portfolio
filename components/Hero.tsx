import Hero3D from './Hero3D'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <Hero3D />
      <div className="px-6 mx-auto max-w-7xl z-10">
        <div className="max-w-2xl">
          <h1 className="text-6xl text-gradient font-bold tracking-tight sm:text-7xl md:text-8xl mb-6">
           Jeevan S M
            <span className="text-gradient">.</span>
          </h1>
          <p className="mt-6 text-xl text-zinc-400 mb-8">
            Crafting digital experiences with modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              Contact Me
            </a> */}
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-700 px-8 text-sm font-medium transition-colors hover:bg-zinc-900"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

