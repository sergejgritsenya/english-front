import { Button, Grid, makeStyles } from "@material-ui/core"
import React, { FC, useState } from "react"
import { green, red } from "../main/theme"
import { TAnswerItem } from "../types"

type TAnswerItemProps = {
  answer: TAnswerItem
}
export const AnswerItem: FC<TAnswerItemProps> = (props) => {
  const { answer } = props
  const classes = useStyles()
  const [theme, setTheme] = useState(classes.root)

  const checkAnswer = () => {
    if (!!answer.is_right) {
      setTheme(classes.right)
      // setScore(score + 1)
    } else {
      setTheme(classes.wrong)
    }
  }

  return (
    <Grid item xs={5} className={classes.item}>
      <Button className={theme} onClick={checkAnswer} variant="contained">
        {answer.value}
      </Button>
    </Grid>
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
  },
  right: {
    background: green,
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
  },
  wrong: {
    background: red,
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
  },
}))
