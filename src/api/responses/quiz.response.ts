export type TAnswerItem = {
  value: string
  is_correct: boolean
}

export type TQuestionItem = {
  key: string
  values: TAnswerItem[]
}

export type TQuizResponse = TQuestionItem[]
