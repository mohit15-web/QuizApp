import { useContext } from "react"
import { QuizContext } from "../state"

function Main() {
    const {setScreen} = useContext(QuizContext)
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <h1 className="font-bold text-3xl">Start the Quiz</h1>
      <p>Good luck!</p>
      <button className=" bg-violet-800 font-bold px-6 py-2 rounded-lg"
      onClick={() => setScreen('quiz')}
      >Start</button>
    </div>
  )
}

export default Main