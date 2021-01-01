import { AxiosService } from "./axios-service"
import { TQuizResponse } from "./responses"

class WordQuiz {
  private axios: AxiosService
  private static instance: WordQuiz
  private constructor() {
    this.axios = AxiosService.init()
  }

  public static init(): WordQuiz {
    if (!WordQuiz.instance) {
      WordQuiz.instance = new WordQuiz()
    }
    return WordQuiz.instance
  }

  public async start() {
    return this.axios.get<TQuizResponse>("/start")
  }
}

export const useWordQuiz = () => WordQuiz.init()
