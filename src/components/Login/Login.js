import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import Input from '../Input/Input';



//create reducer function component outside
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }; 
  }

  return { value: '', isValid: false };
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, passwordIsValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, passwordIsValid: state.value.trim().length > 6 };
  }

  return { value: '', passwordIsValid: false };
}

const Login = () => {
  //when use custome context values to provides to the auth-context.js component
 const authctx = useContext(AuthContext)
 const [formIsValid, setFormIsValid] = useState(false);

 const [emailState, dispatchEmail]= useReducer(emailReducer, {
  value:'',
  isValid: false,
 })

 const [passwordState, dispatchPassword]= useReducer(passwordReducer, {
  value: '',
  passwordIsValid: false,
 })

 useEffect(() => {
  const identifier = setTimeout(() => {
    console.log('Checking form validity!');
    setFormIsValid(
      emailState.value.includes('@') && passwordState.value.trim().length > 6
    );
  }, 500);

  return () => {
    console.log('CLEANUP');
    clearTimeout(identifier);
  };
}, [emailState, passwordState]);
 

  const emailChangeHandler = (event) => {
      dispatchEmail({type: "USER_INPUT", val:event.target.value})

    setFormIsValid(
      event.target.value.includes('@') && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
   dispatchPassword({ type: 'USER_INPUT', val: event.target.value })

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       {/* seprate create Input components for email and password this two Input compoennt call an pass state as an argument in the Input compoents */}
       <Input id='email' label='E-Mail' type='email' isValid={emailState.isValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
       <Input id='password' label='Password' type='password' isValid={passwordState.passwordIsValid} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
