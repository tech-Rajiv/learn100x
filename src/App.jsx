import { useContext } from "react";
import "./App.css";
import Header from './components/Header.jsx'
import Model from "./components/Model.jsx";
import Home from './screens/Home.jsx'
import { contextContent } from "./contexts/ContentContext.jsx";

function App() {
  const {openModel} = useContext(contextContent)
  return (
    <div className="">
      <Header />
      {openModel && <Model />}
      <Home />
    </div>
  );
}

export default App;
