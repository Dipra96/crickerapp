import React from 'react';
import team from '../images/team.jpg';
import Container from '@material-ui/core/Container';
import '../styles/Home.css';

const Home=()=> {
    return (
        <div className='home-mainDiv'>
            <Container className='container' maxWidth="sm">
                <p>
                    <img src={team}/>
                </p>
            </Container>
        </div>
    )
}

export default Home
