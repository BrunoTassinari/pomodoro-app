import { useState, useEffect } from "react";
import CardBreak from "../CardBreak/CardBreak";

const singInitialBreak = new Audio("./src/assets/sounds/song.mp3");

const StartButton = ({ start, setStart }) => {
  if (!start) {
    return <button onClick={() => setStart(true)}>Começar</button>;
  } else return null;
};

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(1);
  const [show, setShow] = useState(false);
  const [start, setStart] = useState(false);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

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
            setTimeout(() => {
              setShow(true);
            }, 1000);
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
    <section className="main">
      <h1>{`${timerMinutes}:${timerSeconds}`}</h1>
      <StartButton start={start} setStart={setStart}></StartButton>
      <CardBreak
        setStart={setStart}
        minutes={minutes}
        seconds={seconds}
        setShow={setShow}
        setTimers={setTimers}
        show={show}
      ></CardBreak>
    </section>
  );
};

export default Pomodoro;
