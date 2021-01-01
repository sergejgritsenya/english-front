import { AppBar, Toolbar, Typography } from "@material-ui/core"
import React, { FC } from "react"

type TQuizHeaderProps = {
  score: number
}
export const QuizHeader: FC<TQuizHeaderProps> = ({ score }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">Score: {score}</Typography>
      </Toolbar>
    </AppBar>
  )
}
