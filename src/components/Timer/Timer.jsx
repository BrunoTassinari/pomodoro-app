import { useState, useEffect } from "react";
import "../../styles/root.css"
import "../../styles/index.css"
import './Timer.css'

const Timer = ({seconds,minutes}) => {
    const secondsScreen = seconds < 10 ? `0${seconds}` : seconds;
    const minutesScreen = minutes < 10 ? `0${minutes}` : minutes;

    return <span>{`${minutesScreen}:${secondsScreen}`}</span>
}



export default Timer;