import './App.css';
import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import { PopulerSearch } from "./component/PopulerSearch";
import { TopRatedMovie } from './component/TopRatedMovie';
import { PopulerMoviesDetails } from './component/PopulerMoviesDetails';
import { TopRatedMovieDetails } from './component/TopRatedMovieDetails';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navbar/>}>
        </Route>
        <Route path="/TopRatedMovie" element={ <TopRatedMovie/>}>
        </Route>
        <Route path="/PopulerSearch" element={ <PopulerSearch/>}>  
        </Route>
        <Route path="/PopulerMoviesDetails"  element={<PopulerMoviesDetails/>}>  
        </Route>
        <Route path="/TopRatedMovieDetails"  element={<TopRatedMovieDetails/>}>  
        </Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;