import React, { Component} from 'react';
import { Movies } from './Movies'
import {Form}  from './Form'
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      movies1: undefined,
      image1: undefined,
      movies2: undefined,
      image2: undefined,
      movies3: undefined,
      image3: undefined,
      movies4: undefined,
      image4: undefined,
      movies5: undefined,
      image5: undefined,
      movies6: undefined,
      image6: undefined,
      movies7: undefined,
      image7: undefined,
      movies8: undefined,
      image8: undefined,
      movies9: undefined,
      image9: undefined,
      movies10: undefined,
      image10: undefined,
    }
  }
  handleChange = async (event) => {
    this.setState({
      value: event.target.value,
      }) 
      const api_url = await 
    fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${this.state.value}&searchBy=title`)
    const data = await api_url.json();
    let arrTitle = [];
    let arrPoster = [];
    for(let i=0; i < data.data.length; i++){
        let title = data.data[i].title.split()
        let poster = data.data[i].poster_path.split()
        for(let q = 0; q < title.length; q++){
             arrTitle.push(title[q]);
             arrPoster.push(poster[q])
    this.setState({
        movies1: arrTitle[0],
        image1: arrPoster[0],
        movies2: arrTitle[1],
        image2: arrPoster[1],
        movies3: arrTitle[2],
        image3: arrPoster[2],
        movies4: arrTitle[3],
        image4: arrPoster[3],
        movies5: arrTitle[4],
        image5: arrPoster[4],
        movies6: arrTitle[5],
        image6: arrPoster[5],
        movies7: arrTitle[6],
        image7: arrPoster[6],
        movies8: arrTitle[7],
        image8: arrPoster[7],
        movies9: arrTitle[8],
        image9: arrPoster[8],
        movies10: arrTitle[9],
        image10: arrPoster[9],
    }) 
}}  
    }
getMovies = (e) =>{
    e.preventDefault();
}
render() {
  return (
      <>
    <Form  getMovies = {this.getMovies} handleChange={this.handleChange}/>
   <Movies getMovies = {this.getMovies} handleChange={this.handleChange}
        movies1 =  {this.state.movies1}
        image1 =  {this.state.image1}
        movies2 =  {this.state.movies2}
        image2 =  {this.state.image2}
        movies3 =  {this.state.movies3}
        image3 =  {this.state.image3}
        movies4 =  {this.state.movies4}
        image4 =  {this.state.image4}
        movies5 =  {this.state.movies5}
        image5 =  {this.state.image5}
        movies6 =  {this.state.movies6}
        image6 =  {this.state.image6}
        movies7 =  {this.state.movies7}
        image7 =  {this.state.image7}
        movies8 =  {this.state.movies8}
        image8 =  {this.state.image8}
        movies9 =  {this.state.movies9}
        image9 =  {this.state.image9}
        movies10 =  {this.state.movies10}
        image10 =  {this.state.image10}
    /> 
    </>
  );
}
}
