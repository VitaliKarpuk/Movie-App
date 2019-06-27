import React, { useEffect  } from 'react'
export  const BtnSort = (props) => {
    const BtnSortReting = () => {
        return props.films.sort((a,b) => b.vote_count - a.vote_count)
    }
   
    return(
        <button className = 'BtnSort'  onClick = {BtnSortReting}>Sort</button>
    )
}