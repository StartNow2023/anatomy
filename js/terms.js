// Stage 0 · Anatomical Terms（第 0 阶段 · 方位术语）
// 想改术语说明：改下面 TERMS 里对应的一项
// { id, name: 名称, also: 别名(可不写), mean: 意思, eg: 例子 }
const TERMS = [
  { id: "updown", name: "Superior / Inferior", also: "Also called cranial / caudal",
    mean: "Closer to the head is superior; closer to the feet is inferior.",
    eg: "The heart is superior to the diaphragm. The bladder is inferior to the navel." },
  { id: "antpost", name: "Anterior / Posterior", also: "Also called ventral / dorsal",
    mean: "Closer to the front of the body (the belly side) is anterior; closer to the back is posterior.",
    eg: "The sternum is anterior to the heart; the vertebral column is posterior to it." },
  { id: "medlat", name: "Medial / Lateral",
    mean: "Measured from the midline of the body: closer to the midline is medial, farther from it is lateral.",
    eg: "The eye is lateral to the nose and medial to the ear. In the anatomical position, the little finger is medial to the thumb." },
  { id: "inout", name: "Internal / External",
    mean: "Used for hollow organs and body cavities: closer to the inside of the cavity is internal, farther from it is external. Don't mix this up with medial / lateral — one is about the cavity, the other about the midline.",
    eg: "The innermost layer of the heart wall is the endocardium; the outermost layer is the epicardium." },
  { id: "supdeep", name: "Superficial / Deep",
    mean: "Measured from the body surface: closer to the skin is superficial; farther into the body is deep.",
    eg: "The skin is superficial to the muscles; the bones are deep to the muscles." },
  { id: "proxdist", name: "Proximal / Distal",
    mean: "Used mainly for the limbs: closer to where the limb joins the trunk is proximal; farther away is distal.",
    eg: "The elbow is proximal to the wrist. The fingers are distal to the palm. The knee is proximal to the ankle." },
  { id: "ulnrad", name: "Ulnar / Radial",
    mean: "Medial and lateral for the forearm and hand: the medial (little-finger) side is ulnar and the lateral (thumb) side is radial — because that is where the ulna and the radius lie.",
    eg: "The little finger is on the ulnar side of the hand; the thumb is on the radial side." },
  { id: "tibfib", name: "Tibial / Fibular",
    mean: "Medial and lateral for the leg: the medial side is tibial and the lateral side is fibular — because that is where the tibia and the fibula lie.",
    eg: "The big toe is on the tibial side of the foot; the little toe is on the fibular side." },
];

