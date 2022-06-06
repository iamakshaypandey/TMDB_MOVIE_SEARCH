import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavBarTwo } from './NavBarTwo'
// import { PopulerMoviesDetails } from './PopulerMoviesDetails'
import { Link } from 'react-router-dom'


export const PopulerSearch = () => {

  const [populers, setPopuler] = useState([])
  // const [populersData, setPopulersDAta] = useState('')

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=1`)
      .then(res => {
        console.log(res.data.results)
        setPopuler(res.data.results)
      })
      .catch(err => console.error(err))
  }, [])

  
  return (
    <>
      <NavBarTwo />
      <div className='container mx-auto'>
        <div className='row'>
          {populers.map((populer) => {
            return (
              <div
                key={populer.id}
                className=" card bg-colore-card text-p-overview m-4 col-4 col-md-3 col-sm-4  w-25 "
              >
                <Link to={`/PopulerMoviesDetails?id=${populer.id}`}>
                  <img className="card-img-top" src={`https://image.tmdb.org/t/p/w220_and_h330_face${populer.poster_path}`} alt="Card" />
                </Link>
                <div className="card-body">
                  <h6 className="text-light card-title text-p-overview-h">{populer.title}</h6>
                  <strong className="card-text text-light">{populer.release_date}</strong>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </>
  )
}
