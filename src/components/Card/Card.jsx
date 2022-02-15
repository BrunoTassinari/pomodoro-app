import { useState, useEffect } from "react";
import './Card.css'

const Card = ({children}) => {
    return <div className="show-content">
        <div className="content-container">{children}</div>
    </div>
}

export default Card