import React, { useContext, useState } from "react";
import { contextContent } from "../contexts/ContentContext";

function ContentDiv() {
  const { content, savedContentArray, setSavedContentArray } =
    useContext(contextContent);

  const handelBookmark = (e, content, index) => {
    if(savedContentArray.includes(content)){
      console.log("already added, now removing")
      setSavedContentArray((prev)=>prev.filter((item)=>item!=content))
      console.log("removed")
      return
    }
      setSavedContentArray([...savedContentArray, content]);
      console.log("saved,", content);
      console.log("prev", savedContentArray);
  };
  return (
    <div className="p-2 sm:px-5">
      {content &&
        content.map((item, index) => {
          return (
            <div key={index}>
              <div className="mt-5 text-end flex items-center justify-end gap-1">
                <span
                  onClick={(event) => handelBookmark(event, item, index)}
                  className="px-2 cursor-pointer"
                >
                  bookmark
                  <i
                    className={`${
                      savedContentArray.includes(item) ? "ri-bookmark-fill":"ri-bookmark-line"} text-xl text-blue-500`}
                  ></i>
                </span>
              </div>

              <div>
                {item &&
                  item.map((lines, i) => {
                    if (lines.type == "heading") {
                      return (
                        <div
                          key={i}
                          className="text-blue-500 text-xl font-semibold"
                        >
                          {lines.content}
                        </div>
                      );
                    }
                    if (lines.type == "paragraph") {
                      return <div key={i}>{lines.content}</div>;
                    }
                  })}
              </div>
              <div className="my-5">
                <hr className="text-zinc-500" />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ContentDiv;
