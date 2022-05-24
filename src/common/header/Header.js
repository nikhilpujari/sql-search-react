
import * as React from "react";
import './Header.css'
//import Home from '../../screens/home/Home';
//import OpenCSV from '../../screens/home/OpenCSV';
import logo from '../../sql.jpeg'

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Button from "@mui/material/Button";


//import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
  
export default function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
  
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
             <img src={logo} className='imgStyle' alt='logo'/>
              <label className="title-head">SQL Query Engine</label>
          </Typography>
          {/* <Button component={Link} to="/home" variant="contained" style={{
        backgroundColor: "transparent",
        marginRight: "5px",
        border: "2px solid white",
        padding: "2px",
        fontSize: "12px",
    }}>Search SQL</Button>
          <Button color="inherit" component={Link} to="/about"
            variant="contained" 
            style={{
            backgroundColor: "transparent",
            marginRight: "5px",
            border: "2px solid white",
            padding: "2px",
            fontSize: "12px",
            }}>Open CSV</Button> */}
        </Toolbar>
      </AppBar>
  );
}