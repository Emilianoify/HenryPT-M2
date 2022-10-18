import { ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL } from "../actions";
const initialState = JSON.parse(window.localStorage.getItem('reduxStore') ||JSON.stringify ({
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
})
);
//De esta manera guardamos todos los datos.
function saveState(state){
    window.localStorage.setItem('reduxStore', JSON.stringify(state))
}

function rootReducer(state = initialState, {type, payload}) {
    let newState;
    switch (type) {
        case ADD_MOVIE_FAVORITE:{
            newState = {
                ...JSON.parse(JSON.stringify(state)),
                moviesFavourites: JSON.parse(
                    JSON.stringify(state.moviesFavourites))
                    .concat(payload)
            }
            break;
        };

        case REMOVE_MOVIE_FAVORITE:{
            newState = {
                ...JSON.parse(JSON.stringify(state)),
                moviesFavourites: state.moviesFavourites.filter((movie) => movie.id !== payload)
            }
            break;
        }

        case GET_MOVIE_DETAIL:{
            newState = {
                ...JSON.parse(JSON.stringify(state)),
                movieDetail: payload,
              };
              break;
        }

        case GET_MOVIES:{
            //Agregando el .Search obtenemos solo lo que nos interesa.
            newState = {
                ...JSON.parse(JSON.stringify(state)),
                moviesLoaded: payload.Search,
              };
              break;
        }
    
        default:
            newState = state;
    }

    saveState(newState);

    return newState;

  }

  export default rootReducer;