import { createContext } from "react"

type TAppContext = { addPoint: () => void }

export const AppContext = createContext<TAppContext>({ addPoint: () => {} })
