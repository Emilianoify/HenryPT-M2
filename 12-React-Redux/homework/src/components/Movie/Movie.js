import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, setMovieDetail } from '../../actions/index';
import './Movie.css';

const API_KEY = "4207ff36";

class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
    }

    /*  componentDidMount(){
         this.props.getMoviedetail(this.props.match.params.id);
      }
  
      componentWillUnmount(){
          this.props.setMovieDetail({})
      }*/

    //de esta manera se guarda en un estado local y no global.
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({ detail: json })
            })
    }

    render() {
        return (
            <div className="movie-detail">
                {this.state.detail === undefined ? (
                    <h1>Cargando</h1>
                ) : this.state.detail.Error !== undefined ?
                    (
                        <h1>No se encontro la pelicula</h1>
                    ) : (
                        <>
                            <h1>Detalle de Pelicula</h1>
                            <h2>{this.state.detail?.Title || ""}</h2>
                            <img src={this.state.detail?.Poster} alt="img" />
                        </>
                    )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.moviesLoaded,
    detail: state.movieDetail
})

const mapDispatchToProps = (dispatch) => ({
    setMoviedetail: (movie) => dispatch(setMovieDetail(movie)),
    getMoviedetail: (imdbID) => dispatch(getMovieDetail(imdbID))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);