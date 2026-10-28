// ===== Publications data (newest first). Add new entries at the top. =====
// type: "journal" | "conference" | "workshop". selected: true shows the paper under "Selected".
const PUBLICATIONS = [
  { year: 2026, type: "journal", title: "On the Minimization of Graph Counterfactual Explanations: Theory and a Local Bounded Search Algorithm",
    authors: "R. García, M.A. Prado-Romero, F. Gullo, G. Stilo", venue: "Machine Learning",
    source: "Vol. 115, Article 224, Springer", url: "https://doi.org/10.1007/s10994-026-07157-0" },
  { year: 2026, type: "conference", title: "Exploring Ensemble Strategies for Graph Counterfactual Explanations",
    authors: "M.A. Prado-Romero, B. Prenkaj, G. Stilo", venue: "xAI 2025",
    source: "Explainable Artificial Intelligence, CCIS vol. 2579, Springer", url: "https://doi.org/10.1007/978-3-032-08330-2_9" },
  { year: 2024, type: "conference", selected: true, title: "GRETEL 2.0: Generation and Evaluation of Graph Counterfactual Explanations Evolved",
    authors: "M.A. Prado-Romero, B. Prenkaj, G. Stilo", venue: "ECML PKDD 2024",
    source: "Research Track and Demo Track, LNCS vol. 14948, Springer", url: "https://doi.org/10.1007/978-3-031-70371-3_21" },
  { year: 2024, type: "conference", selected: true, title: "Robust Stochastic Graph Generator for Counterfactual Explanations",
    authors: "M.A. Prado-Romero, B. Prenkaj, G. Stilo", venue: "AAAI 2024",
    source: "Proc. of the 38th AAAI Conference on Artificial Intelligence, pp. 21518–21526", url: "https://doi.org/10.1609/aaai.v38i19.30149" },
  { year: 2024, type: "journal", selected: true, title: "A Survey on Graph Counterfactual Explanations: Definitions, Methods, Evaluation, and Research Challenges",
    authors: "M.A. Prado-Romero, B. Prenkaj, G. Stilo, F. Giannotti", venue: "ACM Computing Surveys",
    source: "Vol. 56(7), Article 171, 37 pages", url: "https://doi.org/10.1145/3618105" },
  { year: 2023, type: "conference", title: "Are Generative-Based Graph Counterfactual Explainers Worth It?",
    authors: "M.A. Prado-Romero, B. Prenkaj, G. Stilo", venue: "ECML PKDD 2023",
    source: "Joint European Conference on Machine Learning and Knowledge Discovery in Databases, pp. 152–170, Springer", url: "https://doi.org/10.1007/978-3-031-74633-8_10" },
  { year: 2023, type: "workshop", title: "Revisiting CounteRGAN for Counterfactual Explainability of Graphs",
    authors: "M.A. Prado-Romero, B. Prenkaj, G. Stilo", venue: "ICLR 2023 Tiny Papers",
    source: "Tiny Papers track at ICLR 2023", url: "https://openreview.net/pdf?id=d0m0Rl15q3g" },
  { year: 2023, type: "conference", title: "Developing and Evaluating Graph Counterfactual Explanation with GRETEL",
    authors: "M.A. Prado-Romero, B. Prenkaj, G. Stilo", venue: "WSDM 2023",
    source: "Proc. of the 16th ACM Int. Conf. on Web Search and Data Mining", url: "https://doi.org/10.1145/3539597.3573026" },
  { year: 2022, type: "conference", selected: true, title: "GRETEL: Graph Counterfactual Explanation Evaluation Framework",
    authors: "M.A. Prado-Romero, G. Stilo", venue: "CIKM 2022",
    source: "Proc. of the 31st ACM Int. Conf. on Information and Knowledge Management", url: "https://doi.org/10.1145/3511808.3557608" },
  { year: 2022, type: "workshop", title: "Ensemble Approaches for Graph Counterfactual Explanations",
    authors: "M.A. Prado-Romero, B. Prenkaj, G. Stilo, A. Celi, E. Estevanell-Valladares, D.A. Valdés-Pérez", venue: "XAI.it 2022",
    source: "Proc. of the 3rd Italian Workshop on Explainable AI, co-located with AIxIA", url: "https://ceur-ws.org/Vol-3277/" },
  { year: 2020, type: "journal", title: "A Time-sensitive Model to Predict Topic Popularity in News Providers",
    authors: "M.A. Prado-Romero, A. Coto-Santiesteban, A. Celi, G. Stilo", venue: "Intelligent Data Analysis",
    source: "Vol. 24, no. S1, pp. 123–140, IOS Press", url: "https://dx.doi.org/10.3233/IDA-200012" },
  { year: 2019, type: "conference", title: "TSTM: A Model to Predict Topics’ Popularity in News Providers",
    authors: "M.A. Prado-Romero, A. Celi, G. Stilo, A. Coto-Santiesteban", venue: "CIARP 2019",
    source: "Proc. of the 24th Iberoamerican Congress on Pattern Recognition, Springer", url: "https://doi.org/10.1007/978-3-030-33904-3_9" },
  { year: 2018, type: "workshop", title: "Identifying Twitter Users Influence and Open Mindedness Using Anomaly Detection",
    authors: "M.A. Prado-Romero, A.F. Oliva, L.G. Hernández", venue: "IWAIPR 2018",
    source: "Proc. of the 6th Int. Workshop on Artificial Intelligence and Pattern Recognition, Springer", url: "https://doi.org/10.1007/978-3-030-01132-1_19" },
  { year: 2017, type: "conference", title: "Discovering Bitcoin Mixing Using Anomaly Detection",
    authors: "M.A. Prado-Romero, C. Doerr, A. Gago-Alonso", venue: "CIARP 2017",
    source: "Proc. of the 22nd Iberoamerican Congress on Pattern Recognition, Springer", url: "https://doi.org/10.1007/978-3-319-75193-1_64" },
  { year: 2016, type: "conference", title: "Community Feature Selection for Anomaly Detection in Attributed Graphs",
    authors: "M.A. Prado-Romero, A. Gago-Alonso", venue: "CIARP 2016",
    source: "Proc. of the 21st Iberoamerican Congress on Pattern Recognition, Springer", url: "https://doi.org/10.1007/978-3-319-52277-7_14" },
  { year: 2016, type: "conference", title: "Detecting Contextual Collective Anomalies at a Glance",
    authors: "M.A. Prado-Romero, A. Gago-Alonso", venue: "ICPR 2016",
    source: "Proc. of the 23rd Int. Conf. on Pattern Recognition, IEEE", url: "https://doi.org/10.1109/ICPR.2016.7900017" },
];

