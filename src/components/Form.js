import React from 'react'
export class Form extends React.Component{
    render(){
    return(
        <form onSubmit = {this.props.getMovies}>
            <label>
            <h2>Search: </h2>
            <div className='wrap'>
                <input className='input' type="text"  onChange={this.props.handleChange} />
            </div>
            </label>
            <input type="submit" value="Search" className='button'/>
        </form>
    )
    }
}
