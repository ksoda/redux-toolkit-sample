import { h, render } from "preact";
import htm from "htm";
import { store, actions } from "./counter";
const html = htm.bind(h);
// Create your main app component
function Counter({ count }) {
  return html`
    <h1 style="color: red">${count}</h1>
  `;
}
// Inject your application into the an element with the id `app`.

function init() {
  App();
  document.getElementById("increment").addEventListener("click", e => {
    console.debug(e);
    store.dispatch(actions.increment());
  });
  store.subscribe(App);
}

function App() {
  const count = store.getState();
  render(
    html`
      <${Counter} count=${count} />
      <button id="increment">+</button>
    `,
    document.querySelector("main")
  );
}

document.addEventListener("DOMContentLoaded", init);
