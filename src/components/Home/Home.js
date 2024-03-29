import React, {  useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';

const Home = () => {
  //this useContext hook can hold AuthContext Component object and acccess inside the Home Component 
  //this contextApi can use specific component to send data and component and access the component actions without any 
  let authctx = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;

