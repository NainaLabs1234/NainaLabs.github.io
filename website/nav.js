function injectNav(activePage) {
  const nav = document.createElement("div");

  nav.className = "global-nav";

  nav.innerHTML = `
    <a href="../website/index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>
    <a href="../research/index.html" class="${activePage === 'research' ? 'active' : ''}">Research</a>
    <a href="../studio/index.html" class="${activePage === 'studio' ? 'active' : ''}">Studio</a>
  `;

  document.body.prepend(nav);
}
