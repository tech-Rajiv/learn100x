import React, { useContext } from "react";

function ListSelect({ chips, cls }) {
  return (
    <span
      className={`hover:bg-zinc-100 options outline outline-zinc-300 rounded text-center px-5 py-2 ${cls}`}
    >
      {chips}
    </span>
  );
}

export default ListSelect;
