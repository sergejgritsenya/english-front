import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import React, { FC } from "react"
import { green } from "../main/theme"

type TQuizHeaderProps = {
  reset: () => void
  score: number
}
export const QuizHeader: FC<TQuizHeaderProps> = ({ reset, score }) => {
  const { root, title, btn } = useStyles()

  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={title}>
            Score: {score}
          </Typography>

          <Button className={btn} onClick={reset}>
            New test
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    background: `${green} !important`,
    color: "#fff",
  },
}))
