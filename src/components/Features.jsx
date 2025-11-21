import { Gift, MessageCircle, MapPin, Coins } from 'lucide-react';

const features = [
  {
    icon: Gift,
    title: 'Virtual Gifting System',
    desc: 'Send dazzling holographic gifts and chrome-styled badges to celebrate every moment.'
  },
  {
    icon: MessageCircle,
    title: 'Real-time Messaging',
    desc: 'Ultra-smooth chats with glowing threads, reactions, and ephemeral whispers.'
  },
  {
    icon: MapPin,
    title: 'Location-based Discovery',
    desc: 'Find nearby creators and communities with neon pulses and ambient maps.'
  },
  {
    icon: Coins,
    title: 'Creator Monetization',
    desc: 'Tip, subscribe, and unlock premium drops with a transparent, creator-first model.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-orange-500/10 to-transparent blur-2xl" />

      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">What makes Whispr glow</h2>
        <p className="mt-3 text-white/60">Cyberpunk polish meets premium social. Built for connection and celebration.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/10"
          >
            {/* Glow accents */}
            <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(60%_60%_at_50%_0%, rgba(251,146,60,0.25), transparent 60%)'
              }}
            />
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-purple-700/40 to-fuchsia-700/30 p-3 ring-1 ring-white/10 shadow-inner">
                <f.icon className="h-6 w-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#c9c6ff,white,#c9c6ff)]">
                {f.title}
              </h3>
              <p className="text-sm text-white/70">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
