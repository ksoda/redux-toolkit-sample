import { h, render } from "preact";
import htm from "htm";
const html = htm.bind(h);
// Create your main app component
function SomePreactComponent(props) {
  return html`
    <h1 style="color: red">Hello, World!</h1>
  `;
}
// Inject your application into the an element with the id `app`.
render(
  html`
    <${SomePreactComponent} />
  `,
  document.getElementById("app")
);
