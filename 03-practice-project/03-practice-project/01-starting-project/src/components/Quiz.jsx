import { useContext, useEffect, useState } from "react"
import { QuizContext } from "../context/quiz-context"
import ProgressBar from "./ProgressBar";

export default function Quiz() {
    const {quiz, currentPhase, summaryActive, currentQuestionIndex, handleAnswerClick} = useContext(QuizContext);
    const questionIndex = currentPhase === "SELECTION" ? currentQuestionIndex : currentQuestionIndex - 1;
    if (summaryActive) {
        return;
    }

    const [answers, setAnswers] = useState({
        selected: "",
        correct: quiz[questionIndex].correctAnswer
    });
    useEffect(() => {
        setAnswers({
            selected: "",
            correct: quiz[questionIndex].correctAnswer
        });
    }, [questionIndex])


    return (
        <section id="quiz">
            <div id="question">
                <ProgressBar key={questionIndex + " progress bar" + currentPhase}/>
                <h2>{quiz[questionIndex].question}</h2>
            </div>
            <ul id="answer">
                {quiz[questionIndex].answers.map((answer) => {
                    return (
                        <li className="answer" key={answer}>
                            <button 
                            className={`${answers.selected === answer && answer !== answers.correct ? "wrong" : ""} ${answer === answers.selected && answers.selected === answers.correct ? "correct" : ""}`}
                            onClick={() => {
                                if (currentPhase === "SELECTION"){             
                                    handleAnswerClick(answer);
                                    setAnswers((old) => {
                                            return {
                                            selected: answer,
                                            correct: old.correct
                                        }});
                                }
                            }}>{answer}</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}