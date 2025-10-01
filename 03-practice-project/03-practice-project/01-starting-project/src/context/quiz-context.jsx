import { createContext, useState, useCallback } from "react";
import { QUIZ } from "../data.js";

export const QuizContext = createContext({
    quiz: [],
    playerAnswers: [],
    currentQuestionIndex: 0,
    summaryActive: false,
    currentPhase: "SELECTION",
    handleAnswerClick: () => {},
    advancePhase: () => {},
})


export default function QuizContextProvider({children}) {
    const [playerAnswers, setPlayerAnswers] = useState([]);
    const [currentPhase, setCurrentPhase] = useState("SELECTION");
    const currentQuestionIndex = playerAnswers.length;
    
    const summaryActive = currentQuestionIndex === QUIZ.length && currentPhase === "SELECTION";
    console.log(currentQuestionIndex + " " + QUIZ.length)


    function handleAnswerClick(answer) {
        setPlayerAnswers((oldAnswers) => [...oldAnswers, answer])
        setCurrentPhase("VALIDATION")
    }

    const advancePhase = useCallback(
        function advancePhase() {
            setCurrentPhase((oldPhase) => {
                if (oldPhase === "SELECTION") {
                    return "VALIDATION";
                }
                else{
                    return "SELECTION";
                }
            })
        }, [])


    const contextContent = {
        quiz: QUIZ,
        playerAnswers: playerAnswers,
        summaryActive,
        currentQuestionIndex,
        handleAnswerClick,
        currentPhase,
        advancePhase,
    }
    console.log(contextContent)
    return (
        <QuizContext.Provider value={contextContent}>
            {children}
        </QuizContext.Provider>
    )
}