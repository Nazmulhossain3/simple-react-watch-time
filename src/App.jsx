import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home";
import SideCart from "./component/SideCart/SideCart";
import { useState } from "react";

function App() {
  const [watchTime,setWatchTime] = useState("")

  const handleWatchTime = (time)=> {
    const previousWatchTime = JSON.parse(localStorage.getItem('watch-time'))
    if(previousWatchTime){
      const sum = previousWatchTime + time;
      localStorage.setItem('watch-time',sum);
      setWatchTime(sum);
    }
    else[
      localStorage.setItem('watch-time',time),
      setWatchTime(time)
    
    ]

  }
  return (
    <div className="App">
      <div className="main row d-flex justify-content-space-between">
       
        <div className="home-Container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>

      
        <div className="sideCart col-md-4 card mt-4">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
     
      </div>
    </div>
  );
}

export default App;
