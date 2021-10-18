import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends Component
{
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
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