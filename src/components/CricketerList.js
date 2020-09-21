import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import '../styles/CricketerList.css'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id,PlayerNo, PlayerName, PlayerPosition) {
  return { id,PlayerNo,PlayerName, PlayerPosition};
}

export default function CricketerList() {
  const classes = useStyles();

  const [team,setTeam]=useState([]);
  const [modalTrigger,setModalTrigger]=useState(false);
  const axios = require('axios');
  const [editPlayerNo,setEditPlayerNo]=useState('');
  const [editPlayerName,setEditPlayerName]=useState('');
  const [editPlayerPosition,setEditPlayerPosition]=useState('');

  const rows = [];

    useEffect(() => {
         axios.get('http://localhost:3001/players')
        .then(resp => {
        //console.log(resp.data);
        resp.data.forEach(element => {
            rows.push(createData(element.id,element.PlayerNo,element.PlayerName,element.PlayerPosition));   
        });
        setTeam(rows);
        //rows = [];
        })      
        .catch(error => {
         console.log(error);
        });       
    },[]);  

  const [editID,setEditID]=useState(0);  
  const onEdit=(id)=>{
     setModalTrigger(true);
     setEditID(id);
  }

  const editControl=()=>{
    axios.put('http://localhost:3001/players/'+editID, {
      PlayerNo: editPlayerNo,
      PlayerName: editPlayerName,
      PlayerPosition: editPlayerPosition
    }).then(resp => {
  
        console.log(resp.data);
    }).catch(error => {
       console.log(error);
    });  
    setModalTrigger(false);
  }
  const onDelete=(id)=>{
    let url='http://localhost:3001/players/'+id;
    console.log(url);
    axios.delete(url)
    .then(resp => {
        console.log(resp.data)
    }).catch(error => {
        console.log(error);
    });   
    //console.log(rows);
  }

  return (
    <div className='parent-div'>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player No</TableCell>
            <TableCell align="right">Player Name</TableCell>
            <TableCell align="right">Player Position</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {team.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.PlayerNo}
              </TableCell>
              <TableCell align="right">{row.PlayerName}</TableCell>
              <TableCell align="right">{row.PlayerPosition}</TableCell>
              <TableCell align="right">
                  <Button variant="contained" color="primary" onClick={()=>onEdit(row.id)}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick={()=>onDelete(row.id)}>Delete</Button>
              </TableCell>
              <Modal className="edit-modal" isOpen={modalTrigger}>
               <Card className='card'>
               <CardContent className='card-content'>
                <h2 className='card-heading'>Create New Cricketer</h2>
                <TextField required id="standard-required" 
                  label="Player No"
                  onChange={(e)=>setEditPlayerNo(e.target.value)}/><br/>
                <TextField required id="standard-required" 
                  label="Player Name"
                  onChange={(e)=>setEditPlayerName(e.target.value)}/><br/>
                <TextField required id="standard-required" 
                  label="Player Position"
                  onChange={(e)=>setEditPlayerPosition(e.target.value)}/><br/><br/>
                <Button variant="contained" color="primary" onClick={()=>editControl()}>Submit</Button>
               </CardContent>
               </Card>
            </Modal>       
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
    </div>
  );
}
