import React from 'react'

export const Winner = ({ score ,gameEnded}) => {

    return (
        <div>
            {score ? <div>The winner is {score}</div> : null}
            {gameEnded ? <div>there is no winner</div> : null}
        </div>
    )
}
