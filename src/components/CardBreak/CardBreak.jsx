import { useState, useEffect } from "react";
import "../../styles/root.css";
import "./CardBreak.css";
import Timer from "../Timer/Timer";
import Card from "../Card/Card"

const singInitialBreak = new Audio("./src/assets/sounds/song.mp3");

const ButtonRestart = ({
  setTimers,
  resetTimers,
  setStart,
  pressBtn,
  setPressBtn,
}) => {
  useEffect(() => {
    const alertInterval = setInterval(() => {
      verify();
      if (pressBtn == true) {
        clearInterval(alertInterval);
      }
    }, 1000);

    return () => {
      clearInterval(alertInterval), setPressBtn(false);
    };
  }, []);

  function verify() {
    if (pressBtn != true) {
      singInitialBreak.play();
    }
  }

  return (
    <button
      onClick={() => {
        return setPressBtn(true), setTimers(), resetTimers(), setStart(false);
      }}
    >
      Recomeçar
    </button>
  );
};

const CardBreak = ({ minutes, seconds, setStart, setTimers }) => {
  const [minBanner, setMinBanner] = useState(5);
  const [secBanner, setSecBanner] = useState(0);
  const [btnShow, setBtnShow] = useState(false);
  const [pressBtn, setPressBtn] = useState(false);

  useEffect(() => {
    const timerBannerInterval = setInterval(() => {
      clearInterval(timerBannerInterval);

      if (seconds === 0 && minutes === 0) {
        if (secBanner === 0) {
          if (minBanner != 0) {
            setSecBanner(59);
            setMinBanner(minBanner - 1);
          }
          if (minBanner === 0) {
            setBtnShow(true);
          }
        } else {
          setSecBanner(secBanner - 1);
        }
      }
    }, 1000);
  }, [secBanner, minBanner, seconds, minutes]);

  const resetTimers = () => {
    setSecBanner(6);
    setMinBanner(0);
    setBtnShow(false);
  };

  return (
    <Card children={<>
      <Timer minutes={minBanner} seconds={secBanner}></Timer>
      {btnShow ? (
        <ButtonRestart 
          setStart={setStart}
          btnShow={btnShow}
          resetTimers={resetTimers}
          setTimers={setTimers}
          pressBtn={pressBtn}
          setPressBtn={setPressBtn}
        ></ButtonRestart>
      ) : null}
    </>}>
    </Card>  
  );
};

export default CardBreak;
