import React,{useState} from "react";
import "./Game.css"
import Paper from "../Paper";
import Rock from "../Rock";
import Scissors from "../Scissors";
import Result from "../Result/Result";
import Header from '../Header/Header';

const Game = () => {
    const [pick,setPick] = useState("");
    const [currScore, setCurrScore] = useState(0);
    if(pick === "")
    return(
    <div>
        <Header score = {currScore}/>
        <div className="game-container">
            <Paper id = "paperContainer" handleClick = {pick => setPick(pick)}/>
            <Rock id = "rockContainer" handleClick = {pick => setPick(pick)}/>
            <Scissors id= "scissorsContainer" handleClick = {pick => setPick(pick)}/>
        </div>
    </div>
    )
    else{
        console.log(pick)
    return(
        <div>
            <Header score = {currScore}/>
            <Result  humanPick = {pick}/>
        </div>
    )
    }
}



export default Game