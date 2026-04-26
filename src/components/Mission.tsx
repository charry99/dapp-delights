const cards = [
  { color: "bg-pixel-pink", icon: "▲", title: "Govern", body: "Every token is a vote. Propose upgrades, fund builders, set the direction." },
  { color: "bg-pixel-cyan", icon: "◆", title: "Build", body: "Open grants for hackers, artists and devs shipping the next chain primitives." },
  { color: "bg-pixel-yellow", icon: "★", title: "Earn", body: "Stake to secure the protocol and share in fees from a transparent treasury." },
];

export const Mission = () => (
  <section id="mission" className="container py-20 md:py-28">
    <div className="max-w-2xl mb-14">
      <p className="font-pixel text-[10px] text-pixel-pink mb-4">// OUR MISSION</p>
      <h2 className="font-pixel text-2xl md:text-4xl leading-tight">
        BUILT BY PLAYERS,<br />OWNED BY EVERYONE.
      </h2>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {cards.map((c) => (
        <div key={c.title} className="bg-card border-4 border-foreground p-6 shadow-[8px_8px_0_0_hsl(var(--foreground))] hover:-translate-y-1 transition-transform">
          <div className={`w-14 h-14 ${c.color} border-4 border-foreground flex items-center justify-center text-2xl mb-5`}>
            {c.icon}
          </div>
          <h3 className="font-pixel text-base mb-3">{c.title}</h3>
          <p className="font-mono-pixel text-xl text-muted-foreground leading-snug">{c.body}</p>
        </div>
      ))}
    </div>
  </section>
);
