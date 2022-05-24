import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/home/Home';
import Header from './common/header/Header'
import OpenCSV from './screens/home/OpenCSV';

import Button from "@mui/material/Button";
import './index.js';
//import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <Router>
    <Header/>
    <nav style={{margin:"0 auto", width:"50%"}}>
      {/* <Link to="/home" className="head-button">Home</Link>
      <Link to="/about">About</Link> */}
      <Button component={Link} to="/" variant="contained" style={{
         backgroundColor: "#1665C0",
         border: "2px solid black",
         padding: "2px",
         fontSize: "12px",
         margin: "0 auto",
         width: "50%",
    }}>Search SQL</Button>
      <Button color="inherit" component={Link} to="/about"
            variant="contained" 
            style={{
              backgroundColor: "transparent",
              border: "2px solid black",
              padding: "2px",
              fontSize: "12px",
              margin: "0 auto",
              width: "50%",}}>Open CSV</Button>
            
    </nav>
  <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<OpenCSV/>} />
  </Routes>
</Router>,

document.getElementById('root')
);