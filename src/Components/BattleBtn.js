import React from "react";

const BattleBtn = ({ result }) => {
  return (
    <div className=" flex justify-center  py-12">
      <button
        onClick={result}
        className="bg-black text-white py-2 px-6 rounded dark:bg-slate-50 dark:text-black"
      >
        {" "}
        Battle
      </button>
    </div>
  );
};

export default BattleBtn;
