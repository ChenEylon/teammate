import { useContext,React  } from "react";
import "./home.css"
 
export default function Cells({value,onClick}) {
 const style=value==="X"? "box x":"box o";
    return(
        <span >
            <button className={style} onClick={onClick}>{value}</button>
        </span>
    )
}