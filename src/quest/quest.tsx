import { Card, CardContent, CardHeader } from "@material-ui/core"
import React, { FC, useState } from "react"
import { TQuestionItem } from "../types"
import { QuestionItem } from "./question-item"

type TQuestProps = {
  questions: TQuestionItem[]
}
export const Quest: FC<TQuestProps> = ({ questions }) => {
  const [score] = useState<number>(0)

  return (
    <Card style={{paddingTop: '25px'}}>
      <CardHeader>Score: {score}</CardHeader>
      <CardContent>
        {questions.map((question, index) => (
          <QuestionItem key={index} question={question} />
        ))}
      </CardContent>
    </Card>
  )
}
