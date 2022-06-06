import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavBarTwo } from './NavBarTwo';

export const TopRatedMovieDetails = () => {
    const urlParamsTopMovie = window.location.search;
    console.log('urlParamsTopMovie', urlParamsTopMovie);
    const apiKey = "5d98a7a1405b8032e28c31e19e4d10a9"

    const [TopRatedMovieDetailsID, setTopRatedMovieDetailsID] = useState([]);


    const apiUrl = `https://api.themoviedb.org/3/movie/${urlParamsTopMovie.slice(4)}?api_key=${apiKey}&language=en-US`

    const getTopMovieWithId = async () => {
        try {
            const res = await axios.get(apiUrl);
            console.log("response is here ", res);
            setTopRatedMovieDetailsID(res.data)
        } catch (err) {
            console.error("ERROR IN getTopMovieWithId", err);
        }
    }

    useEffect(() => {
        getTopMovieWithId();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <NavBarTwo />
            <div className='container'>
                <div className='img-back m-auto' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w220_and_h330_face${TopRatedMovieDetailsID?.backdrop_path})` }}>
                    <div className='d-flex justify-content-center align-item-center flex-wrap'>
                        <div className='p-4'>
                            <img className="card-img-top movie-img-wh " src={`https://image.tmdb.org/t/p/w220_and_h330_face${TopRatedMovieDetailsID?.poster_path}`} alt="DATAIMAGE NOT FOUND" />
                        </div>
                        <div className='p-4 ml-4 mt-4 shadow p-3 mb-5 bg-white rounded bg-white w-75'>
                            <div className='text-left'>
                                <strong className='text-dark'>Movie Name: </strong>
                                <h1 className='text-danger font-weight-bold'>{TopRatedMovieDetailsID?.original_title}({TopRatedMovieDetailsID?.release_date ? TopRatedMovieDetailsID?.release_date.slice(0, 4) : ''})</h1>
                                <p className='font-weight-bold'>Language:<span className='m-2'>({TopRatedMovieDetailsID?.original_language})</span></p>
                                <strong className='text-dark'>Release Date: <span>{TopRatedMovieDetailsID?.release_date}</span></strong>
                                <h4 className='text-dark font-weight-bold'>Overview:</h4>
                                <p className=''>{TopRatedMovieDetailsID?.overview}</p>
                                <strong className='text-dark'>popularity:<span className='m-2'>{TopRatedMovieDetailsID?.popularity}</span></strong>
                                <br />
                                <strong className='text-dark'>Vote Average:<span className='m-2'>{TopRatedMovieDetailsID?.popularity}</span></strong>
                                <br />
                                <strong className='text-dark'>Vote count:<span className='m-2'>{TopRatedMovieDetailsID?.popularity}</span></strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

