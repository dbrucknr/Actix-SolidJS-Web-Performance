import { Router } from "solid-app-router";
import { render } from "solid-js/web";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as Node
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
