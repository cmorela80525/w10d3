import { useState } from "react"


export default function ScoreDisplay (props) {

const [score, setScore] = useState(0)

function decrementScore() {
    setScore(score - 100)
}

function incrementScore() {
    setScore(score + 100)
}

function resetScore() {
    setScore(0)
}

    return (
        <div id='score-container'>
            <h2>Score: {score} </h2>
            <button className="decrease-btn" onClick={decrementScore}>-</button>
            <button className="increase-btn"onClick={incrementScore}>+</button>
            <button className="reset-btn"onClick={resetScore}>Reset</button>
        </div>
    )
}