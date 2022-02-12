import { useState, useEffect } from "react";




const ButtonRestart = ({ setTimers, btnShow, resetTimers, setStart, pickEvent}) => {

    const [press, setPres] = useState(false)

    const sendPress = () => {
        setPres(true);
        pickEvent(press)
    }

  if (btnShow) {
    return (
      <button
        id="btn"
        onClick={() => {
          return sendPress(), setTimers(), resetTimers(), setStart(false);
        }}
      >
        Recomerçar
      </button>
    );
  } else {
    return null;
  }
};

const CardBreak = ({ minutes, seconds, setStart, show, setTimers }) => {

    const singInitialBreak = new Audio("./src/assets/sounds/song.mp3");
  const [minBanner, setMinBanner] = useState(0);
  const [secBanner, setSecBanner] = useState(4);
  const [btnShow, setBtnShow] = useState(false);

  const timerMinutes = minBanner < 10 ? `0${minBanner}` : minBanner;
  const timerSeconds = secBanner < 10 ? `0${secBanner}` : secBanner;

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
            pickEvent()
            
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

  const pickEvent = (state) => {
    console.log(state)
  }

  if (show) {
    return (
      <div>
        <h1>{`${timerMinutes}:${timerSeconds}`}</h1>
        <ButtonRestart
          setStart={setStart}
          btnShow={btnShow}
          resetTimers={resetTimers}
          setTimers={setTimers}
          pickEvent={pickEvent}
        ></ButtonRestart>
      </div>
    );
  } else {
    return null;
  }
};

export default CardBreak;
