import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from '@mui/material'
import {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from 'react'
import { AuthContext } from '../contexts/AuthContext'

// interface
interface LoginProps {
    isOpen: boolean
    handleClose: Dispatch<SetStateAction<boolean>>
}

const Login = ({ isOpen, handleClose }: LoginProps) => {
    const { toggleAuth } = useContext(AuthContext)

    const [username, setUsername] = useState('')

    const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const onSubmitChange = () => {
        toggleAuth(username)
        setUsername('')
    }

    return (
        <Dialog open={isOpen} onClose={handleClose.bind(this, false)}>
            <DialogContent>
                <TextField
                    label='Username'
                    onChange={onUsernameChange}
                    value={username}
                    required
                />
            </DialogContent>

            <DialogActions>
                <Button
                    color='primary'
                    variant='contained'
                    onClick={onSubmitChange}
                    disabled={username === ''}
                >
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login
