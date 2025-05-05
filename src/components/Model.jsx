import React, { useContext } from "react";
import { contextContent } from "../contexts/ContentContext";

function Model() {
  const { openModel, setOpenModel } = useContext(contextContent);

  const handleClose = () => setOpenModel(false);

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-60 bg-zinc-200 transform transition-transform duration-300 ease-in-out py-5 px-5 flex flex-col gap-3 z-50 ${
        openModel ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="text-end mr-2 cursor-pointer" onClick={handleClose}>
        <i className="ri-close-large-line text-2xl"></i>
      </div>
      <div>hey</div>
      <div>kk</div>
      <div>kk</div>
      <div>kk</div>
    </div>
  );
}

export default Model;
