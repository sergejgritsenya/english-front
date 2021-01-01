import { AppBar, Toolbar, Typography } from "@material-ui/core"
import React, { FC, useContext } from "react"
import { AppContext } from "./context"

export const AppHeader: FC = () => {
  const { score } = useContext(AppContext)
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">Score: {score}</Typography>
      </Toolbar>
    </AppBar>
  )
}
