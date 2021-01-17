import { IApiBase } from "./api-base"
import { useAxios } from "./axios"
import { TSettingsRequest } from "./requests"
import { TQuizResponse } from "./responses"

export class WordQuiz implements IApiBase {
  private axios = useAxios()
  private static instance: WordQuiz
  private constructor() {}

  public static init(): WordQuiz {
    if (!WordQuiz.instance) {
      WordQuiz.instance = new WordQuiz()
    }
    return WordQuiz.instance
  }

  public async start(settings: TSettingsRequest) {
    return this.axios.post<TQuizResponse>("/start", settings)
  }
}
