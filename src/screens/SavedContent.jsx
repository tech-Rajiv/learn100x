import React, { useContext, useEffect } from "react";
import { contextContent } from "../contexts/ContentContext";
import { useNavigate } from "react-router-dom";

function SavedContent() {
  const { savedContentArray } = useContext(contextContent);
  const navigate = useNavigate();
 

  const handelDeleteBookmark =()=>{
  console.log("deleting")
  }

  return (
    <div className="max-w-6xl mx-auto mt-2 px-3">
      <div className="cursor-pointer px-2" onClick={() => navigate(-1)}>
        Go Back
      </div>
      
      <div className="mt-5">
      {savedContentArray && savedContentArray.map((item, index) => {
        return (
          <div key={index}>
            <div  className="mt-5 text-end flex items-center justify-end gap-1">
              
              <span onClick={handelDeleteBookmark} className=" px-2">delete
              </span>
              
            </div>
            <div>
              {
              item && item.map((lines,i) => {
                if(lines.type=="heading"){
                  return <div key={i} className="text-blue-500 text-xl font-semibold">{lines.content}</div>
                }
                if(lines.type=="paragraph"){
                  return <div key={i}>{lines.content}</div>
                }
                
              })}
            </div>
            <div className="my-5"><hr className="text-zinc-500" /></div>
          </div>
        );
      })}
      
      </div>
    </div>
  );
}

export default SavedContent;
