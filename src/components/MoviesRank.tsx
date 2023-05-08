import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { TopMoviesContext } from '../contexts/TopMoviesContext'
import { useContext, useEffect } from 'react'

const MoviesRank = () => {
    // context
    const { topMovies, getTopMovies } = useContext(TopMoviesContext)

    useEffect(() => {
        getTopMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Box
            sx={{
                padding: '8px 0 0 8px',
            }}
        >
            <Card raised>
                <CardHeader
                    title='Top 10 movies of all time'
                    sx={{ paddingBottom: '0' }}
                />

                <CardContent>
                    <List>
                        {topMovies.map((movie) => (
                            <ListItem button key={movie.imdbID}>
                                <ListItemIcon>
                                    <Checkbox defaultChecked={movie.Watched} />
                                </ListItemIcon>
                                <ListItemText primary={movie.Title} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}

export default MoviesRank
