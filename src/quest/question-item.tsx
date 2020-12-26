import { Grid } from "@material-ui/core"
import React, { FC } from "react"
import { TQuestionItem } from "../types"
import { AnswerItem } from "./answer-item"

type TQuestionItemProps = {
  question: TQuestionItem
}
export const QuestionItem: FC<TQuestionItemProps> = ({ question }) => {
  return (
    <Grid
      container
      alignItems="center"
      justify="space-evenly"
      style={{ paddingBottom: "20px", fontSize: "24px" }}
    >
      <Grid item xs={12}>
        <div style={{ border: "solid 2px", textAlign: "center", fontSize: "24px" }}>
          {question.key}
        </div>
      </Grid>
      {question.values.map((answer, index) => (
        <AnswerItem key={index} answer={answer} />
      ))}
    </Grid>
  )
}
