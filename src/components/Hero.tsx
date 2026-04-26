import { PixelButton } from "./PixelButton";

const PixelMascot = () => (
  <div className="grid grid-cols-8 gap-0 w-48 h-48 md:w-64 md:h-64 animate-float-pixel" aria-hidden>
    {[
      "00111100",
      "01111110",
      "11111111",
      "11011011",
      "11111111",
      "11100111",
      "01111110",
      "00111100",
    ].flatMap((row, y) =>
      row.split("").map((c, x) => {
        const colors = ["bg-pixel-pink", "bg-pixel-purple", "bg-pixel-cyan", "bg-pixel-yellow"];
        const color = colors[(x + y) % colors.length];
        const isEye = (y === 3 && (x === 2 || x === 5));
        return (
          <div
            key={`${x}-${y}`}
            className={
              c === "1"
                ? isEye
                  ? "bg-foreground"
                  : color
                : "bg-transparent"
            }
          />
        );
      }),
    )}
  </div>
);

export const Hero = () => (
  <section className="relative overflow-hidden border-b-4 border-foreground">
    <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-pixel-yellow border-2 border-foreground font-pixel text-[10px]">
          <span className="w-2 h-2 bg-pixel-green animate-blink-pixel" /> ONCHAIN & ALIVE
        </div>
        <h1 className="font-pixel text-3xl md:text-5xl leading-tight pixel-text-shadow-sm">
          GOVERN THE <span className="text-pixel-pink">PIXEL</span> WORLD
        </h1>
        <p className="font-mono-pixel text-2xl md:text-3xl text-muted-foreground max-w-lg leading-snug">
          A community-owned protocol where every holder casts the vote and shapes the chain.
          No suits. No silos. Just pixels &amp; power.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <PixelButton size="lg" variant="primary">Join the DAO</PixelButton>
          <PixelButton size="lg" variant="ghost">Read Docs</PixelButton>
        </div>
        <div className="flex flex-wrap gap-6 pt-6 font-pixel text-[10px]">
          <Stat value="42K+" label="Members" />
          <Stat value="1.2M" label="Votes" />
          <Stat value="$18M" label="Treasury" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-pixel-cyan border-4 border-foreground -rotate-3" />
          <div className="relative bg-card border-4 border-foreground p-8 shadow-[10px_10px_0_0_hsl(var(--foreground))]">
            <PixelMascot />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-pixel-pink text-lg pixel-text-shadow-sm">{value}</div>
    <div className="text-muted-foreground mt-1">{label}</div>
  </div>
);
