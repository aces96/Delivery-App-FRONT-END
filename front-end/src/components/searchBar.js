import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import svgImg from '../images/Curve.Line.svg'



const SearchBar = ()=>{

    const styles = {
        width: '70%',
        height: '22%',
        background: `url(${svgImg})`,
        border: '1px solid white',
        borderRadius: '25px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',



    }


    return (
        <Box boxShadow={12} sx={styles}>
                <h1 style={{margin: "0%"}}>search</h1>
                <TextField label="Outlined secondary" color="primary" focused sx={{width: '50%', margin: 'auto', marginBottom: '10px', padding: '0%'}}/>
                <Button sx={{width: '50%'}} color='primary' variant="contained" sx={{width: '40%', margin: 'auto' }}>Search</Button>


        </Box>
    )
}



export default SearchBar;