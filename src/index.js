import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AuthContexProvider } from './components/store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <AuthContexProvider>
        <App />
    </AuthContexProvider>
);

//This code is using custome context provider auth-context.js
// AuthContextProvider, to wrap the main App component. This custom provider manages authentication-related state and functions, making them available to the App component and its descendants. It establishes a context for handling authentication throughout the application.
