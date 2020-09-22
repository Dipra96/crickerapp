import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {Link} from 'react-router-dom';
import '../styles/Navigation.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className='nav-tabs' aria-label="simple tabs example">
          <Link className='tab-link' to='/home'><Tab label="Home"/></Link>
          <Link className='tab-link' to='/cricketerlist'><Tab label="Cricketers List"/></Link>
          <Link className='tab-link' to='/addcricketer'><Tab label="Add Cricketer"/></Link>
          <Link className='tab-link' to='/shedule'><Tab label="Schedule"/></Link>
        </Tabs>
      </AppBar>

    </div>
  );
}
