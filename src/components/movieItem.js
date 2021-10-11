import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class MovieItem extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.myFilm.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.myFilm.Poster}></img>

                            <footer>
                                {this.props.myFilm.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>


            </div>
        )
    }
}
export default MovieItem;