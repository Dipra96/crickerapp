import React,{useEffect,useState} from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import Button from '@material-ui/core/Button';
import '../styles/Shedule.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Team1, Team2, Tournament,Date,Place) {
  return { Team1,Team2, Tournament,Date,Place};
}


const Shedule=()=> {
  const classes = useStyles();

  const [shedules,setShedules]=useState([]);
  const axios = require('axios');
  const rows = [];

    useEffect(() => {
       // rows=[];
        axios.get('http://localhost:3001/shedules')
        .then(resp => {
        //console.log(resp.data);
        resp.data.forEach(element => {
            rows.push(createData(element.Team1,element.Team2,element.Tournament,element.Date,element.Place));   
        });
        setShedules(rows);
        })      
        .catch(error => {
         console.log(error);
        });    
    },[]);  


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className='Table-head'>
          <TableRow>
            <TableCell align="right">Team1</TableCell>
            <TableCell align="right">Team2</TableCell>
            <TableCell align="right">Tournament</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Place</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shedules.map((row) => (
            <TableRow key={row.Date}>
              <TableCell align="right" component="th" scope="row">
                {row.Team1}
              </TableCell>
              <TableCell align="right">{row.Team2}</TableCell>
              <TableCell align="right">{row.Tournament}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.Place}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

export default Shedule
