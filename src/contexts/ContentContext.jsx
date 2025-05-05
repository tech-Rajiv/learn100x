import React, { createContext,  useState } from "react";
import { objectContent } from "../utils/index.js";

export const contextContent = createContext();

function ContentContext({ children }) {
  const technology = Object.keys(objectContent);
  const [selectedTechnology, setSelectedTechnology] = useState();
  const [selectedTopic, setSelectedTopic] = useState();
  const [showTopic, setShowTopic] = useState();
  const [openModel, setOpenModel] = useState();

  const [content, setContent] = useState([])
  return (
    <contextContent.Provider
      value={{
        technology,
        selectedTechnology,
        setSelectedTechnology,
        selectedTopic,
        setSelectedTopic,
        content,
        showTopic,setShowTopic,
        setContent,
        openModel,setOpenModel
      }}
    >
      {children}
    </contextContent.Provider>
  );
}

export default ContentContext;
