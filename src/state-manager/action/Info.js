import React from 'react'
import { Route, Link } from 'react-router-dom';
import { BtnRequest } from './BtnRequest'
export  const Info = (props) => {
const infoArr = props.state.films.filter(function(i) {
    return i.title === props.state.info;
  });
if(infoArr[0] !== undefined){
        const titleInfo= infoArr[0].title
        const genresInfo = infoArr[0].genres.join(' ')
        const overviewInfo = infoArr[0].overview
        const release_dateInfo = infoArr[0].release_date
        const vote_averageInfo =infoArr[0].vote_average 
        const poster_pathInfo = infoArr[0].poster_path
        return (
            <nav>
            <Link to = '/'>
            <div className = 'wrap_info'>
                <div className ='wrap_info2'>
                    <div className = 'info'>
                        <h2>{titleInfo}</h2>
                        <h3>{genresInfo}</h3>
                        <p>{overviewInfo}</p>
                        <p>Release date: {release_dateInfo}</p>
                        <p>Rating: {vote_averageInfo}</p>
                    </div>
                </div>
            </div>
            </Link>
            </nav>
        )
} else{
}
return (
    <></>
)
}