import { ConnectWallet } from "./ConnectWallet";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#governance", label: "Governance" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#community", label: "Community" },
];

export const Navbar = () => (
  <header className="sticky top-0 z-50 bg-background border-b-4 border-foreground">
    <div className="container flex h-16 items-center justify-between gap-4">
      <a href="#" className="flex items-center gap-3">
        <div className="w-8 h-8 bg-pixel-pink border-2 border-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))] grid grid-cols-2">
          <div className="bg-pixel-yellow" />
          <div className="bg-pixel-cyan" />
          <div className="bg-pixel-green" />
          <div className="bg-pixel-purple" />
        </div>
        <span className="font-pixel text-sm">PIXEL DAO</span>
      </a>
      <nav className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-pixel text-[10px] uppercase tracking-wider hover:text-pixel-pink transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <ConnectWallet />
    </div>
  </header>
);
