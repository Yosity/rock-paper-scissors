import React,{useState} from "react";
import "./Game.css"
import Paper from "../Global/Paper";
import Rock from "../Global/Rock";
import Scissors from "../Global/Scissors";
import Result from "../Result/Result";
import Header from "../Header/Header"

const Game = (props) => {
    const [humanPick,setHumanPick] = useState("");
    const [score,setScore] = useState(0);
    const options = ["r","p","s","r","p","s","r","p","s"]; // tripled the elements for more uncertainty in picking
    let randomIndex = Math.floor(Math.random()*9);
    let computerPick = options[randomIndex]
    let outcome;
  
    //Game logic
    if(humanPick === computerPick) {
        outcome = "DRAW";
     } else if(humanPick === "p") {
        if(computerPick === "r") {
           outcome = "YOU WIN";
           setScore(score+1);
        } else {
           outcome = "YOU LOSE";
           setScore(score-1);
        }   
     } else if(humanPick === "r") {
        if(computerPick === "s") {
           outcome = "YOU WIN";
           setScore(score+1);
        } else {
           outcome = "YOU LOSE";
           setScore(score-1);
        }     
     } else if(humanPick === "s") {
        if(computerPick === "p") {
           outcome = "YOU WIN";
           setScore(score+1);
        } else {
           outcome = "YOU LOSE";
           setScore(score-1);
        }   
     }

     // View Before we pick a choice
    if(humanPick === "")
    return(
    <div>
        <Header score = {score}/>
        <div className="game-container">
            <Paper id = "paperContainer" handleClick = {pick => setHumanPick(pick)} />
            <Rock id = "rockContainer" handleClick = {pick => setHumanPick(pick)} />
            <Scissors id= "scissorsContainer" handleClick = {pick => setHumanPick(pick)}/>
        </div>
    </div>
    )

    // After we pick a choice
    else{
    return(
        <div>
            <Header score = {score}/>
            <Result  humanPick = {humanPick} outcome = {outcome} computerPick = {computerPick}/>
        </div>
    )
    }
}



export default Game