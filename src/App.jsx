import { useContext } from "react";
import Header from "./components/Header.jsx";
import Model from "./components/Model.jsx";
import Home from "./screens/Home.jsx";
import { contextContent } from "./contexts/ContentContext.jsx";
import { Route, Routes } from "react-router-dom";
import SavedContent from "./screens/SavedContent.jsx";

function App() {
  const { openModel } = useContext(contextContent);
  return (
    <div className="">
      <Header />
      {openModel && <Model />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedcontent" element={<SavedContent />} />
      </Routes>
    </div>
  );
}

export default App;
