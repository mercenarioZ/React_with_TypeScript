import { PropTypes } from '@mui/material'
import { createContext, ReactNode, useState } from 'react'

interface ThemeContextProviderProps {
    children: ReactNode
}

interface ThemeContextDefault {
    theme: PropTypes.Color
    themeToggle: (theme: PropTypes.Color) => void
}

const themeContextDefaultData = {
    theme: 'primary' as PropTypes.Color,
    themeToggle: () => null
}

export const ThemeContext = createContext<ThemeContextDefault>(
    themeContextDefaultData
)

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<PropTypes.Color>(themeContextDefaultData.theme)

    const themeToggle = (theme: PropTypes.Color) => {
        setTheme(theme)
    }

    const themeDynamicData = { theme, themeToggle }

    return (
        <ThemeContext.Provider value={themeDynamicData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider