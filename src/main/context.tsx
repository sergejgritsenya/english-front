import React, { createContext, FC, useState } from "react"

type TAppContext = { score: number; addPoint: () => void }

export const AppContext = createContext<TAppContext>({
  score: 0,
  addPoint: () => {},
})

export const AppContextProvider: FC = ({ children }) => {
  const [score, setScore] = useState<number>(0)
  const addPoint = () => {
    setScore(score + 1)
  }
  return (
    <AppContext.Provider value={{ score, addPoint }}>
      {children}
    </AppContext.Provider>
  )
}
