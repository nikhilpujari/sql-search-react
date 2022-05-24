import React, { useState } from "react";
import Papa from "papaparse";
import "./OpenCSV.css";
import './Home.css';
import Button from '@mui/material/Button';
 
// Allowed extensions for input file
const allowedExtensions = ["csv"];
 
const OpenCSV = () => {
     
    // This state will store the parsed data
    const [data, setData] = useState([]);
    const [head, setHead] = useState([]);
     
    // It state will contain the error when
    // correct file extension is not used
    const [error, setError] = useState("");
     
    // It will store the file uploaded by the user
    const [file, setFile] = useState("");
 
    // This function will be called when
    // the file input changes
    const handleFileChange = (e) => {
        setError("");
         
        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];
             
            // Check the file extensions, if it not
            // included in the allowed extensions
            // we show the error
            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Please input a csv file");
                alert(error);
                return;
            }
 
            // If input type is correct set the state
            setFile(inputFile);
        }
    };
    const handleParse = () => {
         
        // If user clicks the parse button without
        // a file we show a error
        if (!file) return setError("Enter a valid file");
 
        // Initialize a reader which allows user
        // to read any file or blob.
        const reader = new FileReader();
         
        // Event listener on reader when the file
        // loads, we parse it and set the data.
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true  });
            const parsedData = csv?.data;
            const columns = Object.keys(parsedData[0]);
            setData(parsedData);
            setHead(columns);
            //console.log(parsedData[1]);
        };
        reader.readAsText(file);
        //console.log(head[0]);
    };
 
    return (
        <div>
        <div className="search">
            <label htmlFor="csvInput"  style={{textAlign: "center",
    display: "block"}}>
                Choose a CSV file to display the table below
            </label>
            <input
                onChange={handleFileChange}
                id="csvInput"
                name="file"
                type="File"
                style={{margin: "0 auto",
                display: "block", paddingLeft: "20%", paddingBottom: "10px"}}
            />
            <div>
                <Button variant="outlined" onClick={handleParse} style={{margin: "0 auto",
    display: "block"}}>Parse</Button>
            </div>
        </div>
            
        <div className="table-div">
            <table className="table-style" style={{overflow: "auto",display: "block"}}>
                <thead>
                    <tr>
                    {head.map((col,
                        idx) => <th key={idx}>{col}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((parsedData, index) => (
                            <tr key={index} >
                                {head &&
                                        head.map((val) => {
                                          return <td>{parsedData[val]}</td>;
                                        })}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};
 
export default OpenCSV;