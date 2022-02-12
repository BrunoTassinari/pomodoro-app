import { useState, useEffect } from "react";


const Music = ({press, requestPress}) => {
  const singInitialBreak = new Audio("./src/assets/sounds/song.mp3");


    useEffect(() => {
      const alertInterval = setInterval(() =>{
        singInitialBreak.play()
        if(press){
          clearInterval(alertInterval)
        }
      }, 1000)
      
    }, [press])

  


  return (null)

}

const ButtonRestart = ({
  setTimers,
  btnShow,
  resetTimers,
  setStart,
}) => {
  const singInitialBreak = new Audio("./src/assets/sounds/song.mp3");
  const [press, setPres] = useState(false);
  if (btnShow) {
    return (
      <button
        id="btn"
        onClick={() => {
          return setPres(true), setTimers(), resetTimers(), setStart(false);
        }}
      >
        <Music press={press}></Music>
        Recomerçar
      </button>
    );
  } else {
    return null;
  }
};

const CardBreak = ({ minutes, seconds, setStart, show, setTimers }) => {
  let isClick = 0
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

  if (show) {
    return (
      <div>
        <h1>{`${timerMinutes}:${timerSeconds}`}</h1>
        <ButtonRestart
          setStart={setStart}
          btnShow={btnShow}
          resetTimers={resetTimers}
          setTimers={setTimers}
        ></ButtonRestart>
      </div>
    );
  } else {
    return null;
  }
};

export default CardBreak;
