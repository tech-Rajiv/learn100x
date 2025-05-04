import React, { useContext } from "react";
import { contextContent } from "../contexts/ContentContext";

function ContentDiv() {
  const { content } = useContext(contextContent);
  return (
    <div className="p-2 sm:px-5">
      {content.map((item, index) => {
        if (item.type == "heading")
          return (
            <h1 key={index} className="text-xl text-[#40667b] sm:mt-5 font-bold mb-5 mt-5">{item.content}</h1>
          );
        if (item.type == "paragraph")
          return <div key={index} className="text-xl  mt-3 sm:mt-2 font-mono">{item.content}</div>;
        if (item.type == "image")
          return (
            <div key={index} className="max-w-sm  mx-auto mt-5 sm:mt-5 rounded-md overflow-hidden">
              <img
                className="w-full"
                loading="lazy"
                src={item.content}
                alt="image"
              />            </div>
          );
        if (item.type == "space")
          return (
            <div key={index} className="mt-10 mb-10">
              <hr className="text-zinc-400" />
            </div>
          );
      })}
    </div>
  );
}

export default ContentDiv;
