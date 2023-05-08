import { FormControlLabel, Switch } from '@mui/material'
import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'

const ToggleThemeButton = () => {
    const {theme, themeToggle} = useContext(ThemeContext)

    return (
        <div>
            <FormControlLabel sx={{position: 'fixed', bottom: '10px', right: '10px'}} control={<Switch onClick={themeToggle.bind(this, theme === 'primary' ? 'secondary' : 'primary')} />} label='Toggle theme' />
        </div>
    )
}
export default ToggleThemeButton
