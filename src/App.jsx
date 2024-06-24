import { useState } from "react"
import { QuizContext } from "./state"
import Main from "./components/Main"
import Quiz from "./components/Quiz"
import EndScreen from "./components/EndScreen"

function App() {
    const[screen,setScreen] = useState('menu')
    const[score,setScore] = useState(0)
  return (
    <div className='w-[100%] h-screen bg-blue-300 flex justify-center items-center'>
        <div className="bg-blue-900 text-white p-20 rounded-xl shadow-2xl sm:w-[70%] lg:w-[50%] xl:w-[45%] w-[80%]">
            <QuizContext.Provider value={{screen,setScreen,score,setScore}}>
                {screen == 'menu' && <Main/>}
                {screen == 'quiz' && <Quiz/>}
                {screen == 'endScreen' && <EndScreen/>}
            </QuizContext.Provider>
        </div>
    </div>
  )
}

export default App