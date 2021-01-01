import { Instance, types } from "mobx-state-tree"
import { QuestionModel } from "./question.model"

export const QuizModel = types
  .model({
    questions: types.array(QuestionModel),
  })
  .views((self) => ({
    get is_completed(): boolean {
      return self.questions.every((question) => question.is_answered === true)
    },
    get score(): number {
      return self.questions.filter((question) => question.is_correct).length
    },
  }))

export interface IQuizModel extends Instance<typeof QuizModel> {}
