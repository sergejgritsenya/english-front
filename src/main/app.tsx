import { CssBaseline, ThemeProvider } from "@material-ui/core"
import React, { FC } from "react"
import { WordQuizLoader } from "../loaders"
import { AppHeader } from "./app-header"
import { AppContextProvider } from "./context"
import { getTheme } from "./theme"

export const App: FC = () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <AppContextProvider>
        <AppHeader />
        <WordQuizLoader />
      </AppContextProvider>
    </ThemeProvider>
  )
}
