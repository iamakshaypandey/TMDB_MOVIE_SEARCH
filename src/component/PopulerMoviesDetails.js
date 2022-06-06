import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavBarTwo } from './NavBarTwo';

export const PopulerMoviesDetails = () => {
    const urlParams = window.location.search;
    const apiKey = "5d98a7a1405b8032e28c31e19e4d10a9"

    const [popularDetails, setPopularDetails] = useState([]);


    const apiUrl = `https://api.themoviedb.org/3/movie/${urlParams.slice(4)}?api_key=${apiKey}&language=en-US`

    useEffect(() => {
        getMovieWithId();
        // eslint-disable-next-line
    }, []);

    const getMovieWithId = async () => {
        try {
            const res = await axios.get(apiUrl);
            console.log("response is here ", res);
            setPopularDetails(res.data)
        } catch (err) {
            console.error("ERROR IN getMovieWithId", err);
        }
    }

    // console.log('final data is hear',popularDetails);
    return (
        <>
            <NavBarTwo />
            <div className=' container'>
                <div className='img-back m-auto' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w220_and_h330_face${popularDetails?.backdrop_path})` }}>
                    <div className='d-flex justify-content-center align-item-center flex-wrap'>
                        <div className='p-4'>
                            <img className="card-img-top movie-img-wh " src={`https://image.tmdb.org/t/p/w220_and_h330_face${popularDetails?.poster_path}`} alt="DATAIMAGE NOT FOUND" />
                        </div>
                        <div className='p-4 ml-4 mt-4 shadow p-3 mb-5 bg-white rounded bg-white w-75'>
                            <div className='text-left'>
                                <strong className='text-dark'>Movie Name: </strong>
                                <h1 className='text-danger font-weight-bold'>{popularDetails?.original_title}({popularDetails?.release_date ? popularDetails?.release_date.slice(0, 4) : ''})</h1>
                                <p className='font-weight-bold'>Language:<span className='m-2'>({popularDetails?.original_language})</span></p>
                                <strong className='text-dark'>Release Date: <span>{popularDetails?.release_date}</span></strong>
                                <h4 className='text-dark font-weight-bold'>Overview:</h4>
                                <p className=''>{popularDetails?.overview}</p>
                                <strong className='text-dark'>popularity:<span className='m-2'>{popularDetails?.popularity}</span></strong>
                                <br />
                                <strong className='text-dark'>Vote Average:<span className='m-2'>{popularDetails?.popularity}</span></strong>
                                <br />
                                <strong className='text-dark'>Vote count:<span className='m-2'>{popularDetails?.popularity}</span></strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

