const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("entries.json")
  .then(res => res.json())
  .then(entries => {

    const entry = entries.find(e => e.id === id);
    const container = document.getElementById("entry");

    if (!entry) {
      container.innerHTML = "<h1>Not found</h1>";
      return;
    }

    container.innerHTML = `
      <h1 class="title">${entry.title}</h1>
      <p style="opacity:0.5">${entry.date}</p>
      <hr style="opacity:0.1; margin:20px 0">

      ${entry.content.map(p => `<p>${p}</p>`).join("")}
    `;
  });
