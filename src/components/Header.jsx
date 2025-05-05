import React, { useContext, useState } from "react";
import Model from "./Model";
import { contextContent } from "../contexts/ContentContext";

function Header() {
  const {openModel, setOpenModel} = useContext(contextContent);
  const handelOpenModel = () => {
    setOpenModel((prev)=>!prev);
  };
  return (
    <div className="py-5  bg-zinc-100 flex justify-between px-5 text-xl">
      <div>Learn Better</div>

      <div className="hidden sm:flex gap-5">
        <div>leetCode</div>
        <div>leetCode</div>
        <div>leetCode</div>
      </div>

      <div className="absolute sm:hidden right-5" onClick={handelOpenModel}>
        <i className="ri-menu-4-line text-2xl"></i>
      </div>
    </div>
  );
}

export default Header;
