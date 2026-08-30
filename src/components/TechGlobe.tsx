// Decorative rotating wireframe globe — pure CSS 3D transforms (see globals.css),
// no WebGL/three.js and no external image/model. Purely ambient/aria-hidden.
const RING_TILTS = [0, 25, 50, 75, 100, 125, 150];

export function TechGlobe({ size = 260 }: { size?: number }) {
  return (
    <div
      className="globe-scene pointer-events-none select-none"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className="globe" style={{ width: size, height: size }}>
        <div
          className="absolute rounded-full"
          style={{
            inset: "12%",
            background:
              "radial-gradient(circle at 35% 30%, var(--color-accent) 0%, transparent 70%)",
            opacity: 0.35,
            filter: "blur(1px)",
          }}
        />
        {RING_TILTS.map((angle, i) => (
          <div
            key={angle}
            className="globe-ring"
            style={{ transform: `rotateX(${angle}deg)`, opacity: 0.14 + (i % 3) * 0.06 }}
          />
        ))}
        <div className="globe-ring" style={{ transform: "rotateY(90deg)", opacity: 0.22 }} />

        <span
          className="absolute h-2 w-2 rounded-full bg-accent"
          style={{ left: "16%", top: "32%", animation: "node-pulse 3s ease-in-out infinite" }}
        />
        <span
          className="absolute h-1.5 w-1.5 rounded-full bg-accent"
          style={{
            right: "20%",
            top: "58%",
            animation: "node-pulse 3.6s ease-in-out infinite 0.6s",
          }}
        />
        <span
          className="absolute h-1.5 w-1.5 rounded-full bg-accent"
          style={{
            left: "48%",
            bottom: "12%",
            animation: "node-pulse 4.2s ease-in-out infinite 1.2s",
          }}
        />
      </div>
    </div>
  );
}
