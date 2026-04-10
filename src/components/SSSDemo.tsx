import { useState, useCallback } from "react";
import secrets from "secrets.js-grempe";
import ShareDiagram from "./ShareDiagram";
import { Copy, Check, AlertCircle, Shield, MapPin, Clock, Eye, TestTube, Lock } from "lucide-react";

type Mode = "split" | "reconstruct";

const SSSDemo = () => {
  const [mode, setMode] = useState<Mode>("split");
  const [secret, setSecret] = useState("");
  const [totalShares, setTotalShares] = useState(3);
  const [threshold, setThreshold] = useState(2);
  const [shares, setShares] = useState<string[]>([]);
  const [reconstructInputs, setReconstructInputs] = useState<string[]>([]);
  const [reconstructedSecret, setReconstructedSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const switchMode = (m: Mode) => {
    setMode(m);
    setShares([]);
    setReconstructInputs([]);
    setReconstructedSecret(null);
    setError(null);
    setSecret("");
  };

  const handleSplit = useCallback(() => {
    setError(null);
    if (!secret.trim()) {
      setError("Please enter a secret to split.");
      return;
    }
    try {
      const hex = secrets.str2hex(secret);
      const result = secrets.share(hex, totalShares, threshold);
      setShares(result);
      setReconstructInputs(Array(threshold).fill(""));
    } catch (e) {
      setError("Failed to split the secret. Please check your inputs.");
    }
  }, [secret, totalShares, threshold]);

  const handleReconstruct = useCallback(() => {
    setError(null);
    setReconstructedSecret(null);
    const validShares = reconstructInputs.filter((s) => s.trim());
    if (validShares.length < 2) {
      setError("Please provide at least 2 shares.");
      return;
    }
    try {
      const hex = secrets.combine(validShares);
      const result = secrets.hex2str(hex);
      setReconstructedSecret(result);
    } catch {
      setError("Shares are incompatible or insufficient.");
    }
  }, [reconstructInputs]);

  const copyShare = async (share: string, index: number) => {
    await navigator.clipboard.writeText(share);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const bestPractices = [
    { icon: MapPin, text: "Never store all shares in the same location or medium" },
    { icon: Lock, text: "Never store shares digitally if they protect a seed phrase" },
    { icon: Shield, text: "One share at home, one with a trusted third party, one in a geographically separate location — never a close relative who could be identified" },
    { icon: Clock, text: "The reconstruction moment is your most vulnerable moment — prepare the environment accordingly" },
    { icon: Eye, text: "A share alone reveals nothing. Protect the schema (how many, what threshold), not just the shares." },
    { icon: TestTube, text: "Test your reconstruction before you need it" },
  ];

  return (
    <div>
      {/* Mode toggle */}
      <div className="flex border-b border-border mb-8">
        <button
          onClick={() => switchMode("split")}
          className={`px-6 py-3 font-mono text-sm font-medium transition-colors ${
            mode === "split"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          SPLIT
        </button>
        <button
          onClick={() => switchMode("reconstruct")}
          className={`px-6 py-3 font-mono text-sm font-medium transition-colors ${
            mode === "reconstruct"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          RECONSTRUCT
        </button>
      </div>

      {mode === "split" ? (
        <div>
          <div className="space-y-4 max-w-lg">
            <div>
              <label className="block font-mono text-xs font-medium text-foreground mb-1.5">
                Enter your secret
              </label>
              <input
                type="text"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="e.g. a seed phrase, a password, any string"
                className="w-full px-3 py-2.5 bg-popover border border-border rounded font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-mono text-xs font-medium text-foreground mb-1.5">
                  Total shares (N)
                </label>
                <input
                  type="number"
                  value={totalShares}
                  onChange={(e) => {
                    const v = Math.max(2, Math.min(10, Number(e.target.value)));
                    setTotalShares(v);
                    if (threshold > v) setThreshold(v);
                  }}
                  min={2}
                  max={10}
                  className="w-full px-3 py-2.5 bg-popover border border-border rounded font-mono text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex-1">
                <label className="block font-mono text-xs font-medium text-foreground mb-1.5">
                  Shares required (M)
                </label>
                <input
                  type="number"
                  value={threshold}
                  onChange={(e) => setThreshold(Math.max(2, Math.min(totalShares, Number(e.target.value))))}
                  min={2}
                  max={totalShares}
                  className="w-full px-3 py-2.5 bg-popover border border-border rounded font-mono text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <button
              onClick={handleSplit}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-mono text-sm font-medium rounded hover:opacity-90 transition-opacity"
            >
              Split
            </button>
          </div>

          {shares.length > 0 && (
            <div className="mt-8">
              <ShareDiagram total={totalShares} required={threshold} />
              <div className="space-y-2 mt-6">
                {shares.map((share, i) => (
                  <div key={i} className="flex items-center gap-2 group">
                    <span className="font-mono text-xs text-muted-foreground w-6 shrink-0">{i + 1}.</span>
                    <code className="flex-1 px-3 py-2 bg-secondary rounded font-mono text-xs text-foreground break-all">
                      {share}
                    </code>
                    <button
                      onClick={() => copyShare(share, i)}
                      className="p-1.5 text-muted-foreground hover:text-primary transition-colors shrink-0"
                      aria-label={`Copy share ${i + 1}`}
                    >
                      {copiedIndex === i ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="space-y-3 max-w-lg">
            <label className="block font-mono text-xs font-medium text-foreground mb-1.5">
              Paste your shares
            </label>
            {Array.from({ length: Math.max(2, reconstructInputs.length || 2) }, (_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground w-6 shrink-0">{i + 1}.</span>
                <input
                  type="text"
                  value={reconstructInputs[i] || ""}
                  onChange={(e) => {
                    const next = [...reconstructInputs];
                    while (next.length <= i) next.push("");
                    next[i] = e.target.value;
                    // Add new field if typing in last
                    if (i === next.length - 1 && e.target.value && next.length < 10) {
                      next.push("");
                    }
                    setReconstructInputs(next);
                  }}
                  placeholder={`Share ${i + 1}`}
                  className="flex-1 px-3 py-2.5 bg-popover border border-border rounded font-mono text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            ))}
            <button
              onClick={handleReconstruct}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-mono text-sm font-medium rounded hover:opacity-90 transition-opacity"
            >
              Reconstruct
            </button>
          </div>

          {reconstructedSecret && (
            <div className="mt-6">
              <label className="block font-mono text-xs font-medium text-foreground mb-1.5">
                Reconstructed secret
              </label>
              <code className="block px-4 py-3 bg-secondary rounded font-mono text-sm text-foreground break-all">
                {reconstructedSecret}
              </code>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="mt-4 flex items-center gap-2 text-destructive font-mono text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      {/* Best Practices */}
      <div className="mt-12 pt-8 border-t border-border">
        <h4 className="font-display text-sm font-semibold text-foreground mb-6">BEST PRACTICES</h4>
        <ol className="space-y-4">
          {bestPractices.map(({ icon: Icon, text }, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-primary/10 text-primary shrink-0 mt-0.5">
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span className="font-body text-sm text-foreground leading-relaxed">{text}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-8 font-body text-xs text-muted-foreground leading-relaxed">
        This demo runs entirely in your browser. Nothing is transmitted. Use for educational purposes. For production implementations protecting significant value, consult a specialist.
      </p>
    </div>
  );
};

export default SSSDemo;
