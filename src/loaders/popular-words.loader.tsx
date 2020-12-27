import React, { FC, useEffect, useState } from "react"
import { useAxios } from "../main/axios-service"
import { Quest } from "../quest"
import { TQuestionItem } from "../types"

export const PopularWordsLoader: FC = () => {
  const axios = useAxios()
  const [questions, setQuestions] = useState<TQuestionItem[] | null>(null)

  const load = async () => {
    const res = await axios.start()
    setQuestions(res)
  }

  useEffect(() => {
      load()
  }, [])

  if (!questions) {
    return null
  }

  return <Quest questions={questions} />
}
