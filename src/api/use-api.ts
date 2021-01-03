import { EApiName } from "../enums"
import { IApiBase } from "./api-base"
import { WordQuiz } from "./word-quiz.api"

export const useApi = (name: EApiName): IApiBase => {
  switch (name) {
    case EApiName.words: {
      return WordQuiz.init()
    }
    default: {
      return WordQuiz.init()
    }
  }
}
