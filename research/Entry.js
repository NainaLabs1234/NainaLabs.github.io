fetch("entries.json")
  .then(res => res.json())
  .then(entries => {
    const feed = document.getElementById("feed");

    entries.forEach(entry => {
      const card = document.createElement("a");
      card.className = "card";
      card.href = `entry.html?id=${entry.id}`;

      card.innerHTML = `
        <h2>${entry.title}</h2>
        <p>${entry.date}</p>
        <p>${entry.excerpt}</p>
      `;

      feed.appendChild(card);
    });
  });
