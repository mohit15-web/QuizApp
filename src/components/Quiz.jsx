import { useContext, useState } from "react";
import { questions } from "../QuestionBank";
import { QuizContext } from "../state";

function Quiz() {
  const { score, setScore, setScreen } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleNext = () => {
    if (answer === questions[currQuestion].Answer) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const handleFinish = () => {
    if (answer === questions[currQuestion].Answer) {
      setScore(score + 1);
    }
    setScreen("endScreen");
  };

  return (
    <div className="flex flex-col justify-between px-10 gap-4 ">
      <div className=" cursor-pointer">
        <h1> Q {currQuestion + 1} {")"} {questions[currQuestion].prompt} </h1>
      </div>
      <div  className=" cursor-pointer flex flex-col gap-2">

      <h1 onClick={() => setAnswer("optionA")} className="hover:bg-violet-600 border-4 rounded-md border-violet-700 text-center py-1">
        {questions[currQuestion].optionA}{" "}
      </h1>
      <h1 onClick={() => setAnswer("optionB")} className="hover:bg-violet-600 border-4 rounded-md border-violet-700 text-center py-1">
        {questions[currQuestion].optionB}{" "}
      </h1>
      <h1 onClick={() => setAnswer("optionC")} className="hover:bg-violet-600 border-4 rounded-md border-violet-700 text-center py-1">
         {questions[currQuestion].optionC}{" "}
      </h1>
      <h1 onClick={() => setAnswer("optionD")} className="hover:bg-violet-600 border-4 rounded-md border-violet-700 text-center py-1">
        {questions[currQuestion].optionD}{" "}
      </h1>
      </div>


      {questions.length - 1 !== currQuestion ? (
        <button
          className=" bg-violet-800 font-bold px-6 py-2 rounded-lg"
          onClick={() => handleNext()}
        >
          Next
        </button>
      ) : (
        <button
          className=" bg-violet-800 font-bold px-6 py-2 rounded-lg"
          onClick={() => handleFinish()}
        >
          Finish
        </button>
      )}
    </div>
  );
}

export default Quiz;
