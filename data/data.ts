export interface Data {
  images: string[]
  question: string
  answers: string[]
  correctAnswer: string
  left: boolean
}

export const dataset: Data[] = [
  {
    images: [
      'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    ],
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
