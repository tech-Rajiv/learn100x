import React from "react";
import ListSelect from "./ListSelect.jsx";

function CatagoryDiv({ options, heading, check }) {
  return (
    <div className="py-2 mt-3">
      <h1 className=" text-2xl underline underline-offset-8">{heading}</h1>
      <div className="mt-2 flex gap-2 flex-nowrap">
        {options &&
          options.map((chips) => {
            const cls = check == chips ? "bg-zinc-300" : "";
            return <ListSelect cls={cls} key={chips} chips={chips} />;
          })}
      </div>
    </div>
  );
}

export default CatagoryDiv;
