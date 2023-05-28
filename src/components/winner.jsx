import React from 'react'

export const Winner = ({ score }) => {

    return (
        <div>
            {score ? <div>The winner is {score}</div> : null}
        </div>
    )
}
