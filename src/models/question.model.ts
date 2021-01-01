import { Instance, types } from "mobx-state-tree"
import { AnswerModel, IAnswerModel } from "./answer.model"

export const QuestionModel = types
  .model({
    question: types.string,
    answers: types.array(AnswerModel),
    is_answered: false,
    is_correct: false,
  })
  .actions((self) => ({
    selectAnswer(answer: IAnswerModel) {
      self.is_answered = true
      answer.is_selected = true
      if (answer.is_correct) {
        self.is_correct = true
      } else {
        self.answers.find((item) => item.is_correct === true).is_selected = true
      }
    },
  }))

export interface IQuestionModel extends Instance<typeof QuestionModel> {}
