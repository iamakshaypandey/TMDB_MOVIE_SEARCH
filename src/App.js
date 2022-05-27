import './App.css';
import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar';
import { SideBar } from './component/SideBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <SideBar/> */}
      <Footer/>
    </div>
  );
}

export default App;
