import { useEffect, useState } from "react";
import { PixelButton } from "./PixelButton";
import { toast } from "sonner";

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on?: (event: string, handler: (...args: unknown[]) => void) => void;
      removeListener?: (event: string, handler: (...args: unknown[]) => void) => void;
      isMetaMask?: boolean;
    };
  }
}

const short = (a: string) => `${a.slice(0, 6)}...${a.slice(-4)}`;

export const ConnectWallet = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!window.ethereum) return;
    window.ethereum
      .request({ method: "eth_accounts" })
      .then((accs) => {
        const list = accs as string[];
        if (list.length) setAddress(list[0]);
      })
      .catch(() => {});

    const handleAccountsChanged = (...args: unknown[]) => {
      const accs = args[0] as string[];
      setAddress(accs.length ? accs[0] : null);
    };
    window.ethereum.on?.("accountsChanged", handleAccountsChanged);
    return () => window.ethereum?.removeListener?.("accountsChanged", handleAccountsChanged);
  }, []);

  const connect = async () => {
    if (!window.ethereum) {
      toast.error("MetaMask not detected", {
        description: "Install MetaMask to connect your wallet.",
      });
      return;
    }
    try {
      setLoading(true);
      const accs = (await window.ethereum.request({ method: "eth_requestAccounts" })) as string[];
      if (accs.length) {
        setAddress(accs[0]);
        toast.success("Wallet connected!", { description: short(accs[0]) });
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Connection rejected";
      toast.error("Could not connect", { description: msg });
    } finally {
      setLoading(false);
    }
  };

  const disconnect = () => {
    setAddress(null);
    toast("Disconnected", { description: "Wallet session cleared locally." });
  };

  return (
    <PixelButton
      variant={address ? "secondary" : "primary"}
      size="sm"
      onClick={address ? disconnect : connect}
      disabled={loading}
    >
      {loading ? "Connecting..." : address ? short(address) : "Connect Wallet"}
    </PixelButton>
  );
};
