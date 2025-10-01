import Header from "./components/Header";
import Quiz from "./components/Quiz.jsx";
import Summary from "./components/Summary.jsx";
import QuizContextProvider from "./context/quiz-context.jsx";


function App() {
    return (
        <QuizContextProvider>
            <Header/>
            <main>
                <Summary/>
                <Quiz/>
            </main>
        </QuizContextProvider>
    )
}

export default App;
