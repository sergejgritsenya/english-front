type TAnswerItem = {
  answer: string
  is_correct: boolean
}

type TQuestionItem = {
  question: string
  answers: TAnswerItem[]
}

export type TQuizResponse = TQuestionItem[]
