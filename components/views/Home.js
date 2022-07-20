import html from "html-literal";
import sharkImage from "../../assets/img/happy-shark-cartoon-character.jpg";

export default st => html`
  <section id="jumbotron">
    <h2>SavvyCoders JavaScript Fullstack Bootcamp</h2>
    <a href="/">"Call to Action" "Button"</a>
  </section>

  <h3>
    The weather in ${st.weather.city} is ${st.weather.description}. Temperature
    is ${st.weather.temp}F, and it feels like ${st.weather.feelsLike}F.
  </h3>

  <img class="cover-img" src="${sharkImage}" />
`;
