import React, { useState } from "react";
import ButtonClick from "./component/button";
import Input from "./component/input";

function Timer() {
  const [timerOn, setTimerOn] = useState(false);
  const [start, setStart] = useState(0);
  const [pause, setPause] = useState(0);
  const [reset, setReset] = useState(0);

  let second = 0;
  const intervelID = setInterval(() => {
    // console.log(second);
    // second++;
    setReset(0);
  }, 1000);
  function startTimer() {
    // setStart(0);
    timerOn ? 1000 : null;
  }
  function pauseTimer() {
    setTimerOn(true);
    //  console.log(clearInterval(intervelID)) ;
  }
  function resetTimer() {
    setTimerOn(false);
    setStart(0);
  }

  return (
    <div className="timer-app">
      <h1 className="timer-heading">TIMER</h1>
      <div className="input-list">
        <Input name="Hours" />
        <Input name="minutes" />
        <Input name="seconds" />
      </div>
      <div className="button-list">
        <ButtonClick
          cls="set-start-color"
          buttonName="START"
          click={startTimer}
        />
        <ButtonClick
          cls="set-pause-color"
          buttonName="PAUSE"
          click={pauseTimer}
        />
        <ButtonClick
          cls="set-reset-color"
          buttonName="RESET"
          click={resetTimer}
        />
      </div>
    </div>
  );
}

export default Timer;