const ME = "M.A. Prado-Romero";
const TYPE_LABEL = { journal: "Journal", conference: "Conference", workshop: "Workshop" };
let pubType = "all";

function esc(s) {
  return s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function renderPublications() {
  const q = document.getElementById("pubSearch").value.trim().toLowerCase();
  const items = PUBLICATIONS.filter(p =>
    (pubType === "all" || (pubType === "selected" ? p.selected : p.type === pubType)) &&
    (!q || [p.title, p.authors, p.venue, p.source, String(p.year)].join(" ").toLowerCase().includes(q)));

  let html = "", lastYear = null;
  for (const p of items) {
    if (p.year !== lastYear) { html += `<h3 class="year">${p.year}</h3>`; lastYear = p.year; }
    const authors = esc(p.authors).replace(ME, `<b>${ME}</b>`);
    const star = p.selected ? `<svg class="star" role="img" aria-label="Selected paper"><use href="#i-star"/></svg>` : "";
    html += `<article class="pub">
      <a class="pub-title" href="${p.url}" target="_blank" rel="noopener">${esc(p.title)}</a>${star}
      <div class="pub-authors">${authors}</div>
      <div class="pub-meta"><span class="type type-${p.type}">${TYPE_LABEL[p.type]}</span>
        <span class="venue">${esc(p.venue)}</span><span class="src">${esc(p.source)}</span></div>
    </article>`;
  }
  document.getElementById("pubList").innerHTML = html;
  document.getElementById("pubEmpty").style.display = items.length ? "none" : "block";
  const total = PUBLICATIONS.length;
  document.getElementById("pubCount").textContent =
    items.length === total ? `${total} publications` : `Showing ${items.length} of ${total} publications`;
}

document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
  pubType = btn.dataset.type;
  document.querySelectorAll(".filter").forEach(b => b.setAttribute("aria-pressed", b === btn));
  renderPublications();
}));
document.getElementById("pubSearch").addEventListener("input", renderPublications);

// ===== Tabs (hash-based, so links like /#publications work) =====
// Follows the WAI-ARIA tabs pattern: one tab in the Tab order, arrows/Home/End move between tabs.
const tabs = [...document.querySelectorAll(".tab")];
const panels = [...document.querySelectorAll(".panel")];
const tabBar = document.querySelector(".tabs");

