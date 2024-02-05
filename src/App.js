// import React, { useState, useEffect } from 'react';
import React, { useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  const ctx = useContext(AuthContext)
  //before you can use more functionality pass data as an props to the component this makes a prop drilling
  //but context api avoid props drilling and send function and context obj only specific components like login,navigation,mainheader component
  return (
    <React.Fragment>
        <MainHeader/>
          <main>
            {!ctx.isLoggedIn && <Login />}
            {ctx.isLoggedIn && <Home  />}
          </main>
    </React.Fragment>
    
  );
}

export default App;
