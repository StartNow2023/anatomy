// Anatomy Notes · shared helpers: escaping, shuffling, quizzes
const AN = {};

AN.esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

AN.shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};

// Quiz: build() returns a fresh set of questions each round: [{ q, options, a, why, visual? }]
// review = { href, text } is the "go back and review" button on the results screen
AN.quiz = function (box, build, review) {
  let order, idx, score;

  function start() {
    order = build();
    idx = 0; score = 0;
    show();
  }

  function show() {
    const q = order[idx];
    box.innerHTML = `
      <div class="q-meta"><span>Question ${idx + 1} / ${order.length}</span><span>Score ${score}</span></div>
      <div class="progress"><span style="width:${(idx / order.length) * 100}%"></span></div>
      ${q.visual || ""}
      <p class="q-text">${AN.esc(q.q)}</p>
      <div class="options">${AN.shuffle(q.options).map((o) => `<button class="option" data-o="${AN.esc(o)}">${AN.esc(o)}</button>`).join("")}</div>
      <div id="fb"></div>`;
    box.querySelector(".options").onclick = (e) => {
      const b = e.target.closest(".option");
      if (b && !b.disabled) answer(b.dataset.o);
    };
  }

  function answer(pick) {
    const q = order[idx];
    const ok = pick === q.a;
    if (ok) score++;
    box.querySelectorAll(".option").forEach((b) => {
      b.disabled = true;
      if (b.dataset.o === q.a) b.classList.add("right");
      else if (b.dataset.o === pick) b.classList.add("wrong");
    });
    box.querySelector(".q-meta span:last-child").textContent = `Score ${score}`;
    const last = idx === order.length - 1;
    box.querySelector("#fb").innerHTML = `
      <div class="feedback ${ok ? "ok" : "no"}">
        <b>${ok ? "✓ Correct!" : `✗ Not quite — the answer is “${AN.esc(q.a)}”.`}</b>${AN.esc(q.why)}
      </div>
      <div style="text-align:right"><button class="btn" id="next">${last ? "See my score" : "Next →"}</button></div>`;
    const next = box.querySelector("#next");
    next.focus({ preventScroll: true });
    next.onclick = () => { if (last) result(); else { idx++; show(); box.scrollIntoView({ behavior: "smooth", block: "start" }); } };
  }

  function result() {
    const n = order.length;
    const pct = score / n;
    const msg = pct === 1 ? "Perfect score — you've passed this stage! 🎉"
      : pct >= 0.8 ? "Great work! Review the ones you missed and you're there."
      : pct >= 0.5 ? "Not bad. Read through the page again, then have another go."
      : "Just getting started — go back up, take your time, and try again.";
    box.innerHTML = `
      <div class="result">
        <div class="progress"><span style="width:100%"></span></div>
        <p style="color:var(--muted);margin:24px 0 0">Your score</p>
        <div class="score">${score} / ${n}</div>
        <p>${msg}</p>
        <p style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:20px">
          <button class="btn" id="again">Try again</button>
          <a class="btn ghost" href="${review.href}">${review.text}</a>
        </p>
      </div>`;
    box.querySelector("#again").onclick = start;
  }

  start();
};

// Saved ticks (kept only in the visitor's own browser)
AN.store = (key) => ({
  get() { try { return JSON.parse(localStorage.getItem(key)) || {}; } catch (e) { return {}; } },
  set(v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} },
  clear() { try { localStorage.removeItem(key); } catch (e) {} },
});
