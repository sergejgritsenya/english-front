import { AppBar, CssBaseline, ThemeProvider, Toolbar, Typography } from "@material-ui/core"
import React, { FC } from "react"
import { PopularWordsLoader } from "../loaders"
import { getTheme } from "./theme"

const App: FC = () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            Score
          </Typography>
        </Toolbar>
      </AppBar>
      <PopularWordsLoader />
    </ThemeProvider>
  )
}

export default App
