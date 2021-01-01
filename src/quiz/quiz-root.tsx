import { Card, CardContent } from "@material-ui/core"
import React, { FC } from "react"
import { TQuizResponse } from "../api"
import { QuestionItem } from "./question-item"

type TQuizRootProps = {
  quiz: TQuizResponse
}
export const QuizRoot: FC<TQuizRootProps> = ({ quiz }) => {
  return (
    <Card style={{ paddingTop: "25px" }}>
      <CardContent>
        {quiz.map((question, index) => (
          <QuestionItem key={index} question={question} />
        ))}
      </CardContent>
    </Card>
  )
}
