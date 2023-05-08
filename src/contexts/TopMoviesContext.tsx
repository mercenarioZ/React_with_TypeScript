import { createContext, ReactNode, useReducer } from 'react'
import { topMoviesReducer, TopMoviesState } from '../reducers/TopMoviesReducer'
import { TopMoviesActionType } from '../reducers/types'
import topMoviesInfo from '../api/getTopMovies'

interface TopMoviesContextProps {
    children: ReactNode
}

interface TopMoviesContextDefault {
    topMovies: TopMoviesState
    getTopMovies: () => Promise<void>
}

const topMoviesDefault: TopMoviesState = []

export const TopMoviesContext = createContext<TopMoviesContextDefault>({
    topMovies: topMoviesDefault,
    getTopMovies: () => Promise.resolve(void 0),
})

const TopMoviesContextProvider = ({ children }: TopMoviesContextProps) => {
    const [topMovies, dispatch] = useReducer(topMoviesReducer, topMoviesDefault)

    // Get movies ranking from API
    const getTopMovies = async () => {
        const topMovies = await Promise.all(topMoviesInfo)

        dispatch({
            type: TopMoviesActionType,
            payload: topMovies.map((topMovie) => ({
                ...topMovie.data,
                Watched: false,
            })),
        })
    }

    const topMoviesContextData = {
        topMovies,
        getTopMovies,
    }

    return (
        <TopMoviesContext.Provider value={topMoviesContextData}>
            {children}
        </TopMoviesContext.Provider>
    )
}

export default TopMoviesContextProvider
