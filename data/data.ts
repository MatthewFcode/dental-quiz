export interface Data {
  images: string[]
  answer: string
}

export interface QuizProps {
  dataset: Data[]
}

export interface ScoreSummaryProps {
  correct: number
  incorrect: number
}

export const dataset: Data[] = [

]

const teeth: Data = [
  {images: ['../'], number: 24, tooth: 'upper left pre molar'},
  {images: [], number: 31, tooth: 'lower left first incisor'},
  {images: [], number: 33, tooth: 'upper left first premolar' },
  {images: [], number: 34, tooth: 'lower left first premolar' },
  {images: [], number: 22, tooth: 'upper left second premolar' },
  {images: [], number: 37, tooth: 'lower left second pre molar' },
  {images: [], number: 14, tooth: 'upper right first premolar' },
  {images: [], number: 14, tooth: 'upper right first premolar' },
  {images: [], number: 16, tooth: 'upper right first molar' },
  {images: [], number: 25, tooth: 'upper left second premolar' },
  {images: [], number: 23, tooth: 'upper left canine' },
  {images: [], number: 32 , tooth: 'lower left second central incisor' },
  {images: [], number: 16, tooth: 'upper right first molar' },
  {images: [], number: 26, tooth: 'upper left first molar' },
  {images: [], number: 36, tooth: 'lower left first molar' },
  {images: [], number: 15, tooth: 'upper right second premolar' },
  {images: [], number 33, tooth: 'lower left canine' }
]
