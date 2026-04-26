const proposals = [
  { id: "PIP-042", title: "Increase grants pool to 500K $PXL", status: "Active", for: 78, color: "bg-pixel-green" },
  { id: "PIP-041", title: "Deploy on Base & Optimism", status: "Passed", for: 92, color: "bg-pixel-cyan" },
  { id: "PIP-040", title: "Reduce protocol fees to 0.15%", status: "Passed", for: 67, color: "bg-pixel-yellow" },
  { id: "PIP-039", title: "Fund pixel-art creator residency", status: "Failed", for: 34, color: "bg-destructive" },
];

export const Governance = () => (
  <section id="governance" className="bg-pixel-purple/20 border-y-4 border-foreground py-20 md:py-28">
    <div className="container">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <p className="font-pixel text-[10px] text-pixel-pink mb-4">// GOVERNANCE</p>
          <h2 className="font-pixel text-2xl md:text-4xl leading-tight">RECENT PROPOSALS</h2>
        </div>
        <p className="font-mono-pixel text-2xl text-muted-foreground max-w-md">
          Snapshot votes happen weekly. Hold $PXL, show up, change everything.
        </p>
      </div>

      <div className="space-y-4">
        {proposals.map((p) => (
          <div key={p.id} className="bg-card border-4 border-foreground p-5 md:p-6 shadow-[6px_6px_0_0_hsl(var(--foreground))] grid md:grid-cols-[auto_1fr_auto_200px] items-center gap-4 md:gap-6">
            <span className="font-pixel text-[10px] bg-foreground text-background px-3 py-2 inline-block w-fit">{p.id}</span>
            <h3 className="font-pixel text-xs md:text-sm leading-snug">{p.title}</h3>
            <span className={`font-pixel text-[10px] ${p.color} text-foreground border-2 border-foreground px-3 py-2 w-fit`}>
              {p.status}
            </span>
            <div>
              <div className="flex justify-between font-pixel text-[10px] mb-2">
                <span>FOR</span><span>{p.for}%</span>
              </div>
              <div className="h-4 bg-muted border-2 border-foreground">
                <div className={`h-full ${p.color} border-r-2 border-foreground`} style={{ width: `${p.for}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
