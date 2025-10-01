import { useState, useContext, useEffect } from "react";
import { QuizContext } from "../context/quiz-context";

let interval;
export default function ProgressBar() {
    const {currentPhase, advancePhase, handleAnswerClick} = useContext(QuizContext);
    const currentDelay = currentPhase === "SELECTION" ? 5000 : 2000;
    const [timerValue, setTimerValue] = useState(currentDelay)
    

    useEffect(() => {
        setTimerValue(currentDelay);
    }, [currentDelay])

    useEffect(() => {
        interval = setInterval(() => {
            setTimerValue((oldTimerValue) => {
                const newValue = oldTimerValue - 10;
                return newValue;
            })
            
        }, 10)

        return () => {
            clearInterval(interval)
            setTimerValue(currentDelay)
        };
    }, [])

    useEffect(() => {
        if (timerValue <= 0){
            if (currentPhase === "SELECTION"){
                handleAnswerClick("");
            }
            else{
                advancePhase();
            }
            clearInterval(interval);
        }
    }, [timerValue, advancePhase])

    return(
        <progress id="question-time" className={currentPhase === "VALIDATION" ? "answered" : ""} value={timerValue} max={currentDelay}/>
    );
}