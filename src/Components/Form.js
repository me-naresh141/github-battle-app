import React, { useState, useEffect } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import BattleBtn from "./BattleBtn";

import Player1Success from "./Player1Success";
import Player2Success from "./Player2Success";

const Form = ({
  result,
  playerOne,
  playerTwo,
  setPlayerOne,
  setPlayerTwo,
  PlayerOneInfo,
  PlayerTwoInfo,
  setPlayerOneInfo,
  setPlayerTwoInfo,
}) => {
  // handleSubmit form 1 function
  const handleSubmitForm1 = (event) => {
    event.preventDefault();
    setPlayerOne(event.target[0].value);
  };

  // handleSubmit  form 2 function
  const handleSubmitForm2 = (event) => {
    event.preventDefault();
    setPlayerTwo(event.target[0].value);
  };

  // cut btn 1
  const crossBtn1 = () => {
    setPlayerOne(null);
    setPlayerOneInfo({});
  };

  // cut btn 2
  const crossBtn2 = () => {
    setPlayerTwo(null);
    setPlayerTwoInfo({});
  };

  return (
    <div className="dark:bg-light_black">
      <h1 className="text-center text-2xl my-3 dark:text-white">Players</h1>
      <div className="flex  justify-around  max-w-[80%] margin-za">
        <div className=" min-w-[45%]">
          <label className="dark:text-white">Player 1</label>
          {playerOne ? (
            <Player1Success
              crossBtn1={crossBtn1}
              PlayerOneInfo={PlayerOneInfo}
            />
          ) : (
            <Form1 handleSubmitForm1={handleSubmitForm1} />
          )}
        </div>
        <div className="min-w-[45%]">
          <label className="dark:text-white">Player 2</label>
          {playerTwo ? (
            <Player2Success
              crossBtn2={crossBtn2}
              PlayerTwoInfo={PlayerTwoInfo}
            />
          ) : (
            <Form2 handleSubmitForm2={handleSubmitForm2} />
          )}
        </div>
      </div>
      {playerOne && playerTwo && <BattleBtn result={result} />}
    </div>
  );
};

export default Form;
