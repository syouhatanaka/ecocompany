"use client";

export default function PixelCityscape() {
  // Pixel art cityscape using CSS box-shadows to represent Sendai skyline
  return (
    <div
      className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
      style={{ height: "180px" }}
    >
      <svg
        viewBox="0 0 960 180"
        className="w-full h-full"
        preserveAspectRatio="xMidYMax meet"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Sky gradient */}
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,212,170,0.08)" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="180" fill="url(#skyGrad)" />

        {/* Ground */}
        <rect x="0" y="160" width="960" height="20" fill="#0d2137" />

        {/* Buildings - back row (darker) */}
        <rect x="40" y="80" width="32" height="80" fill="#0a1929" />
        <rect x="80" y="60" width="24" height="100" fill="#0a1929" />
        <rect x="160" y="70" width="40" height="90" fill="#0a1929" />
        <rect x="280" y="50" width="28" height="110" fill="#0a1929" />
        <rect x="360" y="65" width="36" height="95" fill="#0a1929" />
        <rect x="500" y="55" width="32" height="105" fill="#0a1929" />
        <rect x="600" y="75" width="44" height="85" fill="#0a1929" />
        <rect x="720" y="60" width="28" height="100" fill="#0a1929" />
        <rect x="820" y="70" width="36" height="90" fill="#0a1929" />
        <rect x="880" y="80" width="40" height="80" fill="#0a1929" />

        {/* Buildings - front row */}
        <rect x="20" y="100" width="48" height="60" fill="#0f3460" />
        <rect x="120" y="90" width="56" height="70" fill="#0f3460" />
        <rect x="220" y="85" width="40" height="75" fill="#0f3460" />
        <rect x="320" y="95" width="52" height="65" fill="#0f3460" />
        <rect x="430" y="80" width="48" height="80" fill="#0f3460" />
        <rect x="540" y="100" width="40" height="60" fill="#0f3460" />
        <rect x="640" y="88" width="56" height="72" fill="#0f3460" />
        <rect x="760" y="95" width="44" height="65" fill="#0f3460" />
        <rect x="860" y="105" width="60" height="55" fill="#0f3460" />

        {/* Windows (lit up) - scattered yellow pixels */}
        {/* Building 1 */}
        <rect x="28" y="108" width="4" height="4" fill="#ffd700" opacity="0.8" />
        <rect x="40" y="116" width="4" height="4" fill="#ffd700" opacity="0.6" />
        <rect x="52" y="108" width="4" height="4" fill="#ffd700" opacity="0.9" />
        <rect x="28" y="132" width="4" height="4" fill="#ffd700" opacity="0.5" />

        {/* Building 2 */}
        <rect x="132" y="98" width="4" height="4" fill="#ffd700" opacity="0.8" />
        <rect x="148" y="106" width="4" height="4" fill="#ffd700" opacity="0.7" />
        <rect x="160" y="98" width="4" height="4" fill="#ffd700" opacity="0.6" />
        <rect x="140" y="122" width="4" height="4" fill="#ffd700" opacity="0.9" />
        <rect x="156" y="130" width="4" height="4" fill="#ffd700" opacity="0.5" />

        {/* Building 3 */}
        <rect x="228" y="92" width="4" height="4" fill="#ffd700" opacity="0.7" />
        <rect x="244" y="100" width="4" height="4" fill="#ffd700" opacity="0.8" />
        <rect x="236" y="120" width="4" height="4" fill="#ffd700" opacity="0.6" />

        {/* Building 4 */}
        <rect x="336" y="104" width="4" height="4" fill="#ffd700" opacity="0.8" />
        <rect x="352" y="112" width="4" height="4" fill="#ffd700" opacity="0.7" />
        <rect x="344" y="128" width="4" height="4" fill="#ffd700" opacity="0.9" />

        {/* Building 5 */}
        <rect x="440" y="88" width="4" height="4" fill="#ffd700" opacity="0.7" />
        <rect x="456" y="96" width="4" height="4" fill="#ffd700" opacity="0.8" />
        <rect x="448" y="112" width="4" height="4" fill="#ffd700" opacity="0.6" />
        <rect x="464" y="120" width="4" height="4" fill="#ffd700" opacity="0.9" />

        {/* Building 6 */}
        <rect x="548" y="108" width="4" height="4" fill="#ffd700" opacity="0.7" />
        <rect x="564" y="116" width="4" height="4" fill="#ffd700" opacity="0.8" />

        {/* Building 7 */}
        <rect x="652" y="96" width="4" height="4" fill="#ffd700" opacity="0.8" />
        <rect x="668" y="104" width="4" height="4" fill="#ffd700" opacity="0.7" />
        <rect x="680" y="96" width="4" height="4" fill="#ffd700" opacity="0.6" />
        <rect x="660" y="120" width="4" height="4" fill="#ffd700" opacity="0.9" />

        {/* Building 8 */}
        <rect x="772" y="104" width="4" height="4" fill="#ffd700" opacity="0.8" />
        <rect x="788" y="112" width="4" height="4" fill="#ffd700" opacity="0.7" />

        {/* Building 9 */}
        <rect x="872" y="112" width="4" height="4" fill="#ffd700" opacity="0.8" />
        <rect x="892" y="120" width="4" height="4" fill="#ffd700" opacity="0.7" />
        <rect x="904" y="112" width="4" height="4" fill="#ffd700" opacity="0.6" />

        {/* Green accent windows */}
        <rect x="44" y="124" width="4" height="4" fill="#00d4aa" opacity="0.6" />
        <rect x="144" y="114" width="4" height="4" fill="#00d4aa" opacity="0.5" />
        <rect x="452" y="104" width="4" height="4" fill="#00d4aa" opacity="0.7" />
        <rect x="672" y="112" width="4" height="4" fill="#00d4aa" opacity="0.6" />

        {/* Trees (pixel art) */}
        <rect x="100" y="148" width="8" height="12" fill="#006644" />
        <rect x="96" y="140" width="16" height="8" fill="#00d4aa" opacity="0.6" />
        <rect x="100" y="132" width="8" height="8" fill="#00d4aa" opacity="0.4" />

        <rect x="400" y="148" width="8" height="12" fill="#006644" />
        <rect x="396" y="140" width="16" height="8" fill="#00d4aa" opacity="0.6" />
        <rect x="400" y="132" width="8" height="8" fill="#00d4aa" opacity="0.4" />

        <rect x="700" y="148" width="8" height="12" fill="#006644" />
        <rect x="696" y="140" width="16" height="8" fill="#00d4aa" opacity="0.6" />
        <rect x="700" y="132" width="8" height="8" fill="#00d4aa" opacity="0.4" />

        {/* Stars */}
        <rect x="150" y="20" width="2" height="2" fill="#ffd700" opacity="0.6" />
        <rect x="300" y="15" width="2" height="2" fill="#ffd700" opacity="0.8" />
        <rect x="480" y="25" width="2" height="2" fill="#ffd700" opacity="0.5" />
        <rect x="650" y="10" width="2" height="2" fill="#ffd700" opacity="0.7" />
        <rect x="800" y="30" width="2" height="2" fill="#ffd700" opacity="0.6" />
        <rect x="900" y="18" width="2" height="2" fill="#ffd700" opacity="0.9" />
        <rect x="50" y="35" width="2" height="2" fill="#ffd700" opacity="0.4" />
        <rect x="550" y="8" width="2" height="2" fill="#ffd700" opacity="0.7" />
      </svg>
    </div>
  );
}
