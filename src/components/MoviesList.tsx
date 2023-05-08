import { Box, Button, Chip, PropTypes, TextField } from '@mui/material'
import { ChangeEvent, useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { MovieContext } from '../contexts/MovieContext'

const MoviesList = () => {
    // Context
    const { theme } = useContext(ThemeContext)
    const { movies, addMovie, deleteMovie } = useContext(MovieContext)
    
    const [movieInput, setMovieInput] = useState('')
    
    const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value)
        setMovieInput(event.target.value)
    }
    
    const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                my={4}
            >
                <TextField
                    sx={{ mr: '5px', bgcolor: { theme } }}
                    onChange={onMovieInputChange}
                    variant='outlined'
                    label='Type something...'
                    value={movieInput}
                />

                <Button
                    onClick={() => {
                        addMovie(movieInput)
                        setMovieInput('')
                    }}
                    variant='contained'
                    sx={{ marginLeft: '5px' }}
                >
                    Add this movie
                </Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '10px',
                }}
            >
                {movies.map((movie) => (
                    <Chip
                        sx={{
                            fontSize: '1.5rem',
                            margin: '5px',
                            padding: '2rem',
                        }}
                        color={chipTheme}
                        clickable
                        key={movie.id}
                        label={movie.title}
                        onDelete={deleteMovie.bind(this, movie.id)}
                    />
                ))}
            </Box>
        </>
    )
}

export default MoviesList
