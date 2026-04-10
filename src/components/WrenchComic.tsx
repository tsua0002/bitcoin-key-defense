const WrenchComic = () => (
  <div className="w-full max-w-3xl mx-auto my-12">
    <svg viewBox="0 0 800 320" className="w-full" role="img" aria-label="Two-panel illustration: Panel 1 shows a figure protected by cryptographic defenses. Panel 2 shows the same figure confronted by someone with a wrench.">
      {/* Panel 1 */}
      <rect x="10" y="10" width="380" height="300" rx="2" fill="none" stroke="hsl(220,20%,14%)" strokeWidth="1.5" />
      <text x="200" y="38" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="600" fill="hsl(220,20%,14%)">A CRYPTO ENTHUSIAST'S CONFIDENCE</text>

      {/* Figure at desk */}
      <circle cx="200" cy="150" r="14" fill="none" stroke="hsl(220,20%,14%)" strokeWidth="2" />
      <line x1="200" y1="164" x2="200" y2="210" stroke="hsl(220,20%,14%)" strokeWidth="2" />
      <line x1="200" y1="180" x2="175" y2="195" stroke="hsl(220,20%,14%)" strokeWidth="2" />
      <line x1="200" y1="180" x2="225" y2="195" stroke="hsl(220,20%,14%)" strokeWidth="2" />
      <line x1="200" y1="210" x2="180" y2="240" stroke="hsl(220,20%,14%)" strokeWidth="2" />
      <line x1="200" y1="210" x2="220" y2="240" stroke="hsl(220,20%,14%)" strokeWidth="2" />

      {/* Laptop */}
      <rect x="230" y="195" width="40" height="28" rx="2" fill="none" stroke="hsl(220,20%,14%)" strokeWidth="1.5" />
      <line x1="225" y1="223" x2="275" y2="223" stroke="hsl(220,20%,14%)" strokeWidth="1.5" />

      {/* Floating security terms */}
      <text x="90" y="100" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="hsl(22,100%,38%)" opacity="0.9">AES-256</text>
      <text x="280" y="90" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="hsl(22,100%,38%)" opacity="0.9">Multisig</text>
      <text x="70" y="170" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="hsl(22,100%,38%)" opacity="0.9">Hardware wallet</text>
      <text x="280" y="150" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="hsl(22,100%,38%)" opacity="0.9">Air-gapped</text>
      <text x="100" y="130" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="hsl(22,100%,38%)" opacity="0.7">4096-bit RSA</text>
      <text x="285" y="120" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="hsl(22,100%,38%)" opacity="0.7">Passphrase</text>

      {/* Thought bubble */}
      <rect x="100" y="252" width="200" height="30" rx="3" fill="none" stroke="hsl(220,20%,14%)" strokeWidth="1" />
      <text x="200" y="272" textAnchor="middle" fontFamily="'IBM Plex Sans', sans-serif" fontSize="11" fill="hsl(220,10%,46%)">"I'm perfectly secure."</text>

      {/* Panel 2 */}
      <rect x="410" y="10" width="380" height="300" rx="2" fill="none" stroke="hsl(220,20%,14%)" strokeWidth="1.5" />
      <text x="600" y="38" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="600" fill="hsl(220,20%,14%)">WHAT ACTUALLY HAPPENS</text>

      {/* Victim figure */}
      <circle cx="540" cy="150" r="14" fill="none" stroke="hsl(220,20%,14%)" strokeWidth="2" />
      <line x1="540" y1="164" x2="540" y2="210" stroke="hsl(220,20%,14%)" strokeWidth="2" />
      <line x1="540" y1="180" x2="515" y2="195" stroke="hsl(220,20%,14%)" strokeWidth="2" />
      <line x1="540" y1="180" x2="565" y2="195" stroke="hsl(220,20%,14%)" strokeWidth="2" />
      <line x1="540" y1="210" x2="520" y2="240" stroke="hsl(220,20%,14%)" strokeWidth="2" />
      <line x1="540" y1="210" x2="560" y2="240" stroke="hsl(220,20%,14%)" strokeWidth="2" />

      {/* Attacker figure */}
      <circle cx="680" cy="150" r="14" fill="none" stroke="hsl(22,100%,38%)" strokeWidth="2" />
      <line x1="680" y1="164" x2="680" y2="210" stroke="hsl(22,100%,38%)" strokeWidth="2" />
      <line x1="680" y1="180" x2="655" y2="195" stroke="hsl(22,100%,38%)" strokeWidth="2" />
      <line x1="680" y1="180" x2="705" y2="170" stroke="hsl(22,100%,38%)" strokeWidth="2" />
      <line x1="680" y1="210" x2="660" y2="240" stroke="hsl(22,100%,38%)" strokeWidth="2" />
      <line x1="680" y1="210" x2="700" y2="240" stroke="hsl(22,100%,38%)" strokeWidth="2" />

      {/* Wrench */}
      <line x1="705" y1="170" x2="735" y2="140" stroke="hsl(22,100%,38%)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="739" cy="136" r="6" fill="none" stroke="hsl(22,100%,38%)" strokeWidth="2.5" />

      {/* Speech bubble */}
      <rect x="610" y="70" width="160" height="40" rx="4" fill="none" stroke="hsl(22,100%,38%)" strokeWidth="1.5" />
      <polygon points="650,110 660,110 645,125" fill="none" stroke="hsl(22,100%,38%)" strokeWidth="1.5" />
      <text x="690" y="95" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="12" fontWeight="600" fill="hsl(22,100%,38%)">"Give me the key."</text>

      {/* Victim reaction */}
      <rect x="450" y="252" width="200" height="30" rx="3" fill="none" stroke="hsl(220,20%,14%)" strokeWidth="1" />
      <text x="550" y="272" textAnchor="middle" fontFamily="'IBM Plex Sans', sans-serif" fontSize="11" fill="hsl(220,10%,46%)">"...okay."</text>
    </svg>
    <p className="text-center font-mono text-sm text-muted-foreground mt-4">
      $5 wrench. Game over. <span className="text-primary font-semibold">Unless you architect for this.</span>
    </p>
  </div>
);

export default WrenchComic;
