import { Box, Button, Typography } from "@mui/material";




const Dashboard = ({account,setAccount}) => {

    const logout = () => {
        setAccount('');
    }
    return (
        <Box style={{marginTop: '70px'}}>
        <Typography style={{  fontSize: '50px',color: '#FCCDFF',fontFamily: 'Times New Roman',}}>Hey {account}! , you are now successfully logged In.</Typography>
        <Button variant="contained" style={{backgroundColor:'#C683D2', padding: '2% 25%', color: 'white'}} onClick={() => logout()}>Logout</Button>
        </Box>
    )
}

export default Dashboard;