import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";
// react icons
import { FcShare } from "react-icons/fc";
import { GoAlert } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";

const Popular = () => {
  const [userData, setUserData] = useState();

  const [loader, setLoader] = useState(false);

  const [currentLanguage, setCurrentLanguage] = useState("All");

  let languages = ["All", "Javascript", "Ruby", "Java", "Css", "Python"];

  //   filterLanguage function
  const updateLanguage = (language) => {
    setCurrentLanguage(language);
  };

  // useEffect
  useEffect(() => {
    let data = fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${currentLanguage}&sort=stars&order=desc&type=Repositories`
    )
      .then((response) => response.json())
      .then((response) => setUserData(response.items));
    return () => {
      setUserData();
    };
  }, [currentLanguage]);

  return (
    <div>
      <Navbar />

      <ul className="flex justify-center gap-2 text-2xl my-12 dark:text-white">
        {languages.map((language) => {
          return (
            <li
              className={language === currentLanguage && "active"}
              key={language}
              onClick={() => updateLanguage(language)}
            >
              {language}
            </li>
          );
        })}
      </ul>
      {/* card */}

      <ul className="grid  grid-cols-5 gap-x-4 gap-y-8">
        {!userData ? (
          <Loader />
        ) : (
          userData.map((info, index) => {
            return (
              <>
                <div
                  className="bg-light flex flex-col  items-center dark:bg-gary rounded-md"
                  key={index}
                >
                  <h4 className="text-3xl my-4 dark:text-white">
                    #{index + 1}
                  </h4>
                  <figure className="max-w-[50%] rounded">
                    <img
                      className="rounded"
                      src={info.owner.avatar_url}
                      alt="{{info.owner.login}}"
                    />
                  </figure>
                  <h2 className=" text-2xl text-red-800  uppercase font-bold my-3">
                    {info.owner.login}
                  </h2>
                  <ul className="text-xl ">
                    <li className="flex items-center my-2">
                      <FaUser className="text-orange-500" />
                      <div className="ml-2 dark:text-white">
                        {info.owner.login}
                      </div>
                    </li>
                    <li className="flex items-center my-2">
                      <AiFillStar className="text-amber-200" />
                      <div className="ml-2 dark:text-white">
                        {info.stargazers_count} Stars
                      </div>
                    </li>
                    <li className="flex items-center my-2">
                      <BiGitRepoForked className="text-cyan-300" />
                      <div className="ml-2 dark:text-white">
                        {info.forks} forks
                      </div>
                    </li>
                    <li className="flex items-center my-2">
                      <GoAlert className="text-red-400" />
                      <div className="ml-2 dark:text-white">
                        {info.open_issues_count} Open issues
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Popular;
