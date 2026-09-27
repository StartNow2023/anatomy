// Roadmap: to change a stage, edit its entry in STAGES below
// Once a stage has its own page, set href to the page's file name and the card gets a "Start" button
const STAGES = [
  { n: 0, title: "Anatomical Terms", href: "terms.html",
    learn: "The anatomical position; superior / inferior, anterior / posterior, medial / lateral, proximal / distal; the three planes",
    goal: "You can describe where the clavicle is compared with the sternum, using the right terms" },
  { n: 1, title: "Bones", href: "bones.html",
    learn: "The major bones of the body and the bony landmarks you can feel",
    goal: "You can find a dozen or more bony landmarks on your own body" },
  { n: 2, title: "Joints",
    learn: "How the big joints are built and how they move: shoulder, elbow, hip and knee",
    goal: "You can explain why the knee bends but doesn't twist sideways" },
  { n: 3, title: "Muscles",
    learn: "Where the main muscles start and end (origin and insertion) and what they do",
    goal: "Watching a movement, you can say which muscles are doing the work" },
  { n: 4, title: "Internal Organs",
    learn: "The digestive, respiratory, urinary and reproductive systems",
    goal: "You can name the organs food passes through, from mouth to anus" },
  { n: 5, title: "Heart & Blood Vessels",
    learn: "The heart, the main arteries and veins, and how blood circulates",
    goal: "You can draw the systemic and pulmonary circulations" },
  { n: 6, title: "Sense Organs",
    learn: "How the eye and the ear are built",
    goal: "You know how light and sound are picked up" },
  { n: 7, title: "Nervous System",
    learn: "The brain, the spinal cord and the main peripheral nerves",
    goal: "When a hand goes numb, you can guess which nerve is involved" },
];

(function () {
  const box = document.getElementById("stages");
  const store = AN.store("anatomy-stages-v1");
  let saved = store.get();

  box.innerHTML = STAGES.map((s) => `
    <article class="card stage${s.href ? "" : " soon"}${saved[s.n] ? " done" : ""}" data-n="${s.n}">
      <div class="stage-no">${s.n}</div>
      <div>
        <h3>${AN.esc(s.title)}</h3>
        <p><b>What you'll learn:</b> ${AN.esc(s.learn)}</p>
        <p><b>You've got it when:</b> ${AN.esc(s.goal)}</p>
        <div class="stage-foot">
          <label class="check-item" for="st-${s.n}">
            <input type="checkbox" id="st-${s.n}" data-n="${s.n}" ${saved[s.n] ? "checked" : ""}>
            <span class="box"></span><span class="t"><b>I've learned this</b></span>
          </label>
          ${s.href ? `<a class="btn" href="${s.href}">Start →</a>` : `<span class="tag gold">Page coming soon · study from your textbook for now</span>`}
        </div>
      </div>
    </article>`).join("");

  const boxes = [...box.querySelectorAll("input")];
  function update() {
    const n = boxes.filter((b) => b.checked).length;
    document.getElementById("st-bar").style.width = `${(n / boxes.length) * 100}%`;
    document.getElementById("st-done").textContent = n === boxes.length ? `All done 🎉 ${n}/${boxes.length}` : `Learned ${n} of ${boxes.length} stages`;
  }
  box.addEventListener("change", (e) => {
    if (e.target.type !== "checkbox") return;
    const n = e.target.dataset.n;
    if (e.target.checked) saved[n] = 1; else delete saved[n];
    e.target.closest(".stage").classList.toggle("done", e.target.checked);
    store.set(saved);
    update();
  });
  update();
})();
