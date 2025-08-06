import { useState } from 'react'
//import { Data } from '../../data/data'
import ScoreSummary from '../components/ScoreSummary'
import { QuizProps } from '../../data/data'

function Quiz({ dataset }: QuizProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswerChecked, setIsAnswerChecked] = useState(false)
  const [directionInput, setDirectionInput] = useState('')
  const [isDirectionChecked, setIsDirectionChecked] = useState(false)

  const [correctCount, setCorrectCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)

  const current = dataset[currentIndex]
  const isQuizFinished = currentIndex >= 20 // After 20 questions, stop

  function handleToggleImage() {
    setSelectedImageIndex((prev) => (prev === 0 ? 1 : 0))
  }

  function handleAnswerSelection(answer: string) {
    if (!isAnswerChecked) {
      setSelectedAnswer(answer)
      setIsAnswerChecked(true)
    }
  }

  function handleDirectionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDirectionInput(event.target.value)
  }

  function handleDirectionCheck() {
    setIsDirectionChecked(true)
  }

  function isCorrectDirection(): boolean {
    if (directionInput.toLowerCase() === 'left' && current.left === true)
      return true
    if (directionInput.toLowerCase() === 'right' && current.left === false)
      return true
    return false
  }

  function handleNextQuestion() {
    const gotAnswerCorrect = selectedAnswer === current.correctAnswer
    const gotDirectionCorrect = isCorrectDirection()

    if (gotAnswerCorrect && gotDirectionCorrect) {
      setCorrectCount((prev) => prev + 1)
    } else {
      setIncorrectCount((prev) => prev + 1)
    }

    setCurrentIndex((prev) => prev + 1)
    setSelectedImageIndex(0)
    setSelectedAnswer(null)
    setIsAnswerChecked(false)
    setDirectionInput('')
    setIsDirectionChecked(false)
  }

  if (isQuizFinished) {
    return <ScoreSummary correct={correctCount} incorrect={incorrectCount} />
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <div>
        <img
          src={current.images[selectedImageIndex]}
          alt={`Image ${selectedImageIndex + 1}`}
          style={{ width: '100%', height: 'auto' }}
        />
        <button onClick={handleToggleImage}>Toggle Image</button>
      </div>

      <div>
        <h2>{current.question}</h2>
        <form>
          {current.answers.map((answer, index) => {
            let color = ''

            if (isAnswerChecked && selectedAnswer === answer) {
              color = answer === current.correctAnswer ? 'green' : 'red'
            } else if (isAnswerChecked && answer === current.correctAnswer) {
              color = 'green'
            }

            return (
              <div key={index} style={{ marginBottom: '8px' }}>
                <label style={{ color }}>
                  <input
                    type="radio"
                    name="answer"
                    value={answer}
                    disabled={isAnswerChecked}
                    onClick={() => handleAnswerSelection(answer)}
                    style={{ marginRight: '8px' }}
                  />
                  {answer}
                </label>
              </div>
            )
          })}
        </form>
      </div>

      <div style={{ marginTop: '16px' }}>
        <input
          type="text"
          placeholder="Type 'left' or 'right'"
          value={directionInput}
          onChange={handleDirectionChange}
          disabled={isDirectionChecked}
        />
        <button
          onClick={handleDirectionCheck}
          disabled={isDirectionChecked}
          style={{ marginLeft: '8px' }}
        >
          Check Direction
        </button>

        {isDirectionChecked && (
          <span
            style={{
              marginLeft: '16px',
              color: isCorrectDirection() ? 'green' : 'red',
              fontWeight: 'bold',
            }}
          >
            {isCorrectDirection() ? 'Correct' : 'Incorrect'}
          </span>
        )}
      </div>

      <div style={{ marginTop: '24px' }}>
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    </div>
  )
}

export default Quiz

// import { useState } from 'react'
// import { Data } from '../../data/data'

