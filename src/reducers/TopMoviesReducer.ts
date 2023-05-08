import { TopMoviesActionType } from "./types"

const GET_TOP_MOVIES = TopMoviesActionType

interface TopMovies {
    imdbID: string
    Title: string
    Watched: boolean
}

export type TopMoviesState = TopMovies[]

export type TopMoviesAction = {
    type: typeof GET_TOP_MOVIES,
    payload: TopMovies[]
}

export const topMoviesReducer = (state: TopMoviesState, action: TopMoviesAction) => {
    switch (action.type) {
        case GET_TOP_MOVIES:
            return action.payload
        
        default: 
            return state 
    }
}