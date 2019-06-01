import React from 'react'
export class Movies extends React.Component{
    render(){
 return(
    <div className = 'wrap_movies' onSubmit = {this.props.getMovies} onChange={this.props.handleChange}>
    <div className = 'movie'> 
        <img src = {this.props.image1}></img>
        <p>{this.props.movies1}</p>
    </div>
    <div className = 'movie'>
        <img src = {this.props.image2}></img>
        <p>{this.props.movies2}</p>
    </div>
    <div className = 'movie'>
        <img src = {this.props.image3}></img>
        <p>{this.props.movies3}</p>
    </div>
    <div className = 'movie'>
        <img src = {this.props.image4}></img>
        <p>{this.props.movies4}</p>
    </div>
    <div className = 'movie'>
        <img src = {this.props.image5}></img>
        <p>{this.props.movies5}</p>
    </div>
    <div className = 'movie'>
        <img src = {this.props.image6}></img>
        <p>{this.props.movies6}</p>
    </div>
    <div className = 'movie'>
        <img src = {this.props.image7}></img>
        <p>{this.props.movies7}</p>
    </div>
    <div className = 'movie'>
        <img src = {this.props.image8}></img>
        <p>{this.props.movies8}</p>
    </div>
    <div className = 'movie'>
        <img src = {this.props.image9}></img>
        <p>{this.props.movies9}</p>
    </div>
    <div className = 'movie'>
        <img src = {this.props.image10}></img>
        <p>{this.props.movies10}</p>
    </div>
</div>
)
    }
}