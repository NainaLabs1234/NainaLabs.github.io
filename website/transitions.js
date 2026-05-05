document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

document.addEventListener("click", (e) => {
  const link = e.target.closest("a");

  if (!link || !link.href) return;

  const url = link.href;

  if (url.includes("#") || url.startsWith("javascript")) return;

  e.preventDefault();

  document.body.classList.remove("fade-in");
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = url;
  }, 200);
});
