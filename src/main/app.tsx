import { CssBaseline, ThemeProvider } from "@material-ui/core"
import React, { FC } from "react"
import { WordQuizLoader } from "../data-loaders"
import { getTheme } from "./theme"

export const App: FC = () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <WordQuizLoader />
    </ThemeProvider>
  )
}
