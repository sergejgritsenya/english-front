import { Card, CardContent, makeStyles, Typography } from "@material-ui/core"
import { Observer } from "mobx-react-lite"
import React, { FC } from "react"
import { main } from "../main/theme"
import { IQuestionModel } from "../models"
import { AnswerItem } from "./answer-item"

type TQuestionItemProps = {
  question: IQuestionModel
}
export const QuestionItem: FC<TQuestionItemProps> = ({ question }) => {
  const { title, card, cardContent, actions } = useStyles()

  return (
    <Observer>
      {() => (
        <Card className={card}>
          <CardContent className={cardContent}>
            <Typography variant="h5" className={title} component="h2">
              {question.question}
            </Typography>
          </CardContent>
          <div className={actions}>
            {question.answers.map((answer, id) => (
              <AnswerItem
                key={id}
                answer={answer}
                selectAnswer={question.selectAnswer}
                isAnswered={question.is_answered}
              />
            ))}
          </div>
        </Card>
      )}
    </Observer>
  )
}

const useStyles = makeStyles(() => ({
  card: {
    margin: "15px 0",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    background: "#fff",
    padding: "7px 3.5px",
  },
  cardContent: {
    background: main,
    color: "#fff",
  },
  title: {
    fontWeight: 500,
    fontSize: 35,
    textAlign: "center",
  },
}))
