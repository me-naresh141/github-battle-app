import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { HiOutlineUserGroup, HiUsers } from "react-icons/hi";

const ResultCard = ({ PlayerOneInfo, PlayerTwoInfo, handleReset }) => {
  let arr = [PlayerOneInfo, PlayerTwoInfo];

  return (
    <div className=" flex  flex-col mt-12 ">
      <div className="flex justify-around">
        {arr.map((a) => {
          return (
            <div className=" max-w-[20%] bg-gray-200 dark:bg-gary">
              <h2 className="text-center text-5xl my-12 dark:text-white">
                {a.result}
              </h2>
              <figure className="max-w-[60%] max-h-[60%] margin-za rounded">
                <img
                  className="w-full h-full rounded"
                  src={a.avatar_url}
                  alt="avatar"
                />
              </figure>
              <h4 className="text-center my-2 text-2xl dark:text-white">
                Score: {a.score}
              </h4>
              <h2 className="text-center font-semibold text-2xl text-red-800 my-2">
                {a.name}
              </h2>

              <ul className=" ml-14 text-xl dark:text-white ">
                <li className="flex items-center my-1">
                  <FaUserAlt className="text-orange-800" />
                  <p className="ml-2  my-1 "> {a.name}</p>
                </li>
                <li className="flex items-center  my-1">
                  <HiOutlineUserGroup className="text-cyan-300" />
                  <p className="ml-2">{a.followers}followers</p>
                </li>
                <li className="flex items-center  my-1 ">
                  <HiUsers className="text-emerald-500" />
                  <p className="ml-2 "> {a.following}following</p>
                </li>
                <li className="flex items-center  my-1">
                  <BiCodeAlt className="text-slate-500" />
                  <p className="ml-2"> {a.public_repos}repositories</p>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="max-w-[10%] margin-za">
        <button
          onClick={handleReset}
          className="bg-black text-white text-2xl py-2 px-6 mt-11 dark:bg-slate-50 dark:text-black "
        >
          R e s e t
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
