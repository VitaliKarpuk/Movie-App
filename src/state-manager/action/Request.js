import React, { useState } from 'react'
import { ListMovies } from '../../components/ListMovies'
export const BtnSearch = (props) =>{
    const [films, setFilms] = useState([]);
    const loadData = (event) => {
        event.preventDefault(); 
        fetch(props.url)
        .then(results => { return results.json() }).then(data => {
            setFilms (() =>data.data.map(item => item))
        }).catch(() => {
             alert('Ведите название фильма!');
        });
    }
    const BtnSortReting = () => {
        setFilms(() => films.sort((a,b) => b.vote_count - a.vote_count))   
    }
    const BtnSortDate = () => {
        setFilms(() => films.sort((a,b) =>b.release_date.split('-')[0] - a.release_date.split('-')[0]))
    }
        return (
            <>
                <input type="button" value="SEARCH" className='BtnSearch' onClick = {loadData}  />
                <div className =  'Sort'>
                    <h3>Sort by</h3>
                   <button  className = 'BtnSort' onClick = {BtnSortReting}>Reting</button>
                   <button className = 'BtnSort' onClick = {BtnSortDate}>Release date</button> 
                </div>
                <ListMovies films = {films}/>
            </>
        )
}


