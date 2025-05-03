import React, { useState } from "react";
import ContentDiv from "../components/ContentDiv";
import LeftDiv from "../components/LeftDiv";

function Home() {

  

  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 max-w-5xl mx-auto py-2 px-2">
      <div className=" flex-col gap-5 flex min-w-80">
        <LeftDiv />
      </div>
      <div className="w-full mx-auto mt-5 bg-zinc-100 min-h-screen rounded-2xl">
        <ContentDiv />
      </div>
    </div>
  );
}

export default Home;
