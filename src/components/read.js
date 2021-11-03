import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends Component
{
    componentDidMount() {
        //it reads in fromm api/movies
        axios.get('http://localhost:4000/api/movies')
        .then((response) =>{
            this.setState({myMovies: response.data.movies})
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    state = {
        myMovies: []
    }
        
    render() {
        return(
            <div>
                <h1>This is my Read Component.</h1>
                <Movies films={this.state.myMovies}></Movies>
            </div>
        )
    };
}
export default Read;