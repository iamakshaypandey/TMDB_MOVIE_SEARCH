import React, { useState } from 'react'
import { MainBar } from './MainBar'
import './myStyle.css'
// import axios from 'axios'
// import { Navbar } from './Navbar'

export const SideBar = ({ movie }) => {
    const [movieDAta, setSearch] = useState('')
    // const [pagination,setPagination] = useState(1)


    const MovieDetails = (movData) => {
        console.log('i am akshay', movData);
        return setSearch(movData)

    }

    // let count=0
    // const handleScroll = (e) =>{  
    //     const checkDocumentHight = document.querySelector('.scroll')
    //     const scrollTop=checkDocumentHight.scrollTop
    //     const scrollHight=checkDocumentHight.scrollTop
    //     const clientHight = checkDocumentHight.clientHeight
    //     // const offsetHeight = checkDocumentHight.offsetHeight

    //     console.log('top ofset',checkDocumentHight.offsetHeight);
    //     // console.log('clientHight',clientHight);
    //     console.log('scrollHight',scrollHight);
    //     console.log('scrolltop', scrollTop);




    //     // if(scrollTop>=5000){
    //     //     console.log('akshay you are bottem in this page');
    //     //     setPagination(pagination+1)
    //     //     console.log('pagination:=',pagination );
    //     // }




    //     // console.log('window heghit',checkDocumentHight.innerHeight);
    //     // console.log('heghit',e.target.documentElement.scrollHight);
    // }

    // useEffect(()=>{
    //     // const checkDocumentHight = document.querySelector('#wrapper')
    //     const checkDocumentHight = document.querySelector('.scroll')

    //     // console.log('heyy akshay this is ',checkDocumentHight);
    //     // if(checkDocumentHight===null)return
    //     checkDocumentHight.addEventListener('scroll',handleScroll)
    // },[])



    //   console.log(movieDAta,"....",);
    //   const context = createContext()

    return (
        <>
            <div className="d-flex" id="wrapper">
                <div className="border-end  scrolling-page " id="sidebar-wrapper">
                    <div className="list-group list-group-flush">
                        <div className='scroll' data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0">
                            {
                                movie ? movie.map(movie =>
                                    <div key={movie.id} className="scrolling  list-group-item list-group-item-action
                         list-group-item-light p-3 client-h"
                                        onClick={() => MovieDetails(movie)}
                                    >
                                        <div className='card bg-colore-card'>
                                            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="card-img" />
                                            <div className='card-body'>
                                                <div className='text-light'>{movie.title}({movie.release_date ? movie.release_date.slice(0, 4) : ''})</div>
                                                <div className='text-light'><strong>language:</strong>{movie.original_language}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                    : ''
                                    // <div className='bg-warning w-100 h-100 container-fluide'></div>
                            }
                        </div>
                    </div>
                </div>
                <MainBar movData={movieDAta} />
            </div>
        </>
    )
}
