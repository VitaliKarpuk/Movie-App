import React, { Component } from 'react'
import { BtnSort }  from './BtnSort'
import { BtnTitleSearch } from './BtnTitleSearch'
import { BtnGenresSearch } from './BtnGenresSearch'
import { Route, Link } from 'react-router-dom';
import { Info } from './Info'
export class  BtnRequest extends Component { 
     constructor(props) {
        super(props);
        this.state = {
            films: [],
            url:`https://reactjs-cdp.herokuapp.com/movies?sortOrder=asc&search=${this.props.state}&searchBy=title&limit=40`
        }
    }
    loadData = (event) => {
        event.preventDefault();
        fetch(this.state.url)
        .then(results => { return results.json() }).then(data => {
            this.setState({
                 films: data.data.map(item => item) 
            });
        }).catch(() => {
             alert('Ошибка!');
        });
    }
    render(){
        return (
            <>
            <input type="submit" value="SEARCH" className='button'  onClick = {this.loadData}  />
            <BtnSort state = {this.state.films}/>
            <BtnTitleSearch state = {this.state} value = {this.props.state}/>
            <BtnGenresSearch state = {this.state} value = {this.props.state}/>
            <p> {this.state.films.length} movies find</p>
            <div className = 'wrap' >
            <nav>
                <Link to="/film">
                    {this.state.films.map(el => {
                        return(
                            <div className = 'wrap_movies'>
                                <img src ={el.poster_path}/>
                                <p> {el.title}</p>
                                <p> {el.vote_count}</p>
                            </div>
                    )})
            }
                </Link>
            </nav>
            </div> 
            <Info state = {this.state.films}/>
            </>
        )
    }
}


