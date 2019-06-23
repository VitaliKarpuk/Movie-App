import React, { Component } from 'react'
import { BtnTitleSearch } from './BtnTitleSearch'
import { BtnGenresSearch } from './BtnGenresSearch'
import { Route, Link } from 'react-router-dom';
import { Info } from './Info'

export class  BtnRequest extends Component { 
     constructor(props) {
         
        super(props);
        this.state = {
            films: [],
            info: [],
            url:`https://reactjs-cdp.herokuapp.com/movies?sortOrder=asc&search=${this.props.state}&searchBy=title&limit=20`
        }
    }
    BtnInfo = (e) => {   
        this.setState({
            info: e.currentTarget.innerText
        })       
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
    BtnSorts = (value) =>{
        this.setState({
            films: this.state.films.sort((a,b) => a.vote_count - b.vote_count)
        })
    }
    render(){
        return (
            <>
            <input type="submit" value="SEARCH" className='BtnSearch'  onClick = {this.loadData}  />
            <div className = 'BtnStates'>
                <button className = 'BtnSort' sort = {this.BtnSorts} onClick = {this.BtnSorts}>Sort</button>
                <BtnTitleSearch state = {this.state} value = {this.props.state}/>
                <BtnGenresSearch state = {this.state} value = {this.props.state}/>
            </div>
            <p> {this.state.films.length} movies find</p>
            <div className = 'wrap' >             
                    {this.state.films.map(el => {
                        return(
                            <nav>
                                <Link to = '/info'>
                                    <div className = 'wrap_movies' onClick = {this.BtnInfo} key ={el.id}>
                                        <img src ={el.poster_path} state = {this.state.films} />
                                        <p className = 'title'> {el.title}</p>
                                    </div>
                                </Link>
                            </nav>
                        )})
                    }

            </div> 
            <div></div>
                <Route exact path = '/' Component = {this.BtnRequest}/>
                <Route exact path='/info' render={(props) => (
                    <Info {...props} state = {this.state} />
                )}/>
            </>
        )
    }
}


