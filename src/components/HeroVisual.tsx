const pointCloud = [
  [68, 346], [94, 312], [119, 378], [145, 281], [169, 337], [189, 252], [210, 376], [232, 305],
  [250, 219], [269, 350], [291, 278], [312, 184], [332, 322], [352, 251], [371, 155], [393, 299],
  [413, 217], [432, 128], [451, 270], [470, 193], [489, 104], [509, 238], [527, 170], [547, 86],
  [566, 210], [584, 143], [604, 71], [622, 190], [641, 125], [660, 61], [679, 169], [698, 111],
  [717, 58], [736, 148], [755, 102], [773, 52], [120, 418], [235, 419], [352, 401], [468, 392],
  [583, 375], [699, 363], [788, 335], [285, 117], [390, 89], [501, 57], [611, 42], [721, 31],
];

const trackedFeatures = [
  { x: 185, y: 281 }, { x: 301, y: 278 }, { x: 413, y: 217 }, { x: 527, y: 170 }, { x: 641, y: 125 },
];

const HeroVisual = () => (
  <div className="relative overflow-hidden border border-border bg-surface" aria-label="Visual-inertial navigation viewport">
    <svg role="img" aria-label="A spatial reconstruction corridor with a tracked visual-inertial trajectory" viewBox="0 0 840 510" className="block h-auto w-full">
      <rect width="840" height="510" className="fill-background" />
      <g className="stroke-border" strokeWidth="1" opacity=".7">
        <path d="M0 410H840M0 370H840M0 330H840M0 290H840M0 250H840M0 210H840M0 170H840M0 130H840M0 90H840" />
        <path d="M80 510 420 90 760 510M180 510 420 90 660 510M280 510 420 90 560 510M380 510 420 90 460 510" />
        <path d="M420 92V54m-8 0h16m-12 12h8M38 104h28m-28 0v14m28-14v14M774 104h28m-28 0v14m28-14v14" />
      </g>
      <g className="stroke-muted-foreground" strokeWidth="1" opacity=".48">
        <path d="M72 221 208 185 330 160 455 130 586 108 750 96M84 314 214 284 342 260 469 237 602 213 760 197" />
        <path d="M123 212v-18m58 2v-20m58 6v-18m62-3v-18m65-3v-18m65-7v-18m68-3V87m74-4V65m76-2V49" />
      </g>
      <g className="fill-accent/70">
        {pointCloud.map(([x, y], index) => <circle key={`${x}-${y}`} cx={x} cy={y} r={index % 5 === 0 ? 2.3 : 1.5} />)}
      </g>
      <g className="stroke-accent" fill="none" strokeWidth="1.4">
        <path d="M92 383C157 349 183 331 223 313S290 293 336 270 400 248 447 225 512 201 554 177 620 157 669 136 730 119 777 108" />
      </g>
      <g className="fill-background stroke-accent" strokeWidth="1.6">
        {trackedFeatures.map(({ x, y }) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />)}
      </g>
      <g className="stroke-accent" strokeWidth="1" opacity=".65">
        {trackedFeatures.map(({ x, y }) => <path key={`cross-${x}-${y}`} d={`M${x - 9} ${y}h18m-9-9v18`} />)}
      </g>
      <g className="fill-muted-foreground font-mono text-[10px]">
        <text x="28" y="32">SPATIAL RECONSTRUCTION / LOCAL FRAME</text>
        <text x="28" y="482">X  +12.4</text>
        <text x="119" y="482">Y  -03.8</text>
        <text x="210" y="482">Z  +01.6</text>
        <text x="730" y="482">FRAME 0184</text>
      </g>
      <g className="stroke-muted-foreground" strokeWidth="1" opacity=".72">
        <path d="M32 54h38m-38 8h18M32 438h28m-28 8h18M778 54h30m-12 0v20M778 438h30m-12-20v20" />
      </g>
    </svg>
    <div className="grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-3">
      <div className="bg-surface px-4 py-3 font-mono text-[10px] text-muted-foreground sm:text-[11px]">GNSS: <span className="text-foreground">UNAVAILABLE</span></div>
      <div className="bg-surface px-4 py-3 font-mono text-[10px] text-muted-foreground sm:text-[11px]">ESTIMATION: <span className="text-foreground">VISUAL-INERTIAL</span></div>
      <div className="bg-surface px-4 py-3 font-mono text-[10px] text-muted-foreground sm:text-[11px]">SENSORS: <span className="text-foreground">CAMERA + IMU</span></div>
    </div>
  </div>
);

export default HeroVisual;