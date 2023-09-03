import React from "react";
import Header from './Components/Header'
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddBlog from "./Components/AddBlog";
import HomeScreen from "./Components/HomeScreen";
import ReadScreen from "./Components/ReadScreen";

function App() {

  return (
    <div className="background">

      <div className="app" >
        <Header />
        <BrowserRouter>
          <Routes>
              <Route  path ="/" exact element= {<HomeScreen/>} />
              <Route  path ="/addblog" element={<AddBlog />}/>
              <Route  path ="/readblog" element={<ReadScreen />}/>
          </Routes>
      </BrowserRouter>
         
      </div>
      </div>
  );
}

export default App;