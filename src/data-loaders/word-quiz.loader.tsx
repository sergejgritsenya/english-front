import React, { FC, useEffect, useState } from "react"
import { TQuizResponse, useWordQuiz } from "../api"
import { QuizRoot } from "../quiz"

export const WordQuizLoader: FC = () => {
  const api = useWordQuiz()
  const [quiz, setQuiz] = useState<TQuizResponse | null>(null)

  const load = async () => {
    const res = await api.start()
    setQuiz(res)
  }

  useEffect(() => {
    load()
  }, [])

  if (!quiz) {
    return null
  }

  return <QuizRoot questions={quiz} />
}
