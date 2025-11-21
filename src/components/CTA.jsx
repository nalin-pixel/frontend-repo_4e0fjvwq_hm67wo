import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="signup" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_30%,rgba(251,146,60,0.08),transparent_60%)]" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a1b47]/40 via-transparent to-[#0b0713]/60" />
        <div className="relative z-10 grid items-center gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Ready to glow with Whispr?</h3>
            <p className="mt-2 text-white/70">Join the early access list to claim your holographic handle and first drop.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <input
              type="email"
              placeholder="you@galaxy.com"
              className="w-full rounded-full border border-white/15 bg-black/30 px-5 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-orange-400/50"
            />
            <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-orange-500 via-amber-400 to-orange-600 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_25px_6px_rgba(251,146,60,0.35)] transition hover:shadow-[0_0_35px_10px_rgba(251,146,60,0.5)]">
              Sign Up
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
