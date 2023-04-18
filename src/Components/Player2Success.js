import React from "react";
import { RxCrossCircled } from "react-icons/rx";
const Player2Success = ({ crossBtn2, PlayerTwoInfo }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-2">
      <div className="flex min-w-[60%] items-center ">
        <figure className="w-12 h-12 rounded-full">
          <img
            className="rounded-full w-full h-full"
            src={PlayerTwoInfo.avatar_url}
            alt="avatar"
          />
        </figure>
        <h3 className="ml-2 text-red-700">{PlayerTwoInfo.login}</h3>
      </div>
      <RxCrossCircled
        onClick={crossBtn2}
        className="text-4xl cursor-pointer text-red-700"
      />
    </div>
  );
};

export default Player2Success;
