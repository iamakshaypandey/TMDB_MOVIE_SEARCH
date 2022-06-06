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
                <div className='img-back m-auto' style={{
                    backgroundImage: `linear-gradient(rgb(57 107 131 / 98%), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w220_and_h330_face${movData?.backdrop_path})`,
                     }}>
                    <div className='d-flex justify-content-center align-item-center flex-wrap'>
                        <div className='p-4'>
                            <img className="card-img-top movie-img-wh  " src={`https://image.tmdb.org/t/p/w220_and_h330_face${movData?.poster_path}`} alt="DATAIMAGE NOT FOUND" />
                        </div>
                        <div className=' m-4 shadow details-background rounded  w-75'>
                            <div className='text-left'>
                                <strong className='text-col'>Movie Name: </strong>
                                <h3 className='text-p-overview-h font-weight-bold'>{movData?.original_title}({movData?.release_date ? movData?.release_date.slice(0, 4) : ''})</h3>
                                <p className='font-weight-bold text-col'>Language:<span className='m-2 mb-0'>({movData?.original_language})</span></p>
                                <strong className='text-col'>Release Date: </strong>
                                <span className='font-weight-bold text-col-p'>{movData?.release_date}</span>
                                <br/>
                                <strong className='text-col font-weight-bold'>Overview:</strong>
                                <p className='text-dark font-weight-bold text-col-p text-p-overview'>{movData?.overview}</p>
                                <strong className='text-col'>popularity:</strong>
                                <span className='m-2 font-weight-bold text-col-p'>{movData?.popularity}</span>
                                <br />
                                <strong className='text-col'>Vote Average:</strong>
                                <span className='m-2 font-weight-bold text-col-p'>{movData?.popularity}</span>
                                <br />
                                <strong className='text-col'>Vote count:</strong>
                                <span className='m-2 font-weight-bold text-col-p'>{movData?.popularity}</span>
                            </div>
                        </div>
                    </div>
                </div>
    : ''
//    <div className='bg-dark w-100 container-fluide'></div>
    
    }
    </>
  )
}
