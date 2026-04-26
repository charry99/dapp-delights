const items = ["★ DECENTRALIZED", "✦ ONCHAIN VOTING", "♦ OPEN TREASURY", "▲ COMMUNITY OWNED", "● PIXEL POWERED", "✺ NO GATEKEEPERS"];

export const Marquee = () => (
  <div className="bg-foreground text-background border-y-4 border-foreground overflow-hidden py-3">
    <div className="flex gap-12 whitespace-nowrap animate-scroll-marquee font-pixel text-xs">
      {[...items, ...items, ...items, ...items].map((it, i) => (
        <span key={i}>{it}</span>
      ))}
    </div>
  </div>
);
