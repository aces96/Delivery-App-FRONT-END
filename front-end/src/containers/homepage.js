import Box from '@mui/material/Box';
import Header from '../components/header';
import Navbar from '../components/navbar';
import SearchBar from '../components/searchBar';




const Home = ()=>{

    const styles = {
        height: '100vh',
        width: '100%',
        margin: 'auto'
    }





    return (
        <Box className='homepage' sx={styles}>
            <Navbar/>
            <Header />
            <SearchBar/>

        </Box>
    )

}


export default Home ;