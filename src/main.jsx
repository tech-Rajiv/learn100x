
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContentContext from "./contexts/ContentContext.jsx";

createRoot(document.getElementById("root")).render(
  <ContentContext>
      <App />
  </ContentContext>
);
