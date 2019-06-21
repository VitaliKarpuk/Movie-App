import React from 'react'
export const BtnSort = (props) => { 
let arrReiting = props.state.map(i => i.vote_count)
    const BtnSortDate = (e) =>{
        e.preventDefault();
    }
        return (
            <>
            <button className = 'BtnSort' onClick = {BtnSortDate}>Sort</button>
            {/* <div className = 'wrap'>
            {this.state.films.map(el => {
                 return(
                     <div className = 'wrap_movies'>
                        <img src ={el.poster_path}/>
                        <p> {el.title}</p>
                        <p> {el.vote_count}</p>
                     </div>
                 )})
            }  
            </div>  */}
            </>
        )

}


