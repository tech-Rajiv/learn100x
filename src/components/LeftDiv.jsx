import React, { useContext, useState } from "react";
import CatagoryDiv from "./CatagoryDiv";
import { contextContent } from "../contexts/ContentContext";
import { objectContent } from "../utils/Constants.jsx";

function LeftDiv() {
  const [clickedTech, setClickedTech] = useState()
  const [clickedTopic, setClickedTopic] = useState()
  const {
    technology,
    setSelectedTechnology,
    selectedTechnology,
    setContent,
    setSelectedTopic,
    showTopic,
    setShowTopic,
  } = useContext(contextContent);

  function handelTechnology(e) {
    if (e.target.classList.contains("options")) {
      const selected = e.target.textContent;
      setSelectedTechnology(selected);
      setClickedTech(selected)
      setShowTopic(Object.keys(objectContent[selected]));
    }
  }
  function handelTopic(e) {
    if (e.target.classList.contains("options")) {
      const selected = e.target.textContent;
      setSelectedTopic(selected);
      setClickedTopic(selected)
      setContent(objectContent[selectedTechnology][selected]);
      
    }
  }
  return (
    <div>
      <div onClick={handelTechnology}>
        <CatagoryDiv options={technology} heading={"Technologys"} check={clickedTech}/>
      </div>
      <div onClick={handelTopic}>
        <CatagoryDiv options={showTopic} heading={"Topics"} check={clickedTopic}/>
      </div>
    </div>
  );
}

export default LeftDiv;
