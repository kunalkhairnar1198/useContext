import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../store/auth-context';

const Navigation = () => {
  //remove the consumer and use useContext hook it makes redable and understandable code provide
  const ctx = useContext(AuthContext);

  return (
   <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
