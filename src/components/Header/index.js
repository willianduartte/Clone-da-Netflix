import React from "react";
import './header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/ac/36/21/ac3621a2356d9773f3015c9523c91f3f.png"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"></img>
                </a>
            </div>
        </header>
    )
}