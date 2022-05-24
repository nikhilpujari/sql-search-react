import './Home.css';
import React from "react";
import { useState } from "react";
import { CsvToHtmlTable } from "react-csv-to-table";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Header from "../../common/header/Header";
import OpenCSV from "./OpenCSV";
import "./OpenCSV.css";
import data1 from "../../tables/table1.js";
import data2 from "../../tables/table2.js";
import data3 from "../../tables/table3.js";
import data4 from "../../tables/table4.js";
import data5 from "../../tables/table5.js";
import data6 from "../../tables/table6";


function Home(){
      var tables = [
        data1,
        data2,
        data3,
        data4,
        data5,
        data6,
      ];
      const getInitialState = () => {
        const value = "0";
        return value;
      };
      const [value, setValue] = useState(getInitialState);
      const handleChange = (e) => {
        setValue(e.target.value);
      };
      // const [openCSV, setOpenCSV] = useState("false");
      // console.log(openCSV);
      // const hideShow = (e) => {
      //   setOpenCSV("true");
      //   console.log(openCSV);
      // }
      const [table, setTable] = useState();
      function handleSubmit() {
        console.log(value);
        setTable(tables[value]);
      }

        return(
            <div>
              <div className="search">
              <FormControl style={{width:"70%"}}>
              <InputLabel id="demo-simple-select-label"> Select A Query To Run</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={value} 
                onChange={handleChange}
                
              >
                <MenuItem value={0}>SELECT * FROM customer;</MenuItem>
                <MenuItem value={1}>SELECT TOP 10 * FROM customer;</MenuItem>
                <MenuItem value={2}>SELECT contactName, phone, address FROM customer;</MenuItem>
                <MenuItem value={3}>SELECT * from customer where country='UK';</MenuItem>
                <MenuItem value={4}>SELECT * from customer where customerID LIKE 'F%';</MenuItem>
                <MenuItem value={5}> SELECT COUNT(customerID), country
                FROM customer
                GROUP BY country;</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" style={{padding: "10px", marginTop: "5px", marginLeft:"20px"}} onClick={handleSubmit}>Search</Button>
            {/* <Button variant="contained" style={{padding: "10px", marginTop: "5px", marginLeft:"10px"}} onClick={hideShow}>Open CSV</Button> */}
      </div>
      <div className="tableWrapper" style={{overflow: "auto",display: "block"}}>
          <br />
          <CsvToHtmlTable
            x-scroll
            className="table-style"
            data={table}
            csvDelimiter=","
            tableClassName="table-style"
            
          />
        </div>
        
            </div>
        )
    
}
export default Home