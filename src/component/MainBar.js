import React from 'react'
import './myStyle.css'
// import demoimg from '../staticImg/demoimg.jpg'
// import { SideBar } from './SideBar'

export const MainBar = ({movData}) => {
    
    console.log(movData,"....hello")
  return (
    <>
    {
    movData ?
    // <div className='m-auto'>
    //     <div  className="card "  >
    //         <div className="card-body ">
    //             <div className=''>
    //                 <img className="card-img-top  movie-img-wh" src={`https://image.tmdb.org/t/p/w220_and_h330_face${movData.poster_path}`}  alt="DATAIMAGE NOT FOUND"/>
    //                 <strong className="card-title  d-block">Movie Name:- {movData.title}</strong>
    //                 <strong className="card-text text left d-block  ">Relese Date :- {movData.release_date}</strong>
    //                 <strong className='d-block'> movie popularity: <span>{movData.popularity}</span></strong>
    //                 {/* <strong className="card-title  d-block">Movie Name:- {movData.overview.slice(300)}</strong> */}
            
    //             </div>
    //         </div>
    //     </div> 
    // </div>
    <div className='img-back' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w220_and_h330_face${movData.backdrop_path})`}}>
        <div className='d-flex  m-4 p-4 flex-wrap'>
            <div className='p-4'>
                <img className="card-img-top movie-img-wh " src={`https://image.tmdb.org/t/p/w220_and_h330_face${movData.poster_path}`}   alt="DATAIMAGE NOT FOUND"/>
            </div>
            <div className='p-4 mt-4 shadow p-3 mb-5 bg-white rounded bg-white w-75'>
                <div className='text-left'>
                    <strong className='text-dark'>Movie Name: </strong>
                    <h1 className='text-danger font-weight-bold'>{movData.original_title}({movData.release_date.slice(0,4)})</h1>
                    <p className='font-weight-bold'>Language:<span className='m-2'>({movData.original_language})</span></p>
                    <strong className='text-dark'>Release Date: <span>{movData.release_date}</span></strong>
                    <h4 className='text-dark font-weight-bold'>Overview:</h4>
                    <p className=''>{movData.overview}</p>
                    <strong className='text-dark'>popularity:<span className='m-2'>{movData.popularity}</span></strong>
                    <br/>
                    <strong className='text-dark'>Vote Average:<span className='m-2'>{movData.popularity}</span></strong>
                    <br/>
                    <strong className='text-dark'>Vote count:<span className='m-2'>{movData.popularity}</span></strong>
                </div>
            </div>
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
