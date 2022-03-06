
import { useState } from 'react';
import { Box, Button, Dialog, DialogContent, TextField, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';


import {authenticateLogin, authenticateSignup } from '../../service/api';

const useStyles=makeStyles({
      component: {
        height: '100%',
        width: '95vh',
        backgroundImage: 'linear-gradient(to left bottom, #8166ac, #7d59a6, #7a4ca0, #783e99, #762e91, #6d2489, #631881, #5a0a79, #46086e, #330663, #1e0458, #05004c)',      },
      headingContainer:{
        margin: '5% auto'

      },
     inputContainer: {
       margin: '2%'
     },
     textArea:{
       margin: '5%',
       display: 'flex'
     },
     btnContainer:{
       margin: '10% 0 auto 5%'
     },
     btn:{
      backgroundColor: '#FCCDFF',
      margin: '2% 0 2% 9%',
      padding: '4% 10%',
      boxShadow: '#05004C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
     
     }
});


const signupInitialValues = {
  fullname: '',
  username: '',
  email: '',
  password: '',
}

const loginInitialValues = {
  username: '',
  password: '',
}

export default function Login({open, setOpen,setAccount}) {
const classes=useStyles();
  const handleClose= () => {
      setOpen(false);
  }
  const [account,toggleAccount] =useState('login');
  const[signup,setSignup] = useState(signupInitialValues);
  const[login,setLogin] = useState(loginInitialValues);

  const toggleUserAccount = () => {
    if(account === 'login') toggleAccount('signup');
    else if(account === 'signup') toggleAccount('login');
  }
  
  const signupUser =async  () => {
   let response = await authenticateSignup(signup);
   if(!response) return;
   handleClose();
   setAccount(signup.username);
  }

  const loginUser = async () => {
     let response = await authenticateLogin(login);
     if(!response) return;
     handleClose();
     setAccount(login.username);
  }
  const onInputChange = (e) => {
    setSignup({...signup, [e.target.name]: e.target.value});
  
 }
 const onValueChange = (e) => {
   setLogin({...login, [e.target.name]: e.target.value});
 }
 
  return(
 <Dialog open={open} onClose={handleClose}>
   <DialogContent className={classes.component}>
   {
         account === 'login' ?
       
      <Box>
        <Box className={classes.headingContainer}><Typography style={{fontSize: '35px',color: 'white'}}>Login</Typography> </Box>
       <Box className={classes.textArea}>
               <Typography  style={{margin:'4% 4% 1% 1%', color: 'white'}}>Enter Username</Typography>
               <TextField  onChange={(e) => onValueChange(e)}  id="standard-basic"  variant="standard" name="username" label="Enter Username"/>
       </Box>
              <Box className={classes.textArea}>
              <Typography style={{margin:'4% 4% 1% 1%',color: 'white'}}>Enter Password</Typography>
              <TextField onChange={(e) => onValueChange(e)}  id="standard-basic"  variant="standard" name='password' label='Enter Password'/>
              </Box>

             <Box className={classes.btnContainer}>

             <Button  style={{backgroundColor:'#C683D2', padding: '2% 25%', color: 'white'}} onClick={() => loginUser()}>Login</Button>

             <Typography style={{marginTop: '4%', color: 'white'}}>Dont have an account, SignUp here</Typography>
             <Button variant="contained" style={{backgroundColor:'#C683D2', padding: '2% 25%', color: 'white'}}  onClick={() => toggleUserAccount()} >Register</Button>
             </Box> 
             </Box>:

             <Box>
               <Box className={classes.headingContainer}>
               <Typography style={{fontSize: '35px',color: 'white'}}>SignUp</Typography>
             </Box>
             <Box className={classes.textArea}>
               <Typography  style={{margin:'4% 4% 1% 1%',color: 'white'}}>Enter Full Name</Typography>
               <TextField onChange={(e) => onInputChange(e)} id="standard-basic"  variant="standard" name="fullname" label="Enter Fullname"/>
            </Box>
              <Box className={classes.textArea}>
              <Typography style={{margin:'4% 4% 1% 1%',color: 'white'}}>Enter Username</Typography>
              <TextField onChange={(e) => onInputChange(e)} id="standard-basic" variant="standard" name='username' label='Enter Username'/>
           </Box>
           <Box className={classes.textArea}>
              <Typography  style={{margin:'4% 4% 1% 1%', color: 'white'}}>Enter Email</Typography>
              <TextField onChange={(e) => onInputChange(e)} id="standard-basic"  variant="standard" name="email" label="Enter Email"/>
          </Box>
            <Box className={classes.textArea}>
             <Typography  style={{margin:'4% 4% 1% 1%', color: 'white'}}>Create Passworde</Typography>
           <TextField  onChange={(e) => onInputChange(e)} id="standard-basic" variant="standard" name="password" label="Create Password"/>
            </Box>

           <Box className={classes.btnContainer}>

           <Button style={{backgroundColor:'#C683D2', padding: '2% 25%', color: 'white'}}   onClick={() => signupUser()} >Sign Up</Button>

           <Typography style={{marginTop: '4%', color:'white'}}>Existing User? Login Below</Typography>
           <Button style={{backgroundColor:'#C683D2', padding: '2% 26%', color: 'white'}}   onClick={() => toggleUserAccount()} >Login</Button>
           </Box>
           
   </Box>

}
   </DialogContent>
 </Dialog>
  )
}
