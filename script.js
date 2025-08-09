const FRAMES = ["daily", "weekly", "monthly"];

function showFrame(frame) {
  document
    .querySelectorAll(".daily-active, .weekly-active, .monthly-active")
    .forEach((el) => (el.style.display = "none"));

  document
    .querySelectorAll(`.${frame}-active`)
    .forEach((el) => (el.style.display = ""));

  document
    .querySelectorAll(".time-filters .filter")
    .forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.frame === frame)
    );
}

document.querySelector(".time-filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  const frame = btn.dataset.frame;
  if (!FRAMES.includes(frame)) return;
  showFrame(frame);
});
