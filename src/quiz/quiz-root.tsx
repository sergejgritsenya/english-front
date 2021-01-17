import { Card, CardContent } from "@material-ui/core"
import { Observer } from "mobx-react-lite"
import React, { FC, useEffect, useMemo } from "react"
import { useApi } from "../api/use-api"
import { EApiName } from "../enums"
import { QuizModel } from "../models"
import { FinalDialog } from "./final-dialog"
import { QuestionItem } from "./question-item"
import { QuizHeader } from "./quiz-header"
import { QuizSettings } from "./quiz-settings"

type TQuizRootProps = {
  api_name: EApiName
}
export const QuizRoot: FC<TQuizRootProps> = ({ api_name }) => {
  const api = useApi(api_name)
  const model = useMemo(() => QuizModel.create(), [])

  const load = async () => {
    const res = await api.start(model.settings.json)
    model.setQuestions(res)
  }

  useEffect(() => {
    load()
  }, [])
  return (
    <Observer>
      {() => (
        <>
          <QuizHeader reset={load} score={model.score} />
          <QuizSettings settings={model.settings} />
          <Card>
            <CardContent>
              {model.questions.map((question, index) => (
                <QuestionItem key={index} question={question} />
              ))}
              {model.show_dialog && (
                <FinalDialog
                  reset={load}
                  score={model.score}
                  is_mark={model.settings.is_mark}
                />
              )}
            </CardContent>
          </Card>
        </>
      )}
    </Observer>
  )
}
