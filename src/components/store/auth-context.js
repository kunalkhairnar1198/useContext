import React, { useEffect, useState } from 'react'

//this AuthContext is contain a component
// Create a context with initial values (default values)
const AuthContext = React.createContext({
    
    isLoggedIn: false,

   // Default logout and login functions (to be replaced by actual implementations)
    onLogout : ()=>{ },
    onLogin : (email,password)=>{ }

});

//this authcontextprovider build custome authentication component and pass function and context to the specified component
//this AuthContextProvider makes a central state management in the react app using Conntext api

// AuthContextProvider: a custom component for managing authentication state

//this function pass inside the index.js file where is render all react app 
export const AuthContexProvider =(props)=>{
    // State to track whether the user is logged in or not
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    

      // Check if the user is logged in when the component mounts
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);

 // Function to handle user logout
    const logoutHandler =()=>{
         // Remove the user's login information from local storage
         localStorage.removeItem('isLoggedIn');

         // Update the state to reflect that the user is logged out
        setIsLoggedIn(false)
    }

    // Function to handle user login
    const logInHandler =()=>{
        // Save the user's login information to local storage
        localStorage.setItem('isLoggedIn', '1');

        // Update the state to reflect that the user is logged in
        setIsLoggedIn(true)
    }


     // Provide the context values (state and functions) to the components in the subtree
    return (<AuthContext.Provider 
                value={{isLoggedIn:isLoggedIn, 
                    onLogout: logoutHandler,
                    onLogin:logInHandler
                }}>
                    {props.children}
           </AuthContext.Provider>
        )}

        // / Export the context itself for other components to use
export default AuthContext;

//two context prvider and consumer,
//create first context component where is data to pass context child component they will access provider and consumer elements 
// throgh access data to another component