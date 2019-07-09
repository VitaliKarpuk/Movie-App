import React, { useState } from 'react'
import { BtnSearch } from '../state-manager/action/Request'
export const Form = () =>{
  const [value, setValue] = useState('');
  const [url, setUrl] = useState(``);
  const BtnTitleSearch = e =>{
    e.preventDefault();
    setUrl (`https://reactjs-cdp.herokuapp.com/movies?sortOrder=asc&search=${value}&searchBy=title&limit=20`)
}
  const BtnGenresSearch = e =>{
    e.preventDefault();
    setUrl (`https://reactjs-cdp.herokuapp.com/movies?search=${value}&searchBy=genres&limit=20`)
  }
  const handleChange = e => {
    e.preventDefault();
      setValue( e.target.value )
      setUrl (`https://reactjs-cdp.herokuapp.com/movies?sortOrder=asc&search=${value}&searchBy=title&limit=20`)
    }
    
    

    return(
        <>
            
            <form onSubmit =  {handleChange} >
              <div className = 'Find_form'>
                <h2>Find your movie :  </h2>
                <div className = 'Btn'>
                  <input className='input' type="text" value={value} onChange={handleChange} />
                  <button className = 'titleSearch' onClick = {BtnTitleSearch}>TITLE</button>
                  <button className = 'genresSearch' onClick = {BtnGenresSearch}>GENRES</button>
               
                
                <BtnSearch  value = {value} url = {url} /></div>
              </div>
            </form>
            
        </>
    )
}  



