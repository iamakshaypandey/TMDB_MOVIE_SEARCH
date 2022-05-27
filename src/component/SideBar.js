import React, { useEffect, useState } from 'react'
import { MainBar } from './MainBar'
import './myStyle.css'
import axios from 'axios'
import { Navbar } from './Navbar'

export const SideBar = ({movie}) => {
    const [movieDAta,setSearch] = useState('')
   
    const MovieDetails =(movData)=>{
        console.log('i am akshay',movData);
        return  setSearch(movData)

    }
   
      console.log(movieDAta,"....",);
  return (
    <>
        <div className="d-flex mt-3" id="wrapper">
            <div className="border-end bg-white hidden" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    {
                        movie ? movie.map(movie=>
                        <a key={movie.id} className="list-group-item list-group-item-action
                         list-group-item-light p-3"
                        //  href=''
                         onClick={()=>MovieDetails(movie)}
                        >{movie.title}</a>
                          )
                          : 'movie not exsist'
                    }
                </div>
            </div>
            <MainBar  movData={movieDAta}  />
        </div>
    </>
  )
}
