import { Button, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import React, { FC } from "react"
import { green, red } from "../main/theme"
import { IAnswerModel } from "../models"

type TAnswerItemProps = {
  answer: IAnswerModel
  selectAnswer: (answer: IAnswerModel) => void
  isAnswered: boolean
}
export const AnswerItem: FC<TAnswerItemProps> = ({
  answer,
  selectAnswer,
  isAnswered,
}) => {
  const { root, correct, wrong } = useStyles()

  return (
    <Button
      disabled={isAnswered}
      className={clsx(
        root,
        answer.is_selected && (answer.is_correct ? correct : wrong)
      )}
      onClick={() => selectAnswer(answer)}
      variant="contained"
    >
      {answer.answer}
    </Button>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    fontSize: "16px",
    fontWeight: "bold",
    variant: "contained",
    flexBasis: "calc(50% - 14px)",
    margin: 7,
  },
  correct: {
    background: `${green} !important`,
    color: "#fff !important",
  },
  wrong: {
    background: `${red} !important`,
    color: "#fff !important",
  },
}))
