import { Card, CardContent } from "@material-ui/core"
import { Observer } from "mobx-react-lite"
import React, { FC, useMemo } from "react"
import { TQuizResponse } from "../api"
import { QuizModel } from "../models"
import { NextButton } from "./next-button"
import { QuestionItem } from "./question-item"
import { QuizHeader } from "./quiz-header"

type TQuizRootProps = {
  questions: TQuizResponse
}
export const QuizRoot: FC<TQuizRootProps> = ({ questions }) => {
  const model = useMemo(() => QuizModel.create({ questions }), [])
  return (
    <Observer>
      {() => (
        <>
          <QuizHeader score={model.score} />
          <Card style={{ paddingTop: "25px" }}>
            <CardContent>
              {model.questions.map((question, index) => (
                <QuestionItem key={index} question={question} />
              ))}
            </CardContent>
            {model.is_completed && (
              <NextButton next={() => console.log("NEXT")} />
            )}
          </Card>
        </>
      )}
    </Observer>
  )
}
