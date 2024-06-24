import { useContext } from "react"
import { QuizContext } from "../state"

function EndScreen() {
    const {score , setScore , setScreen} = useContext(QuizContext)
    const handleTryAgain = () => {
        setScore(0)
        setScreen('menu')
    }
  return (
    <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="text-4xl"> 🏆</h1>
        <h1>Your Score</h1>
        <h1>{score} </h1>
        <button
          className=" bg-violet-800 font-bold px-6 py-2 rounded-lg"
          onClick={() => handleTryAgain()}
        >
          Try Again
        </button>
    </div>
  )
}

export default EndScreen