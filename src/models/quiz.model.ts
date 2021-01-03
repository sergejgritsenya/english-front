import { Instance, types } from "mobx-state-tree"
import { TQuizResponse } from "../api"
import { QuestionModel } from "./question.model"
import { SettingsModel } from "./settings.model"

export const QuizModel = types
  .model({
    questions: types.optional(types.array(QuestionModel), []),
    settings: types.optional(SettingsModel, {}),
  })
  .actions((self) => ({
    setQuestions(questions: TQuizResponse) {
      self.questions.replace(
        questions.map((question) => QuestionModel.create(question))
      )
    },
  }))
  .views((self) => ({
    get score(): number {
      return self.questions.filter((question) => question.is_correct).length
    },
  }))

export interface IQuizModel extends Instance<typeof QuizModel> {}
