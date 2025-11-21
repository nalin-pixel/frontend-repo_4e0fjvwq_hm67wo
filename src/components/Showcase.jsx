import { Sparkles } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">See the vibe</h2>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-orange-400" /> Holographic preview
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1226] to-[#0f0a18] p-0.5">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#ffffff20,#ffb86b1a,#ffffff10,#a78bfa1a,#ffffff20)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative h-full w-full rounded-[14px] bg-[#0b0713]/80 backdrop-blur-xl">
              <div className="absolute inset-0" style={{ background: 'radial-gradient(60%_60%_at_50%_50%, rgba(167,139,250,0.12), transparent 60%)' }} />
              <div className="relative flex h-full items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-purple-400/30 via-fuchsia-400/30 to-cyan-300/30 shadow-[0_0_40px_8px_rgba(168,85,247,0.3)]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
