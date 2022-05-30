import React, { useState } from 'react'
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
    // if(!movieDAta)return
   
      console.log(movieDAta,"....",);
  return (
    <>
        <div className="d-flex  mt-3" id="wrapper">
            <div className="border-end bg-white " id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                <div className='scroll' data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
                    {
                        movie ? movie.map(movie=>
                        <div key={movie.id} className="list-group-item list-group-item-action
                         list-group-item-light p-3"
                         onClick={()=>MovieDetails(movie)}
                        >{movie.title}
                        </div>
                          )
                          : 'movie not exsist'
                    }
                </div>
                </div>
            </div>
            <MainBar  movData={movieDAta}  />
        </div>
    </>
  )
}
