import React, { useEffect, useState } from 'react'
import { MainBar } from './MainBar'
import './myStyle.css'
// import axios from 'axios'
// import { Navbar } from './Navbar'

export const SideBar = ({movie}) => {
    const [movieDAta,setSearch] = useState('')

   
    const MovieDetails =(movData)=>{
        console.log('i am akshay',movData);
        return  setSearch(movData)

    }

    // let count=0
    // const handleScroll = (e) =>{
    //     const clienthight = document.querySelector('.client-h')
    //     count++
    //     console.log(e.target)
    //     console.log('scorolling ',count);
    // }

    // useEffect(()=>{
    //     const checkDocumentHight = document.querySelector('.scrolling')
    //     if(checkDocumentHight===null)return
    //     checkDocumentHight.addEventListener('scroll',handleScroll)
    // },[])
    

   
      console.log(movieDAta,"....",);
  return (
    <>
        <div className="d-flex  mt-3" id="wrapper">
            <div className="border-end bg-white " id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                <div className='scroll' data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
                {/* <h4 className='bg-primary p-2 m-2'>Searched Movies</h4> */}
                    {        
                        movie ? movie.map(movie=>
                        <div key={movie.id} className="scrolling list-group-item list-group-item-action
                         list-group-item-light p-3 client-h"
                         onClick={()=>MovieDetails(movie)}
                        >
                        <div className='card'>
                           <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="card-img" />
                           <div className='card-body'>
                               <div>{movie.title}({movie.release_date.slice(0,4)})</div>
                               <div><strong>language:</strong>{movie.original_language}</div>
                               <div></div>
                               <div></div>
                           </div>
                        </div>
                        </div>
                          )
                          : ''
                    }
                </div>
                </div>
            </div>
            <MainBar  movData={movieDAta}  />
        </div>
    </>
  )
}
