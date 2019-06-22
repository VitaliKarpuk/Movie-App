import React from 'react'
export const BtnSort = (props) => { 
    console.log(props)
    const BtnSortDate = (value) =>{
        value.preventDefault();
        props.state.films.sort((a,b) => a.vote_count-b.vote_count)
        console.log(props.state)
    }
        return (
            <>
                <button className = 'BtnSort' onClick = {BtnSortDate}>Sort</button>
            </>
        )

}


