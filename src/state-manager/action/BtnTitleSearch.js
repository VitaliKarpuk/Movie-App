import React from 'react'
export const BtnTitleSearch = (props) =>{
  const titleSearch = (event) => {
    event.preventDefault();
    props.state.url = `https://reactjs-cdp.herokuapp.com/movies?sortOrder=asc&search=${props.value}&searchBy=title&limit=20`
}
     return (
        <button className = 'titleSearch' onClick = {titleSearch}>TITLE</button>
    )
}