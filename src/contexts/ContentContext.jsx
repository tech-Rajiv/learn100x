import React, { createContext, useEffect, useState } from "react";
import { objectContent } from "../utils/Constants.jsx";

export const contextContent = createContext();

function ContentContext({ children }) {
  const technology = Object.keys(objectContent);
  const [selectedTechnology, setSelectedTechnology] = useState();
  const [selectedTopic, setSelectedTopic] = useState();
  const [showTopic, setShowTopic] = useState();

  const [content, setContent] = useState()
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
        setContent
      }}
    >
      {children}
    </contextContent.Provider>
  );
}

export default ContentContext;