// 小测验题目：想加新题，照格式加一项即可（options 的顺序会自动打乱）
const QUESTIONS = [
  { q: "In the anatomical position, which way do the palms face?", options: ["Forward", "Backward", "Toward the body", "It doesn't matter"], a: "Forward",
    why: "In the anatomical position the arms hang at the sides with the palms facing forward, so the radius and ulna lie side by side." },
  { q: "The nose is ___ to the eyes.", options: ["Medial", "Lateral"], a: "Medial",
    why: "The nose sits on the midline, closer to it than the eyes, so it is medial to them." },
  { q: "The wrist is ___ to the elbow.", options: ["Distal", "Proximal"], a: "Distal",
    why: "The farther from the root of the limb (the shoulder), the more distal. The wrist is farther from the shoulder than the elbow is." },
  { q: "The skin is ___ to the muscles.", options: ["Superficial", "Deep"], a: "Superficial",
    why: "Closer to the body surface is superficial. The skin is on the outside, so it is superficial to the muscles." },
  { q: "In the anatomical position, which side of the hand is the thumb on?", options: ["Lateral (radial)", "Medial (ulnar)"], a: "Lateral (radial)",
    why: "With the palms facing forward, the thumb is farther from the midline — lateral, also called radial." },
  { q: "Which plane divides the body into left and right parts?", options: ["Sagittal", "Coronal", "Transverse"], a: "Sagittal",
    why: "A sagittal plane runs front to back and splits the body into left and right parts. The one exactly through the middle is the midsagittal (median) plane." },
  { q: "Which plane divides the body into front and back parts?", options: ["Coronal", "Sagittal", "Transverse"], a: "Coronal",
    why: "A coronal (frontal) plane runs side to side and splits the body into anterior and posterior parts." },
  { q: "A CT scan shows the body as a stack of slices. Which plane are those slices usually in?", options: ["Transverse (axial)", "Sagittal", "Coronal"], a: "Transverse (axial)",
    why: "CT usually scans across the body slice by slice, so the images are transverse — also called axial or horizontal." },
  { q: "The sternum is ___ to the vertebral column.", options: ["Anterior", "Posterior"], a: "Anterior",
    why: "The sternum is at the front of the chest and the vertebral column is at the back." },
  { q: "In a picture of a person facing you, which side of the picture is their right shoulder on?", options: ["My left", "My right"], a: "My left",
    why: "Left and right always mean the left and right of the person being described. When they face you, their right side is on your left." },
  { q: "The heart is ___ to the diaphragm.", options: ["Superior", "Inferior"], a: "Superior",
    why: "The diaphragm is the sheet of muscle between the chest and the abdomen. The heart is in the chest, above it." },
  { q: "\"The endocardium is the innermost layer of the heart wall.\" Which pair of terms is this about?", options: ["Internal / External", "Medial / Lateral"], a: "Internal / External",
    why: "For the inside and outside of hollow organs, use internal / external. Medial / lateral is about distance from the midline." },
  { q: "The little toe is on the ___ side of the foot.", options: ["Fibular (lateral)", "Tibial (medial)"], a: "Fibular (lateral)",
    why: "The little toe is farther from the midline, so it is lateral. The lateral bone of the leg is the fibula, so this side is called fibular." },
];

