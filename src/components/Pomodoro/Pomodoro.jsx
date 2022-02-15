import { useState, useEffect } from "react";
import CardBreak from "../CardBreak/CardBreak";
import '../../styles/root.css'
import '../../styles/index.css'
import "./Pomodoro.css";
import Timer from "../Timer/Timer";

const singInitialBreak = new Audio("./src/assets/sounds/song.mp3");

const StartButton = ({ start, setStart }) => {
  if (!start) {
    return <button onClick={() => setStart(true)}>Começar</button>;
  } else return null;
};

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [show, setShow] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      clearInterval(intervalTimer);

      if (start) {
        if (seconds === 0) {
          if (minutes != 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          }

          if (minutes === 0) {
            singInitialBreak.play();
            setShow(true);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);
  }, [seconds, minutes, start]);

  const setTimers = () => {
    setMinutes(0);
    setSeconds(5);
    setShow(false);
  };

  return (
    <section className="timer-content">
      <Timer seconds={seconds} minutes={minutes}></Timer>
      <StartButton start={start} setStart={setStart}></StartButton>
      {show ? (
            <CardBreak
              setStart={setStart}
              minutes={minutes}
              seconds={seconds}
              setShow={setShow}
              setTimers={setTimers}
            ></CardBreak>
      ) : null}
    </section>
  );
};

export default Pomodoro;
