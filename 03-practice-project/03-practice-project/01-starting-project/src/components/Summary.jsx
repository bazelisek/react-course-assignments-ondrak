import { useContext } from "react"
import { QuizContext } from "../context/quiz-context"
import QuizCompleteImg from "../assets/quiz-complete.png"

export default function Summary() {
    const {summaryActive, quiz, playerAnswers} = useContext(QuizContext);
    const skippedPercentage = (playerAnswers.filter((answer) => answer === "").length) * 100 / quiz.length;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    for (const answer of playerAnswers) {
        for (const q of quiz){
            if (q.correctAnswer === answer) {
                correctAnswers ++;
            }
            else if (answer != "" && q.answers.includes(answer)) {
                incorrectAnswers ++;
            }
        }
    }
    const correctPercentage = correctAnswers * 100 / quiz.length;
    const incorrectPercentage = incorrectAnswers * 100 / quiz.length;


    if (!summaryActive) {
        return
    }
    return (
        <section id="summary">
            <img src={QuizCompleteImg}/>
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <div>
                    <p className="number">{Math.round(skippedPercentage)}%</p>
                    <p className="text">Skipped</p>
                </div>
                <div>
                    <p className="number">{Math.round(correctPercentage)}%</p>
                    <p className="text">Answered Correctly</p>
                </div>
                <div>
                    <p className="number">{Math.round(incorrectPercentage)}%</p>
                    <p className="text">Answered Incorrectly</p>
                </div>
            </div>
            <ol>
                {playerAnswers.map((answer, index) => {
                    const correctAnswer = quiz[index].correctAnswer;
                    let className = "user-answer ";
                    if (correctAnswer === answer) {
                        className += "correct";
                    }
                    else if (answer === ""){
                        className += "skipped";
                    }
                    else{
                        className += "wrong";
                    }
                    return (
                        <li key={answer}>
                            <h3>{index + 1}</h3>
                            <p className="question">{quiz[index].question}</p>
                            <p className={className}>{answer}</p>
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}