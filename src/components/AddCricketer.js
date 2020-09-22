import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import '../styles/AddCricketer.css';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
//import CardActions from '@material-ui/core/CardActions';

const AddCricketer=()=> {
    /*const [playerNo,setPlayerNo]=useState('');
    const [playerName,setPlayerName]=useState('');
    const [playerPosition,setPlayerPosition]=useState('');*/
    
    const playerSubmit=()=>{
    const axios = require('axios');

    axios.post('http://localhost:3001/players', {
        id:Math.random(),
        PlayerNo:document.getElementById("player-no-id").value,
        PlayerName: document.getElementById("player-name-id").value,
        PlayerPosition: document.getElementById("player-position-id").value
        }).then(resp => {
            alert('Details of '+document.getElementById("player-name-id").value+ ' has been added');
            document.getElementById("player-no-id").value="";
            document.getElementById("player-name-id").value="";
            document.getElementById("player-position-id").value="";
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });   
    }

    return (
        <div className='addcricketer-mainDiv'>
        <Card className='card'>
            <CardContent className='card-content'>
                <h2 className='card-heading'>Create New Cricketer</h2>
                <TextField required id="standard-required" id="player-no-id" label="Player No"/><br/>
                <TextField required id="standard-required" id="player-name-id" label="Player Name"/><br/>
                <TextField required id="standard-required" id="player-position-id" label="Player Position"/><br/><br/>
                <Button variant="contained" color="primary" className='card-submitButton' onClick={playerSubmit}>Submit</Button>
            </CardContent>
        </Card>
        </div>
            
    )
}

export default AddCricketer
