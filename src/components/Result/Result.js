import React, {useState} from "react";
import Paper from "../Paper";
import Rock from "../Rock";
import Scissors from "../Scissors";
import "./Result.css"

const Result = (props) => {
    return(
        <div className="result-container">
            <div className="player-container">
                <h2>YOU PICKED</h2>
                <div className="button-container">
                    {
                        () =>{
                            switch(props.humanPick){
                                case "p":
                                    <Paper id = "resultChoice"/>
                                    console.log("P");
                                    break;
                                case "r":
                                    <Rock id = "resultChoice"/>
                                    break;
                                case "s":
                                    <Scissors id = "resultChoice"/>
                                    break;
                            }
                        }    
                    }
                    <div className="player-mask"></div>
                </div>        
            </div>
            <div className="player-container">
                <h2>THE HOUSE PICKED</h2>
                <div className="button-container">
                    <Rock id = "resultChoice"/>
                    <div className="player-mask"></div>
                </div>     
            </div>
        </div>
    )
}






export default Result