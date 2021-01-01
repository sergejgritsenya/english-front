import { Card, CardContent, makeStyles, Typography } from "@material-ui/core"
import React, { FC, useState } from "react"
import { TQuestionItem } from "../api"
import { main } from "../main/theme"
import { AnswerItem } from "./answer-item"

type TQuestionItemProps = {
  question: TQuestionItem
}
export const QuestionItem: FC<TQuestionItemProps> = ({ question }) => {
  const { title, cardContent, card, actions } = useStyles()
  const [isAnswered, setIsAnswered] = useState<boolean>(false)

  const checkAnswer = () => {
    setIsAnswered(true)
  }

  return (
    <Card className={card}>
      <CardContent className={cardContent}>
        <Typography variant="h5" className={title} component="h2">
          {question.key}
        </Typography>
      </CardContent>
      <div className={actions}>
        {question.values.map((answer, id) => (
          <AnswerItem
            key={id}
            answer={answer}
            checkAnswer={checkAnswer}
            isAnswered={isAnswered}
          />
        ))}
      </div>
    </Card>
  )
}

const useStyles = makeStyles((theme) => ({
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
  header: {
    padding: "25px 0",
    background: "#ec7a7a",
    color: "#fff",
    borderRadius: "15px 15px 0 0",
    borderBottom: "2px solid #eee",
  },
  answers: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
}))