function showTab(id, { updateHash = true, scroll = true } = {}) {
  if (!panels.some(p => p.id === "panel-" + id)) id = "about";
  tabs.forEach(t => {
    const on = t.dataset.tab === id;
    t.setAttribute("aria-selected", on);
    t.tabIndex = on ? 0 : -1;
  });
  panels.forEach(p => p.classList.toggle("active", p.id === "panel-" + id));
  if (updateHash) history.replaceState(null, "", "#" + id);

  // Center the active tab inside the (horizontally scrollable) tab bar
  const active = tabs.find(t => t.dataset.tab === id);
  tabBar.scrollLeft = active.offsetLeft - (tabBar.clientWidth - active.offsetWidth) / 2;

  // If the reader had scrolled past the top of the content, bring the new section's start into view
  if (scroll) {
    const top = tabBar.parentElement.getBoundingClientRect().top + window.scrollY - 12;
    if (window.scrollY > top) window.scrollTo({ top, behavior: "instant" });
  }
}

tabs.forEach(t => t.addEventListener("click", () => showTab(t.dataset.tab)));
window.addEventListener("hashchange", () => showTab(location.hash.slice(1), { updateHash: false }));

tabBar.addEventListener("keydown", e => {
  const i = tabs.indexOf(document.activeElement);
  if (i < 0) return;
  const keys = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
  if (!(e.key in keys)) return;
  e.preventDefault();
  const next = tabs[(keys[e.key] + tabs.length) % tabs.length];
  next.focus();
  showTab(next.dataset.tab);
});

// In-page links to another tab, e.g. <a href="#projects" data-goto="projects">
document.querySelectorAll("[data-goto]").forEach(a => a.addEventListener("click", e => {
  e.preventDefault();
  showTab(a.dataset.goto);
  tabs.find(t => t.dataset.tab === a.dataset.goto).focus();
}));

// Buttons such as "Show related papers" open Publications pre-filtered
document.querySelectorAll("[data-pub-filter]").forEach(btn => btn.addEventListener("click", () => {
  document.getElementById("pubSearch").value = btn.dataset.pubFilter;
  pubType = "all";
  document.querySelectorAll(".filter").forEach(b => b.setAttribute("aria-pressed", b.dataset.type === "all"));
  renderPublications();
  showTab("publications");
  tabs.find(t => t.dataset.tab === "publications").focus();
}));

// ===== CV download: only show the button once the PDF is confirmed to exist =====
const cvLink = document.getElementById("cvLink");
fetch(cvLink.getAttribute("href"), { method: "HEAD" })
  .then(r => { if (r.ok) cvLink.classList.add("ready"); })
  .catch(() => {});

// ===== Theme toggle (sun/moon in the corner) =====
const toggle = document.getElementById("themeToggle");
const currentTheme = () => document.documentElement.dataset.theme ||
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
function labelToggle() {
  const label = currentTheme() === "dark" ? "Switch to light mode" : "Switch to dark mode";
  toggle.setAttribute("aria-label", label);
  toggle.title = label;
}
toggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
  labelToggle();
});
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", labelToggle);
labelToggle();

// ===== Footer: year and "last updated" come from the published file itself =====
document.getElementById("year").textContent = new Date().getFullYear();
const modified = new Date(document.lastModified);
if (!isNaN(modified)) {
  document.getElementById("updated").textContent =
    "Last updated " + modified.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) + ".";
}

// ===== At-a-glance numbers (About tab) =====
const RESEARCH_START = 2013;  // first ML research role (Advanced Technologies Application Center)
function renderStats() {
  // Same venue in different years counts once: "ECML PKDD 2023" and "ECML PKDD 2024" -> "ECML PKDD"
  const venues = new Set(PUBLICATIONS.map(p => p.venue.replace(/\s*\b(19|20)\d{2}\b/, "").trim().toLowerCase()));
  document.getElementById("statPubs").textContent = PUBLICATIONS.length;
  document.getElementById("statVenues").textContent = venues.size;
  document.getElementById("statYears").textContent = new Date().getFullYear() - RESEARCH_START;
  // GitHub stars come from stats.json, refreshed daily by .github/workflows/update-stats.yml.
  // If the file is missing or unreadable the tile simply stays hidden.
  fetch("stats.json", { cache: "no-cache" })
    .then(r => (r.ok ? r.json() : null))
    .then(d => {
      if (d && Number.isFinite(d.gretel_stars)) {
        document.getElementById("statStars").textContent = d.gretel_stars.toLocaleString("en");
        document.getElementById("statStarsWrap").hidden = false;
      }
    })
    .catch(() => {});
}

// ===== Init =====
renderPublications();
renderStats();
showTab(location.hash.slice(1) || "about", { updateHash: false, scroll: false });
