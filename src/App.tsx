import Navbar from './components/Navbar'
import './App.css'
import ProgressContextProvider from './contexts/ProgressContext'
import ThemeContextProvider from './contexts/ThemeContext'
import ToggleThemeButton from './components/ToggleThemeButton'
import MovieContextProvider from './contexts/MovieContext'
import MoviesList from './components/MoviesList'
import AuthContextProvider from './contexts/AuthContext'
import { Grid } from '@mui/material'
import MoviesRank from './components/MoviesRank'
import TopMoviesContextProvider from './contexts/TopMoviesContext'

function App() {
    return (
        <div>
            <TopMoviesContextProvider>
                <AuthContextProvider>
                    <MovieContextProvider>
                        <ThemeContextProvider>
                            <ProgressContextProvider>
                                <Navbar />
                                <Grid container>
                                    <Grid xs={4}>
                                        <MoviesRank />
                                    </Grid>
                                    <Grid xs={8}>
                                        <MoviesList />
                                    </Grid>
                                </Grid>
                                <ToggleThemeButton />
                            </ProgressContextProvider>
                        </ThemeContextProvider>
                    </MovieContextProvider>
                </AuthContextProvider>
            </TopMoviesContextProvider>
        </div>
    )
}

export default App
