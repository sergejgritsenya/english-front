import { Button, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import React, { FC, useContext, useState } from "react"
import { TAnswerItem } from "../api"
import { AppContext } from "../main"
import { green, red } from "../main/theme"

type TAnswerItemProps = {
  answer: TAnswerItem
  checkAnswer: () => void
  isAnswered: boolean
}
export const AnswerItem: FC<TAnswerItemProps> = ({
  answer,
  checkAnswer,
  isAnswered,
}) => {
  const { addPoint } = useContext(AppContext)
  const { root, correct, wrong } = useStyles()
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const selectAnswer = () => {
    checkAnswer()
    setIsSelected(true)
    if (answer.is_correct) {
      addPoint()
    }
  }

  return (
    <Button
      disabled={isAnswered}
      className={clsx(
        root,
        (isSelected || (isAnswered && answer.is_correct)) &&
          (answer.is_correct ? correct : wrong)
      )}
      onClick={selectAnswer}
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
