import React, { useContext, useState } from "react";
import Model from "./Model";
import { contextContent } from "../contexts/ContentContext";
import { NavLink } from "react-router-dom";

function Header() {
  const { openModel, setOpenModel } = useContext(contextContent);
  const handelOpenModel = () => {
    setOpenModel((prev) => !prev);
  };
  return (
    <div className="py-5  bg-zinc-100 flex justify-between px-15 text-xl">
      <div>Learn Better</div>

      <div className="hidden sm:flex gap-10 cursor-pointer">
        <div>leetCode</div>
        <div className="">
          <NavLink className="flex items-center gap-1" to={"/savedcontent"}>
            saved
            <i className="ri-bookmark-fill text-xl"></i>
          </NavLink>
        </div>
      </div>

      <div className="absolute sm:hidden right-5" onClick={handelOpenModel}>
        <i className="ri-menu-4-line text-2xl"></i>
      </div>
    </div>
  );
}

export default Header;
