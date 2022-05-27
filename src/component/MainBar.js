import React from 'react'
import './myStyle.css'
import demoimg from '../staticImg/demoimg.jpg'
// import { SideBar } from './SideBar'

export const MainBar = ({movData}) => {
    
    console.log(movData,"....hello")
  return (
    <>
    {
    movData ?
    <div className="card card-width"  >
        <img className="card-img-top movie-img-wh" src={`https://image.tmdb.org/t/p/w220_and_h330_face${movData.poster_path}`}  alt="DATAIMAGE NOT FOUND"/>
        <div className="card-body ">
            <strong className="card-title  d-block">Movie Name:- {movData.title}</strong>
            <strong className="card-text text left d-block  ">Relese Date :- {movData.release_date}</strong>
            <strong className='d-block'> movie popularity: <span>{movData.popularity}</span></strong>
        </div>
    </div> 
    : 
    <div className="card card-width"  >
    <div className="card-img-top movie-img-wh"/>
    <div className="card-body ">
        
    </div>
    </div> 
    }
    </>
  )
}
