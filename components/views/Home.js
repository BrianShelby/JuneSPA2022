import html from "html-literal";
import sharkImage from "../../assets/img/happy-shark-cartoon-character.jpg";

export default () => html`
  <section id="jumbotron">
    <h2>SavvyCoders JavaScript Fullstack Bootcamp</h2>
    <a href="/">"Call to Action" "Button"</a>
  </section>
  <img class="cover-img" src="${sharkImage}" />
`;
