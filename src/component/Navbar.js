import React, {  useState } from 'react'
import BRAND from '../staticImg/barnd.svg'
import axios from 'axios'
import { SideBar } from './SideBar'


export const Navbar = () => {
    const [data,setData] = useState('')
    // console.log(data,'data');
    

    const handleClick = (e)=>{
        e.preventDefault()
        const {value} = e.target
        if(!value)return
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=${value}&page=1&include_adult=false`)
        .then(res=>setData(res.data.results))
        .catch(err=>console.log(err))
        
    }

    const SearchTvSession = () =>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=1&include_adult=false/tv/popular`)
        .then(res=>console.log(res.data.results))
        .catch(err=>console.log(err))
    }

    
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand h1" href="index.html">
            <img src={BRAND} alt="brand" className='w-50 h-50' />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2"
             type="search" placeholder="Search movie"
              aria-label="Search"
              name={'Search'}
              onChange={handleClick}
              />
            <button
             className="btn btn-outline-success my-2 my-sm-0"
             type="submit">Search</button>
            </form>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <div className="nav-link text-white h6 m-3" onClick={SearchTvSession} >Populer show</div>    
                </li>
                <li className="nav-item">
                    <div className="nav-link text-white h6 m-3" >Top Reted</div>
                </li>
            </ul>
        </div>
    </nav>
    {console.log(data,'data')}
    <SideBar movie={data}/>
    </>
  )
}