// interface QuizProps {
//   dataset: Data[]
// }

// function Quiz({ dataset }: QuizProps): JSX.Element {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0)
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
//   const [isAnswerChecked, setIsAnswerChecked] = useState(false)
//   const [directionInput, setDirectionInput] = useState('')
//   const [isDirectionChecked, setIsDirectionChecked] = useState(false)

//   const current = dataset[currentIndex]

//   function handleToggleImage() {
//     if (selectedImageIndex === 0) {
//       setSelectedImageIndex(1)
//     } else {
//       setSelectedImageIndex(0)
//     }
//   }
//   function handleAnswerSelection(answer: string) {
//     if (!isAnswerChecked) {
//       setSelectedAnswer(answer)
//       setIsAnswerChecked(true)
//     }
//   }
//   function handleDirectionChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setDirectionInput(event.target.value)
//   }
//   function handleDirectionCheck() {
//     setIsDirectionChecked(true)
//   }

//   function handleNextQuestion() {
//     setCurrentIndex(function (prevIndex) {
//       if (prevIndex + 1 < dataset.length) {
//         return prevIndex + 1
//       } else {
//         return 0
//       }
//     })
//     setSelectedImageIndex(0)
//     setSelectedAnswer(null)
//     setIsAnswerChecked(false)
//     setDirectionInput('')
//     setIsDirectionChecked(false)
//   }
//   function isCorrectDirection(): boolean {
//     if (directionInput.toLowerCase() === 'left' && current.left === true) {
//       return true
//     }
//     if (directionInput.toLowerCase() === 'right' && current.left === false) {
//       return true
//     }

//     return false
//   }
//   return (
//     <div style={{ maxWidth: '600px', margin: 'auto' }}>
//       <div>
//         <img
//           src={current.images[selectedImageIndex]}
//           alt={`Image ${selectedImageIndex + 1}`}
//           style={{ width: '100%', height: 'auto' }}
//         />
//         <button onClick={handleToggleImage}>Toggle Image</button>
//       </div>

//       <div>
//         <h2>{current.question}</h2>
//         <form>
//           {current.answers.map(function (answer, index) {
//             let color = ''

//             if (isAnswerChecked && selectedAnswer === answer) {
//               if (answer === current.correctAnswer) {
//                 color = 'green'
//               } else {
//                 color = 'red'
//               }
//             } else if (isAnswerChecked && answer === current.correctAnswer) {
//               color = 'green'
//             }

//             return (
//               <div key={index} style={{ marginBottom: '8px' }}>
//                 <label style={{ color: color }}>
//                   <input
//                     type="radio"
//                     name="answer"
//                     value={answer}
//                     disabled={isAnswerChecked}
//                     onClick={function () {
//                       handleAnswerSelection(answer)
//                     }}
//                     style={{ marginRight: '8px' }}
//                   />
//                   {answer}
//                 </label>
//               </div>
//             )
//           })}
//         </form>
//       </div>

//       <div style={{ marginTop: '16px' }}>
//         <input
//           type="text"
//           placeholder="Type 'left' or 'right'"
//           value={directionInput}
//           onChange={handleDirectionChange}
//           disabled={isDirectionChecked}
//         />
//         <button
//           onClick={handleDirectionCheck}
//           disabled={isDirectionChecked}
//           style={{ marginLeft: '8px' }}
//         >
//           Check Direction
//         </button>

//         {isDirectionChecked && (
//           <span
//             style={{
//               marginLeft: '16px',
//               color: isCorrectDirection() ? 'green' : 'red',
//               fontWeight: 'bold',
//             }}
//           >
//             {isCorrectDirection() ? 'Correct' : 'Incorrect'}
//           </span>
//         )}
//       </div>

//       <div style={{ marginTop: '24px' }}>
//         <button onClick={handleNextQuestion}>Next</button>
//       </div>
//     </div>
//   )
// }

// export default Quiz
