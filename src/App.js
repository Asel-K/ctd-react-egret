import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TodoContainer from './TodoContainer';
import style from './App.module.css';
import HomeIcon from '@material-ui/icons//Home';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/MenuBookRounded';
import MenuBookRounded from '@material-ui/icons/MenuBookRounded';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
// import { ClassNames } from '@emotion/react';
import { Typography } from '@material-ui/core';
import { typography } from '@mui/system';

function App() {
  return (
    <BrowserRouter>
    <div className={style.navBar}>
  
      <nav>
        <ul className={style.navBarList}>
          <li className={style.row}>
            <Link to="/"><HomeIcon className={style.icon} color="white" /> &nbsp;
            <Typography className={style.text}>Home</Typography></Link>
          </li>

          <li className={style.row}>
            <Link to="/list-1"><WorkOutlineIcon className = {style.icon} />&nbsp;
            <Typography className={style.text}>Work</Typography></Link>
          </li>
          <li className={style.row}>
            <Link to="/list-2"><PersonIcon className={style.icon} />&nbsp;
            <Typography className={style.text}>Personal</Typography></Link>
          </li>
          <li className={style.row}>
            <Link to="/list-3"><MenuBookRounded className={style.icon} />&nbsp;
            <Typography className={style.text}>Study</Typography></Link>
          </li> 
      </ul>
      </nav>
      </div>
    
      <Switch>
        <Route path="/list-1">
          <TodoContainer tableName="Work"/>
        </Route>

        <Route path="/list-2">
          <TodoContainer tableName="Personal"/>
        </Route>

        <Route path="/list-3">
          <TodoContainer tableName="Study"/>
        </Route>

        <Route path="/">
          <p className={style.homePageDisplay}>Select a list ...</p>
        </Route>
      </Switch>
      </BrowserRouter>
  )

  }
export default App;
