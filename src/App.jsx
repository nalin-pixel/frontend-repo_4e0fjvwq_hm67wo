import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0612] text-white">
      {/* Global background gradients for depth */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(79,70,229,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_90%_20%,rgba(251,146,60,0.12),transparent_60%)]" />
      </div>

      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-500 to-fuchsia-400 shadow-[0_0_25px_rgba(168,85,247,0.6)]" />
          <span className="text-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#eee,#fff,#c3b5ff)]">
            Whispr
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#signup" className="hover:text-white">Sign Up</a>
          <a href="#" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md hover:bg-white/10">Download</a>
        </nav>
      </header>

      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="relative mx-auto max-w-6xl px-6 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Whispr. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
