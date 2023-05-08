import {
    AppBar,
    Button,
    Chip,
    FormControl,
    MenuItem,
    Select,
    Toolbar,
} from '@mui/material'
import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography/Typography'
import { useContext, useEffect, useState } from 'react'
import { ProgressContext } from '../contexts/ProgressContext'
import { ThemeContext } from '../contexts/ThemeContext'
import WelcomeMessage from './WelcomeMessage'
import Login from './Login'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
    // state
    const [loginOpen, setLoginOpen] = useState(false)
    const [position, setPosition] = useState('Full-stack developer')
    const [time, setTime] = useState<Date>(() => new Date(Date.now()))

    // useEffect
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(Date.now())), 1000)

        return () => clearInterval(timer)
    }, [])

    // Context
    const { lastTime, status } = useContext(ProgressContext)
    const { theme } = useContext(ThemeContext)
    const {
        authInfo: { isAuthenticated },
        toggleAuth
    } = useContext(AuthContext)

    // Event handle functions
    const onPositionChange = (event: { target: { value: string } }) => {
        setPosition(event.target.value as string)
    }

    return (
        <AppBar position='fixed' color={theme}>
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                    width={1}
                    py={2}
                >
                    <Typography variant='h5'>Movies ranking</Typography>

                    <Box sx={{ justifyContent: 'center' }}>
                        <WelcomeMessage position={position} />
                        <Chip
                            sx={{ margin: '4px', backgroundColor: 'white' }}
                            label={`Last time working on this project: ${lastTime} - Status: ${status}`}
                        />
                        <Box mt={1}>
                            <FormControl>
                                <Select
                                    sx={{ height: '35px', color: 'white' }}
                                    value={position}
                                    onChange={onPositionChange}
                                >
                                    <MenuItem value='Full-stack developer'>
                                        Full-stack Developer
                                    </MenuItem>
                                    <MenuItem value='Front-end developer'>
                                        Front-end Developer
                                    </MenuItem>
                                    <MenuItem value='Back-end developer'>
                                        Back-end Developer
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Box>
                            <Typography variant='h6'>
                                {time.toUTCString()}
                            </Typography>

                            <Button
                                variant='contained'
                                sx={{
                                    mt: '8px',
                                    bgcolor: 'white',
                                    color: 'black',
                                }}
                                onClick={isAuthenticated ? toggleAuth.bind(this, '') : setLoginOpen.bind(this, true)}
                            >
                                {isAuthenticated ? 'Logout' : 'Login'}
                            </Button>
                        </Box>
                    </Box>
                    <Login isOpen={loginOpen} handleClose={setLoginOpen} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
