import { PixelButton } from "./PixelButton";

export const Community = () => (
  <section id="community" className="container py-20 md:py-28">
    <div className="relative bg-pixel-pink border-4 border-foreground p-10 md:p-16 shadow-[12px_12px_0_0_hsl(var(--foreground))] text-center overflow-hidden">
      <div className="absolute top-4 left-4 w-6 h-6 bg-pixel-yellow border-2 border-foreground" />
      <div className="absolute top-4 right-4 w-6 h-6 bg-pixel-cyan border-2 border-foreground" />
      <div className="absolute bottom-4 left-4 w-6 h-6 bg-pixel-green border-2 border-foreground" />
      <div className="absolute bottom-4 right-4 w-6 h-6 bg-pixel-purple border-2 border-foreground" />

      <p className="font-pixel text-[10px] text-primary-foreground mb-4">// JOIN THE GUILD</p>
      <h2 className="font-pixel text-2xl md:text-5xl text-primary-foreground leading-tight max-w-3xl mx-auto pixel-text-shadow-sm">
        READY PLAYER ONE?
      </h2>
      <p className="font-mono-pixel text-2xl md:text-3xl text-primary-foreground/90 mt-6 max-w-xl mx-auto">
        Hop into Discord, grab some $PXL and cast your first vote in under 3 minutes.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <PixelButton size="lg" variant="accent">Join Discord</PixelButton>
        <PixelButton size="lg" variant="ghost">View on GitHub</PixelButton>
      </div>
    </div>
  </section>
);
