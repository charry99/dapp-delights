export const Footer = () => (
  <footer className="border-t-4 border-foreground bg-card">
    <div className="container py-10 grid md:grid-cols-3 gap-8 items-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-pixel-pink border-2 border-foreground grid grid-cols-2">
          <div className="bg-pixel-yellow" />
          <div className="bg-pixel-cyan" />
          <div className="bg-pixel-green" />
          <div className="bg-pixel-purple" />
        </div>
        <span className="font-pixel text-xs">PIXEL DAO</span>
      </div>
      <p className="font-mono-pixel text-xl text-muted-foreground text-center">
        © {new Date().getFullYear()} Built onchain by the guild.
      </p>
      <div className="flex gap-4 md:justify-end font-pixel text-[10px]">
        <a href="#" className="hover:text-pixel-pink">TWITTER</a>
        <a href="#" className="hover:text-pixel-pink">DISCORD</a>
        <a href="#" className="hover:text-pixel-pink">GITHUB</a>
        <a href="#" className="hover:text-pixel-pink">DOCS</a>
      </div>
    </div>
  </footer>
);
