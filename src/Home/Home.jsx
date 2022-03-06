
import {makeStyles} from '@mui/styles';
import {Box,Button, Typography} from '@mui/material';
import { useState,useContext  } from 'react';
import Login from '../components/Login/Login';
import { LoginContext } from '../context/ContextProvider';
import Dashboard from '../components/Dashboard';
const useStyle = makeStyles({
    root:{
        margin: '10% 40% 16% 5%',
        padding: '5% 5%',
    },
    heading: {
        fontSize: '50px',
        color: '#FCCDFF',
        fontFamily: 'Times New Roman',
        
    },
    loginbtn:{
        backgroundColor: '#FCCDFF',
        margin: '2% 0 2% 9%',
        padding: '3% 10%',
        boxShadow: '#05004C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#05004C',
          }
    }
});
function Home(){
  
    const classes = useStyle();
  
   const [open,setOpen] = useState(false);
   const {account,setAccount}= useContext(LoginContext);

   const openLoginDialog = () => {
       setOpen(true);
   }
 
    return(
         <Box className={classes.root}>
            {
                account ? <Dashboard account={account} setAccount={setAccount}/> :
                <Box> <Typography style={{  fontSize: '50px',color: '#FCCDFF',fontFamily: 'Times New Roman',}}>Welcome, to Home Page</Typography>
                 <Box>
                 <Button onClick={() => openLoginDialog()} className={classes.loginbtn} style={{ backgroundColor: '#FCCDFF',
                   margin: '2% 0 2% 9%',padding: '3% 10%', boxShadow: '#05004C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px','&:hover': { cursor: 'pointer',backgroundColor: '#05004C',}}}>Login/SignUp</Button>
                 </Box>
                 </Box>

            }
           
          
          
           <Login open={open} setOpen={setOpen} setAccount={setAccount}/>  
         </Box>
    );
}

export default Home;