/* ================= 示意图（本站自绘） ================= */
(function () {
  const W = 260, H = 440;
  const C = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}"/>`;
  const E = (cx, cy, rx, ry, rot = 0) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"${rot ? ` transform="rotate(${rot} ${cx} ${cy})"` : ""}/>`;
  const P = (d) => `<path d="${d}"/>`;
  const f = (n) => Math.round(n * 10) / 10;
  function K(x1, y1, x2, y2, w1, w2 = w1) {
    const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len, ny = dx / len, a = w1 / 2, b = w2 / 2;
    return `<path d="M${f(x1 + nx * a)},${f(y1 + ny * a)} L${f(x2 + nx * b)},${f(y2 + ny * b)} L${f(x2 - nx * b)},${f(y2 - ny * b)} L${f(x1 - nx * a)},${f(y1 - ny * a)} Z"/>` + C(x1, y1, f(a)) + C(x2, y2, f(b));
  }
  const mirror = (s) => `<g transform="matrix(-1 0 0 1 ${W} 0)">${s}</g>`;

  // 正面人形（手掌朝前、拇指朝外）
  const halfFront = E(84, 104, 14, 13) + K(83, 108, 72, 190, 19, 14) + K(72, 190, 62, 270, 14, 11) +
    E(59, 290, 10, 19, 6) + K(53, 276, 45, 293, 6.5, 5.5) + K(117, 244, 112, 338, 30, 20) + K(112, 338, 111, 408, 20, 12) + E(108, 418, 12, 10);
  const FRONT = E(130, 42, 22, 27) + K(130, 64, 130, 84, 17, 19) +
    P("M100,86 C112,80 148,80 160,86 C172,90 177,98 176,110 L170,152 C165,172 157,184 155,196 C159,210 164,222 164,236 L160,254 L100,254 L96,236 C96,222 101,210 105,196 C103,184 95,172 90,152 L84,110 C83,98 88,90 100,86 Z") +
    halfFront + mirror(halfFront);
  // 侧面人形（面朝右）
  const SIDE = E(131, 42, 23, 27) + P("M150,34 L163,50 L151,53 Z") + K(126, 64, 124, 86, 17, 19) +
    P("M108,86 L144,86 C152,98 155,122 151,142 C147,162 149,182 151,198 C155,216 153,234 146,252 L106,252 C99,236 97,216 102,198 C106,178 104,152 104,132 C104,112 104,96 108,86 Z") +
    K(126, 98, 126, 190, 20, 15) + K(126, 190, 129, 270, 15, 11) + E(131, 290, 8, 19) +
    K(126, 238, 128, 340, 38, 22) + K(128, 340, 124, 408, 22, 13) + E(138, 420, 22, 8);

  // 右前臂和手（手掌朝前：拇指在图的左边）
  const FOREARM = K(130, 14, 128, 262, 72, 58) + E(128, 302, 40, 46) + K(94, 290, 68, 338, 18, 15) +
    K(107, 330, 104, 392, 15, 13) + K(124, 334, 124, 402, 15, 13) + K(141, 332, 144, 394, 14, 12) + K(157, 322, 162, 374, 12, 11);
  // 右小腿和脚（正面：大脚趾在图的右边，靠近身体正中线）
  const SHIN = K(128, 14, 130, 322, 72, 40) + E(132, 356, 44, 26) +
    C(164, 380, 10) + C(146, 385, 7.5) + C(130, 387, 7) + C(115, 385, 6.5) + C(101, 380, 6);
  const bones = (s) => `<g class="bn-e">${s}</g><g class="bn-f">${s}</g>`;

  function sil(body, clip) {
    // clip = [{ id, x, y, w, h, cls }]：把人形分块染色（切面图用）
    if (!clip) return `<g class="e">${body}</g><g class="f">${body}</g>`;
    return `<defs>${clip.map((c) => `<clipPath id="${c.id}"><rect x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}"/></clipPath>`).join("")}</defs>
      <g class="e">${body}</g>${clip.map((c) => `<g class="f ${c.cls}" clip-path="url(#${c.id})">${body}</g>`).join("")}`;
  }
  const arrowHead = (x, y, ang) => `<path class="ah" d="M0,0 L-11,-6 L-11,6 Z" transform="translate(${x} ${y}) rotate(${ang})"/>`;
  // 双向箭头
  function dbl(x1, y1, x2, y2) {
    const ang = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    return `<line class="arrow" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>` + arrowHead(x2, y2, ang) + arrowHead(x1, y1, ang + 180);
  }
  function one(x1, y1, x2, y2) {
    const ang = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    return `<line class="arrow" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>` + arrowHead(x2, y2, ang);
  }
  const T = (x, y, s, size = 15, anchor = "middle", cls = "") => `<text x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}"${cls ? ` class="${cls}"` : ""}>${s}</text>`;
  const svg = (inner, vb = `0 0 ${W} ${H}`, label = "") => `<svg class="fig-sil" viewBox="${vb}" role="img" aria-label="${label}">${inner}</svg>`;

  const FIG = {
    pose: () => svg(sil(FRONT) + `<line class="guide" x1="130" y1="4" x2="130" y2="436"/>`, `0 0 ${W} ${H}`, "The anatomical position"),
    updown: () => svg(sil(FRONT) + dbl(236, 26, 236, 414) + T(256, 16, "Superior", 14, "end") + T(256, 436, "Inferior", 14, "end"),
      undefined, "Superior and inferior"),
    antpost: () => svg(sil(SIDE) + dbl(34, 160, 226, 160) + T(30, 146, "Posterior", 14, "start") + T(230, 146, "Anterior", 14, "end") +
      T(30, 182, "(dorsal)", 11, "start", "en2") + T(230, 182, "(ventral)", 11, "end", "en2") + T(250, 436, "Side view · facing right →", 12, "end"),
      undefined, "Anterior and posterior, side view"),
    medlat: () => svg(sil(FRONT) + `<line class="guide" x1="130" y1="4" x2="130" y2="424"/>` + T(130, 438, "Midline", 12) +
      one(138, 150, 246, 150) + one(122, 150, 14, 150) + T(250, 138, "Lateral", 14, "end") + T(10, 138, "Lateral", 14, "start") +
      T(130, 186, "Medial", 14), undefined, "Medial and lateral"),
    inout: () => svg(`<g class="e">${C(130, 200, 90)}</g><g class="f">${C(130, 200, 90)}</g>
      <circle cx="130" cy="200" r="55" fill="none" stroke="#e3a99a" stroke-width="7"/>
      <circle cx="130" cy="200" r="87" fill="none" stroke="#d9bf86" stroke-width="6"/>
      <circle cx="130" cy="200" r="51.5" fill="#fffdf8"/>` +
      T(130, 196, "Cavity", 15) + T(130, 100, "Wall of a hollow organ", 13) +
      one(190, 236, 150, 236) + one(190, 236, 238, 236) + T(146, 256, "Internal", 13) + T(256, 256, "External", 13, "end") +
      T(130, 318, "Internal = toward the cavity", 12) + T(130, 334, "External = away from the cavity", 12) +
      T(130, 356, "e.g. the heart wall:", 11) + T(130, 371, "endocardium (pink) = internal layer", 11) + T(130, 386, "epicardium (gold) = external layer", 11),
      `0 84 ${W} 312`, "Internal and external: cross-section of a hollow organ"),
    supdeep: () => svg(`<circle cx="130" cy="200" r="96" fill="#f2dcc8" stroke="#c9a88c" stroke-width="2"/>
      <circle cx="130" cy="200" r="88" fill="#f7ecd2"/><circle cx="130" cy="200" r="72" fill="#dfb3a6"/>
      <path d="M130,128 V178 M79,149 L114,184 M181,149 L146,184" stroke="#c99a8d" stroke-width="1.5" fill="none"/>
      <circle cx="130" cy="200" r="22" fill="#f3ebd9" stroke="#a39374" stroke-width="2"/><circle cx="130" cy="200" r="10" fill="#ecd3a9"/>
      <path d="M62,128 L72,141" stroke="#8a7a60" stroke-width="1.2"/>` +
      one(148, 218, 226, 296) + T(252, 322, "Deep → superficial", 12, "end") +
      T(130, 94, "Skin (most superficial)", 12) + T(8, 122, "Fat under the skin", 11, "start") + T(182, 205, "Muscle", 12) + T(130, 242, "Bone (deepest)", 11) +
      T(8, 344, "Cross-section of the thigh", 11, "start"), `0 76 ${W} 278`, "Superficial and deep: cross-section of the thigh"),
    proxdist: () => svg(sil(FRONT) + one(82, 104, 54, 306) + one(148, 250, 154, 424) +
      T(96, 100, "Proximal", 12, "start") + T(30, 326, "Distal", 12, "start") + T(170, 262, "Proximal", 12, "start") + T(170, 426, "Distal", 12, "start"),
      undefined, "Proximal and distal"),
    ulnrad: () => svg(sil(FOREARM) + bones(K(113, 26, 107, 252, 9, 19) + K(148, 22, 151, 252, 18, 9)) +
      T(105, 120, "Radius", 11) + T(152, 120, "Ulna", 11) +
      one(92, 180, 22, 180) + one(168, 180, 238, 180) + T(20, 166, "Radial", 15, "start") + T(240, 166, "Ulnar", 15, "end") +
      T(20, 200, "thumb side", 11, "start") + T(240, 200, "little-finger", 11, "end") + T(240, 214, "side", 11, "end") +
      T(130, 434, "Right forearm, palm facing forward", 12), undefined, "Ulnar and radial sides of the forearm"),
    tibfib: () => svg(sil(SHIN) + bones(K(140, 26, 141, 318, 28, 17) + E(146, 318, 6, 10) + K(104, 36, 109, 330, 9, 9) + E(108, 334, 6, 10)) +
      T(140, 150, "Tibia", 11) + T(106, 190, "Fibula", 11) +
      one(92, 240, 22, 240) + one(168, 240, 238, 240) + T(20, 226, "Fibular", 15, "start") + T(240, 226, "Tibial", 15, "end") +
      T(20, 260, "lateral", 11, "start") + T(240, 260, "medial", 11, "end") + T(130, 434, "Right leg, front view", 12), undefined, "Tibial and fibular sides of the leg"),
  };

  // 三个切面
  const PLANES = [
    { name: "Sagittal plane", text: "A vertical plane running front to back. It divides the body into <b>left and right</b> parts. The one exactly through the middle, making two equal halves, is the <b>midsagittal (median) plane</b>. (The person is facing you, so their right half is on your left.)",
      fig: () => svg(sil(FRONT, [{ id: "pl-a", x: 0, y: 0, w: 130, h: H, cls: "a" }, { id: "pl-b", x: 130, y: 0, w: 130, h: H, cls: "b" }]) +
        `<line class="cut" x1="130" y1="0" x2="130" y2="440"/>` + T(62, 40, "Right", 16) + T(198, 40, "Left", 16), undefined, "Sagittal plane") },
    { name: "Coronal plane", text: "A vertical plane running side to side. It divides the body into <b>anterior and posterior</b> (front and back) parts. It is also called the <b>frontal plane</b>, because it is parallel to the forehead.",
      fig: () => svg(sil(SIDE, [{ id: "pl-c", x: 0, y: 0, w: 127, h: H, cls: "b" }, { id: "pl-d", x: 127, y: 0, w: 133, h: H, cls: "a" }]) +
        `<line class="cut" x1="127" y1="0" x2="127" y2="440"/>` + T(62, 40, "Posterior", 15) + T(198, 40, "Anterior", 15), undefined, "Coronal plane") },
    { name: "Transverse plane", text: "A plane parallel to the ground. It divides the body into <b>superior and inferior</b> (upper and lower) parts. It is also called the horizontal or <b>axial</b> plane — most CT images are in this plane.",
      fig: () => svg(sil(FRONT, [{ id: "pl-e", x: 0, y: 0, w: W, h: 200, cls: "a" }, { id: "pl-f", x: 0, y: 200, w: W, h: 240, cls: "b" }]) +
        `<line class="cut" x1="0" y1="200" x2="260" y2="200"/>` + T(218, 188, "Superior", 15) + T(218, 226, "Inferior", 15), undefined, "Transverse plane") },
  ];

  /* ---------- 页面 ---------- */
  document.getElementById("pose-fig").innerHTML = FIG.pose();

  const chips = document.getElementById("term-chips");
  const fig = document.getElementById("term-fig");
  const text = document.getElementById("term-text");
  chips.innerHTML = TERMS.map((t) => `<button class="chip" data-t="${t.id}">${AN.esc(t.name)}</button>`).join("");
  function show(id) {
    const t = TERMS.find((x) => x.id === id);
    chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c.dataset.t === id));
    fig.innerHTML = FIG[id]();
    text.innerHTML = `
      <h3>${AN.esc(t.name)}</h3>
      ${t.also ? `<p style="color:var(--muted);font-size:.92rem">${AN.esc(t.also)}</p>` : ""}
      <h4>Meaning</h4><p>${AN.esc(t.mean)}</p>
      <h4>Example</h4><p>${AN.esc(t.eg)}</p>`;
  }
  chips.addEventListener("click", (e) => { const c = e.target.closest(".chip"); if (c) show(c.dataset.t); });
  show(TERMS[0].id);

  document.getElementById("plane-cards").innerHTML = PLANES.map((p) => `
    <div class="card">${p.fig()}<h3>${p.name}</h3><p>${p.text}</p></div>`).join("");

  document.getElementById("term-table").innerHTML = `
    <tr><th>Terms</th><th>Meaning</th><th>Example</th></tr>
    ${TERMS.map((t) => `<tr><td><b>${AN.esc(t.name)}</b></td><td>${AN.esc(t.mean)}</td><td>${AN.esc(t.eg)}</td></tr>`).join("")}`;

  AN.quiz(document.getElementById("quiz"), () => AN.shuffle(QUESTIONS).slice(0, 10), { href: "#terms", text: "Review the terms" });
})();
