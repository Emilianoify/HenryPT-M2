const API_KEY = "4207ff36";

export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE"
export const GET_MOVIES = "GET_MOVIES"
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE"
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL"

export function getMovies (title) {

    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)
        .then(response => response.json())
        .then(json => {
            dispatch({type: GET_MOVIES, payload: json})
        });
    };
}

export function setMovieDetail(movie){
    return {type: GET_MOVIE_DETAIL, payload: movie}
}

export function getMovieDetail (id) {
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({type: GET_MOVIE_DETAIL, payload: json})
        })
    }
};

export function addMovieFavorite (payload) {
    return {type: ADD_MOVIE_FAVORITE, payload}
};

export function removeMovieFavorite (id) {
    return {type: REMOVE_MOVIE_FAVORITE, payload:id}
};

