import { AppBar, CssBaseline, ThemeProvider, Toolbar, Typography } from "@material-ui/core"
import React, { FC, useState } from "react"
import { PopularWordsLoader } from "../loaders"
import { AppContext } from "./context"
import { getTheme } from "./theme"

const App: FC = () => {
  const [score, setScore] = useState<number>(0)
  const addPoint = () => {
    setScore(score + 1)
  }
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <AppContext.Provider value={{ addPoint }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">Score: {score}</Typography>
          </Toolbar>
        </AppBar>
        <PopularWordsLoader />
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export default App
