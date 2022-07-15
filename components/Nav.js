import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          links =>
            `<li><a href="/${links.title}" title="${links.title}" data-navigo>${links.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
