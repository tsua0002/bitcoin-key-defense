interface ShareDiagramProps {
  total: number;
  required: number;
}

const ShareDiagram = ({ total, required }: ShareDiagramProps) => {
  const width = Math.min(total * 80, 640);
  const cx = width / 2;

  return (
    <svg viewBox={`0 0 ${width} 120`} className="w-full max-w-xl mx-auto my-6" role="img" aria-label={`Diagram showing ${total} shares, ${required} required`}>
      {Array.from({ length: total }, (_, i) => {
        const isRequired = i < required;
        const x = (i + 0.5) * (width / total);
        return (
          <g key={i}>
            <circle
              cx={x}
              cy="45"
              r="22"
              fill={isRequired ? "hsl(22,100%,38%)" : "none"}
              stroke="hsl(22,100%,38%)"
              strokeWidth="2"
              opacity={isRequired ? 1 : 0.3}
            />
            <text
              x={x}
              y="50"
              textAnchor="middle"
              fontFamily="'JetBrains Mono', monospace"
              fontSize="12"
              fontWeight="600"
              fill={isRequired ? "hsl(40,33%,97%)" : "hsl(22,100%,38%)"}
              opacity={isRequired ? 1 : 0.5}
            >
              {i + 1}
            </text>
            <text
              x={x}
              y="85"
              textAnchor="middle"
              fontFamily="'IBM Plex Sans', sans-serif"
              fontSize="9"
              fill={isRequired ? "hsl(22,100%,38%)" : "hsl(220,10%,46%)"}
            >
              {isRequired ? "required" : "can be lost"}
            </text>
          </g>
        );
      })}
      <text x={cx} y="110" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="hsl(220,10%,46%)">
        {required} of {total} shares needed to reconstruct
      </text>
    </svg>
  );
};

export default ShareDiagram;
