const quests = [
  { q: "Q1", title: "Genesis Drop", body: "$PXL token launch & DAO bootstrap.", color: "bg-pixel-green", done: true },
  { q: "Q2", title: "Treasury v2", body: "Multi-sig + onchain payment streams.", color: "bg-pixel-cyan", done: true },
  { q: "Q3", title: "L2 Expansion", body: "Deploy to Base, Optimism & Arbitrum.", color: "bg-pixel-yellow", done: false },
  { q: "Q4", title: "Pixel Quests", body: "Onchain reputation & contributor XP.", color: "bg-pixel-pink", done: false },
];

export const Roadmap = () => (
  <section id="roadmap" className="container py-20 md:py-28">
    <div className="max-w-2xl mb-14">
      <p className="font-pixel text-[10px] text-pixel-pink mb-4">// ROADMAP</p>
      <h2 className="font-pixel text-2xl md:text-4xl leading-tight">THE QUEST AHEAD</h2>
    </div>
    <div className="grid md:grid-cols-4 gap-6">
      {quests.map((q) => (
        <div key={q.q} className="relative bg-card border-4 border-foreground p-6 shadow-[6px_6px_0_0_hsl(var(--foreground))]">
          <div className={`absolute -top-4 -right-4 w-12 h-12 ${q.color} border-4 border-foreground flex items-center justify-center font-pixel text-xs`}>
            {q.q}
          </div>
          <div className="font-pixel text-[10px] mb-3 inline-block px-2 py-1 border-2 border-foreground">
            {q.done ? "✓ COMPLETE" : "◌ IN PROGRESS"}
          </div>
          <h3 className="font-pixel text-sm mb-3">{q.title}</h3>
          <p className="font-mono-pixel text-xl text-muted-foreground leading-snug">{q.body}</p>
        </div>
      ))}
    </div>
  </section>
);
