import { Button, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import React, { FC } from "react"
import { green, red } from "../main/theme"
import { TAnswerItem } from "../types"

type TAnswerItemProps = {
  answer: TAnswerItem
  checkAnswer: (answer: TAnswerItem) => void
  isAnswered: boolean
}
export const AnswerItem: FC<TAnswerItemProps> = ({ answer, isAnswered, checkAnswer }) => {
  const { root, correct, wrong } = useStyles()

  return (
    <Button
      disabled={isAnswered}
      className={clsx(root, isAnswered && (answer.is_correct ? correct : wrong))}
      onClick={() => checkAnswer(answer)}
      variant="contained"
    >
      {answer.value}
    </Button>
  )
}

const useStyles = makeStyles(() => ({
  item: {
    padding: "10px 5px",
  },
  root: {
    fontSize: "16px",
    fontWeight: "bold",
    variant: "contained",
    flexBasis: "calc(50% - 14px)",
    margin: 7,
  },
  correct: {
    background: `${green} !important`,
    color: "#fff",
    "&:hover": {
      background: "#62b162",
    },
  },
  wrong: {
    background: `${red} !important`,
    color: "#fff",
    "&:hover": {
      background: "#d06262",
    },
  },
}))
