import { CssBaseline, ThemeProvider } from "@material-ui/core"
import React, { FC } from "react"
import { PopularWordsLoader } from "../loaders"
import { getTheme } from "./theme"

const App: FC = () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <PopularWordsLoader />
    </ThemeProvider>
  )
}

export default App
