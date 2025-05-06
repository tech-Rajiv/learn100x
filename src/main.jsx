import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContentContext from "./contexts/ContentContext.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <ContentContext>
    <HashRouter>
      <App />
    </HashRouter>
  </ContentContext>
);
