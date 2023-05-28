import React, { useContext, useState } from "react";
import './home.css'
import Cells from "./cells";
import MyContext from './cells'

export default function Board({ board, onClick }) {
    const value = useContext(MyContext);
   
    return (<div className="home">

        {board.map((value, index) => {
            return (<Cells value={value} onClick={() => onClick(index)}>{value}</Cells>

            )
        })}
    </div>
    )

}