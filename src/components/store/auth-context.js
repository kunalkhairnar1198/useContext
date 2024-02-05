import React from 'react'

//this AuthContext is contain a component
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;

//two context prvider and consumer,
//create first context component where is data to pass context child component they will access provider and consumer elements 
// throgh access data to another component