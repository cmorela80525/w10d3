import { useEffect, useState } from "react";



export default function GetQuestion(props) {
  const [triviaData, setTriviaData] = useState([]);

  const url = "https://jservice.io/api/random"

  const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setTriviaData(data[0])
    console.log(data[0])
    console.log(triviaData)
  }

  useEffect(()=>{
    getData()
  }, [])
   
    const [answerClicked, setAnswerClicked] =useState(false)

function handleQuestionClick() {
  getData()
  setAnswerClicked(false)
}

function handleAnswerClick() {
  setAnswerClicked(true)
}

if(answerClicked === false) {
  return (
    <div className='board-container'>
      <button id="get-question" onClick={handleQuestionClick}>Get random trivia question</button>
      <div className='category-points'>
        <h3>Category: {triviaData.category?.title}</h3>
        <h3>Points: {triviaData.value}</h3>
      </div>
      <h3 className='text-box'>Question: {triviaData.question}</h3>
      <button className="answer-btn" onClick={handleAnswerClick}>Click to Reveal Answer</button>
    </div> 
  )

}

if(answerClicked ) {
 return (
    <div className='board-container'>
      <button id="get-question" onClick={handleQuestionClick}>Get random trivia question</button>
      <div className='category-points'>
      <h3>Category: {triviaData.category?.title}</h3>
        <h3>Points: {triviaData.value}</h3>
      </div>
      <h3 className='text-box'>Answer: {triviaData.answer}</h3>
      
    </div> 
  )
}
}