import { Instance, types } from "mobx-state-tree"

export const AnswerModel = types.model({
  answer: types.string,
  is_correct: types.boolean,
  is_selected: false,
})

export interface IAnswerModel extends Instance<typeof AnswerModel> {}
