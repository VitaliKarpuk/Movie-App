import React from 'react'
export const BtnGenresSearch = (props) =>{
    const genresSearch = (event) => {
        event.preventDefault();
        props.state.url = `https://reactjs-cdp.herokuapp.com/movies?search=${props.value}&searchBy=genres&limit=20`
    }
        return (
        <button className = 'genresSearch' onClick = {genresSearch}>GENRES</button>
    )
}