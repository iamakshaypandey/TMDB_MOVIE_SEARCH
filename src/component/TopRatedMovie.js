import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavBarTwo } from './NavBarTwo'
import { Link } from 'react-router-dom'

export const TopRatedMovie = () => {

  const [TopReteds,setTopRated] = useState([])

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=1&include_adult=false/tv/{tv_id}/season/{season_number}`)
  .then(res=>{
    console.log(res.data.results)
    setTopRated(res.data.results)
  })
  .catch(err=>console.error(err))
  },[])

  return (
    <>
     <NavBarTwo/>
     <div className='container mx-auto'>
      <div className='row'>
      {TopReteds.map((TopRated)=>{
        return (
          <>
          <div key={TopRated.id} className="card m-4 col-4 col-md-3 col-sm-4  w-25 " >
            <Link to={`/TopRatedMovieDetails?id=${TopRated.id}`}>
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w220_and_h330_face${TopRated.poster_path}`} alt="Card"/>
            </Link>
                <div className="card-body">
                  <h4 className="card-title">{TopRated.title}</h4>
                  <p className="card-text">{TopRated.release_date}</p>
                 
                </div>
          </div>
          </>
        )
      })
      }
    </div>
    </div>
    </>
  )
}
