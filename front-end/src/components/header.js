import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Carousel from './imageCarousel';
import scooterImg from '../images/scooter.jpg'




const Header = ()=>{

    const styles = {
            height: '60%',
            width: '100vw',
            background: 'white',

    }

    return (
        <Box sx={styles}>
            <Grid container spacing={1 } sx={{height: '100%'}} justify="center" alignItems="center" direction="row">
                <Grid item xs={4}>
                        <h1 style={{fontSize: '50px' , margin: '0%'}}>Fastest</h1>
                        <h1 style={{fontSize: '50px', color: '#F55353',margin: '0%'}}>delivery</h1>
                        <h1 style={{fontSize: '50px',margin: '0%', color: '#6BCB77'}}>&</h1>
                        <h1 style={{fontSize: '50px',margin: '0%'}}>Tastiest</h1>
                        <h1 style={{fontSize: '50px', color: '#F55353',margin: '0%'}}>Food</h1>
                </Grid>
                <Grid item xs={4} sx={{height: '60%'}}>
                        <Carousel />
                </Grid>
                <Grid item xs={4} sx={{height: '60%'}}>
                    <img style={{height: '100%', width: '80%'}} src={scooterImg}/>
                </Grid>
            </Grid>

        </Box>
    )
}


export default Header ;