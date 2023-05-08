import { Box } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

interface WelcomeMessageProps {
    position: string
    country?: string
}

const WelcomeMessage = ({
    position,
    country = 'Vietnam',
}: WelcomeMessageProps) => {
    const {
        authInfo: { username },
    } = useContext(AuthContext)

    return (
        <Box>
            Hi! Welcome {username ? `${username},` : ''} {position} from {country}!!
        </Box>
    )
}

export default WelcomeMessage
