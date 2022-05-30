import axios from 'axios'
import {useEffect,useState} from 'react'

export default function UseMovieSearch(query,pageNumber) {
    useEffect(()=>{
        axios({
            method:'GET',
            url: '',
            params: {q:query,page:pageNumber}
        }).then(res=>{
            console.log(res.data);
        })
    },[query,pageNumber])
  return null
}