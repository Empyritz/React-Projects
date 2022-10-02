import './App.css';
import { useState } from "react"
import data from "./data"
import SingleQuestion from "./Question"

function App() {
  const arr = []
  const [questions, setQuestions] = useState(data)
  const [showInfo, setShowInfo] = useState(arr)
  const makeState = questions.forEach((question)=> { 
    const currentInfo = {
      id: question.id,
      isShow: false,
    }  
    arr.push(currentInfo) 
    
   })
   console.log(arr)


   const toggleShow = (id) => {
      setShowInfo((prevInfo)=>{
        let state = []
        for (let i = 0; i < showInfo.length; i++){
        const currentQuestion = prevInfo[i]
        if (currentQuestion.id === id ){
          const updatedQuestion = {
            ...currentQuestion,
            isShow: !currentQuestion.isShow
          }
          state.push(updatedQuestion)
          } else {
            state.push(currentQuestion)
          }
        }
        return state
      })
    }
  

  const questionsList = questions.map((question)=>{
    return (
      <SingleQuestion key={question.id} {...question} toggleShow={toggleShow} stateShow={showInfo}/>
    )
  })

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questionsList}
        </section>
      </div>
    </main>
  );
}

export default App;
