import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0612]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0612]/30 to-[#0a0612]" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-72 blur-2xl" style={{ background: 'radial-gradient(60% 60% at 50% 100%, rgba(255,123,0,0.25) 0%, rgba(255,87,34,0.15) 35%, transparent 70%)' }} />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur-md">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-orange-400 shadow-[0_0_20px_4px_rgba(251,146,60,0.6)]" />
          New • Holographic Social Gifting
        </span>
        <h1 className="mb-4 text-4xl font-black tracking-tight text-transparent bg-clip-text bg-[conic-gradient(from_180deg_at_50%_50%,#cfc8ff_0%,#ffffff_20%,#d0baff_40%,#e7d4ff_55%,#ffffff_70%,#b8f3ff_85%,#cfc8ff_100%)] drop-shadow-[0_0_30px_rgba(255,255,255,0.25)] sm:text-6xl md:text-7xl">
          Whispr
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-white/70 sm:text-lg">
          Connect in whispers, gift in glows. A premium social space where holographic vibes meet real connections.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a href="#signup" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-orange-500 via-amber-400 to-orange-600 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_25px_6px_rgba(251,146,60,0.35)] transition hover:shadow-[0_0_35px_10px_rgba(251,146,60,0.5)]">
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#features" className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white/80 backdrop-blur-md hover:bg-white/10">
            Explore Features
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4 text-xs text-white/50">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" /> Real-time
          <div className="h-1.5 w-1.5 rounded-full bg-sky-400/90" /> Holographic UI
          <div className="h-1.5 w-1.5 rounded-full bg-orange-400/90" /> Gifting
        </div>
      </div>
    </section>
  );
}
