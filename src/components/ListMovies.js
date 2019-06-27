import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom';
import { Info } from '../state-manager/action/Info'
export const ListMovies = (props) => {
    const [info, setInfo] = useState([]);
    const state = props.films;
    const BtnInfo = (e) =>{
        e.preventDefault();
        setInfo (e.currentTarget.innerText)
    }
    return (  
        <>
            <div className = 'wrap' >
                {props.films.map(el => {
                    return(
                            
                        <div className = 'wrap_movies' onClick = {BtnInfo} key ={el.id}>
                            <nav>
                                <Link to = 'info'>
                                    <img src ={el.poster_path}  alt = ""/>
                                    <h4 className = 'title'> {el.title}</h4>
                                </Link>    
                            </nav>
                        </div>            
                    )})
                }
            </div>
            <Route exact path = '/' Component = {ListMovies}/> 
            <Route exact path='/info' render={(props) => (
                <Info {...props} state = {state} info = {info}/>
            )}/>
        </>
    )

}