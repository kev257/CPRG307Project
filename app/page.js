"use client"
import React, { useState } from 'react';
import questionList from './questions.json';
import happyEmoji from './images/happyEmoji.jpg';
import sadEmoji from './images/sadEmoji.jpg';
import shuffleArray from './questionRandom';

function Quiz() {
  const [showResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  //score50 and textColor class are responsible for changing the end score text color if the end score is < or > then 50%
  const score50 = questionList/2;  
  const scoreTextColor = score >= score50 ? 'text-green-500' : 'text-red-500';
  
  const scoreBackgroundImage = score >= score50 ? 'https://images.rawpixel.com/image_png_1100/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNTg2YmF0Y2gyLWVtb2ppLTAxMC5wbmc.png' : 'https://atlas-content-cdn.pixelsquid.com/assets_v2/300/3006314032358496243/jpeg-600/G03.jpg?modifiedAt=1';

  //const shuffledQuestions = shuffleArray([...questionList ]);

  //const selectedQuestions = shuffledQuestions.slice(0, 5);
  const retryButton = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  };

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questionList[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestion + 1 < questionList.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If there are no more questions, show the final result
      setFinalResult(true);
    }
    console.log('scoreBackgroundImage:', scoreBackgroundImage);
  
    
  
  };


  return (
<body className="bg-local bg-cover " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551376347-075b0121a65b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTIyfHx8ZW58MHx8fHx8)' }}>    <div className="flex flex-cols items-center justify-center bg-fixed">
      {showResult ? (
        <div className = "flex flex-col items-center justify-center py-80">
          <h2 className="text-7xl font-semibold mb-4 text-black">Quiz Completed!</h2>
          <p className = {`${scoreTextColor} text-4xl`}>Your Score: {score} out of {questionList.length}</p>
        
          <img src={scoreBackgroundImage} alt="Emoji picture" className="mt-4" />
        
          <button class ="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-3 hover:scale-110 hover:bg-indigo-500 duration-300 ..." onClick={() => retryButton()}>Click here to retry</button>
        
        </div>


      ) : (
        <div className = " grid grid-cols-1 content-center ...">
          <h2 className = "text-4xl text-black"> Question {currentQuestion + 1} out of {questionList.length}</h2>
          <p className = "text-2xl text-black">{questionList[currentQuestion].question}</p>
         
          <ul className="list-none pl-4 ">
            <li className="  border-black text-center p-8 my-8 border-4 w-64transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-3 hover:scale-110 hover:bg-indigo-500 duration-300 ..." onClick={() => handleAnswerClick(questionList[currentQuestion].optionA)}>
              {questionList[currentQuestion].optionA}
            </li>

            <li className=" border-black text-center p-8 my-8 border-4 w-64transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-3 hover:scale-110 hover:bg-indigo-500 duration-300 ..." onClick={() => handleAnswerClick(questionList[currentQuestion].optionB)}>
              {questionList[currentQuestion].optionB}
            </li>

            <li className=" border-black text-center p-8 my-8 border-4 w-64transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-3 hover:scale-110 hover:bg-indigo-500 duration-300 ..." onClick={() => handleAnswerClick(questionList[currentQuestion].optionC)}>
              {questionList[currentQuestion].optionC}
            </li>
          </ul>

        </div>
      )}
    </div>
    </body>
    
  );
}

export default Quiz;
