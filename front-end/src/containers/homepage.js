import Box from '@mui/material/Box';
import Header from '../components/header';




const Home = ()=>{

    const styles = {
        background: 'gray',
        height: '100vh',
        width: '100%',
        margin: 'auto'
    }



    return (
        <Box sx={styles}>
            <Header />

        </Box>
    )

}


export default Home ;