import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import ResultCard from "./ResultCard";
const Battle = () => {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  const [PlayerOneInfo, setPlayerOneInfo] = useState({});
  const [PlayerTwoInfo, setPlayerTwoInfo] = useState({});

  const [battling, setBattling] = useState(false);

  const result = () => {
    let score1 = PlayerOneInfo.followers * 20 + PlayerOneInfo.public_repos;
    let score2 = PlayerTwoInfo.followers * 20 + PlayerTwoInfo.public_repos;

    if (score1 > score2) {
      setPlayerOneInfo((prevState) => ({
        ...prevState,
        result: "Winner",
        score: score1,
      }));
      setPlayerTwoInfo((prevState) => ({
        ...prevState,
        result: "Loser",
        score: score2,
      }));
    } else {
      setPlayerTwoInfo((prevState) => ({
        ...prevState,
        result: "Winner",
        score: score2,
      }));
      setPlayerOneInfo((prevState) => ({
        ...prevState,
        result: "Loser",
        score: score1,
      }));
    }

    setBattling(!battling);
  };

  // reset button function
  const handleReset = () => {
    setPlayerOne(null);
    setPlayerTwo(null);
    setPlayerOneInfo({});
    setPlayerTwoInfo({});
    setBattling(!battling);
  };

  useEffect(() => {
    if (playerOne) {
      let user = fetch(`https://api.github.com/users/${playerOne}`)
        .then((response) => response.json())
        .then((response) => setPlayerOneInfo(response));
    }

    if (playerTwo) {
      let user = fetch(`https://api.github.com/users/${playerTwo}`)
        .then((response) => response.json())
        .then((response) => setPlayerTwoInfo(response));
    }
  }, [playerOne, playerTwo]);
  return (
    <>
      <Navbar />
      {battling ? (
        <ResultCard
          PlayerOneInfo={PlayerOneInfo}
          PlayerTwoInfo={PlayerTwoInfo}
          handleReset={handleReset}
        />
      ) : (
        <>
          {" "}
          <div className=" flex flex-col justify-center my-32 ">
            <h1 className="text-center text-3xl my-12 dark:text-white">
              Instructions
            </h1>
            <ol className="flex justify-around min-w-[80%]  margin-za dark:text-white">
              <li className="min-w-[30%]">
                <h3 className="text-center text-2xl">
                  {" "}
                  Enter two Github Users
                </h3>
                <figure className="max-w-[70%]   rounded margin-za">
                  <img
                    className="rounded"
                    src="/Image/users.png"
                    alt="battle"
                  />
                </figure>
              </li>

              <li className="min-w-[30%]">
                <h3 className="text-center text-2xl">Battle</h3>
                <figure className="max-w-[70%] rounded margin-za">
                  <img
                    className="rounded"
                    src="/Image/battle.png"
                    alt="battle"
                  />
                </figure>
              </li>

              <li className="min-w-[30%]">
                <h3 className="text-center text-2xl"> See the winner</h3>
                <figure className="max-w-[70%]   margin-za rounded">
                  <img
                    className="rounded  "
                    src="/Image/winner.png"
                    alt="winner"
                  />
                </figure>
              </li>
            </ol>
          </div>
          <Form
            result={result}
            playerOne={playerOne}
            playerTwo={playerTwo}
            setPlayerOne={setPlayerOne}
            setPlayerTwo={setPlayerTwo}
            PlayerOneInfo={PlayerOneInfo}
            PlayerTwoInfo={PlayerTwoInfo}
            setPlayerOneInfo={setPlayerOneInfo}
            setPlayerTwoInfo={setPlayerTwoInfo}
          />
        </>
      )}
    </>
  );
};

export default Battle;
