import React from 'react'
export const BtnGenresSearch = (props) =>{
    const genresSearch = (event) => {
        event.preventDefault();
        props.state.url = `https://reactjs-cdp.herokuapp.com/movies?search=${props.value}&searchBy=genres&limit=40`
    }
        return (
        <button onClick = {genresSearch}>GENRES</button>
    )
}