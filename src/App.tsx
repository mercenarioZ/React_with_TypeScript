import Navbar from './components/Navbar'
import './App.css'
import ProgressContextProvider from './contexts/ProgressContext'
import ThemeContextProvider from './contexts/ThemeContext'
import ToggleThemeButton from './components/ToggleThemeButton'
import MovieContextProvider from './contexts/MovieContext'
import MoviesList from './components/MoviesList'
import AuthContextProvider from './contexts/AuthContext'

function App() {
    return (
        <div>
            <AuthContextProvider>
                <MovieContextProvider>
                    <ThemeContextProvider>
                        <ProgressContextProvider>
                            <Navbar />
                            <MoviesList />
                            <ToggleThemeButton />
                        </ProgressContextProvider>
                    </ThemeContextProvider>
                </MovieContextProvider>
            </AuthContextProvider>
        </div>
    )
}

export default App
