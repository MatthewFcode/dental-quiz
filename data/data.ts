export interface Data {
  images: string[]
  question: string
  answers: string[]
  correctAnswer: string
  left: boolean
}

export const dataset: Data[] = [
  {
    images: ['img1a.jpg', 'img1b.jpg'],
    question: 'Which city is shown?',
    answers: ['Paris', 'Berlin', 'Rome', 'London'],
    correctAnswer: 'Paris',
    left: true,
  },
  {
    images: ['img2a.jpg', 'img2b.jpg'],
    question: 'Where is the Eiffel Tower?',
    answers: ['Madrid', 'Paris', 'Vienna', 'Dublin'],
    correctAnswer: 'Paris',
    left: false,
  },
]
