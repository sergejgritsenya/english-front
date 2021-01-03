import { CssBaseline, ThemeProvider } from "@material-ui/core"
import React, { FC } from "react"
import { EApiName } from "../enums"
import { QuizRoot } from "../quiz"
import { getTheme } from "./theme"

export const App: FC = () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <QuizRoot api_name={EApiName.words} />
    </ThemeProvider>
  )
}
