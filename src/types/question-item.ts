export type TAnswerItem = {
  value: string
  is_right: boolean
}

export type TQuestionItem = {
  key: string
  values: TAnswerItem[]
}
