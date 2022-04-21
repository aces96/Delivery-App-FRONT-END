import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import img from '../images/img1.jpg'
import MultiActionAreaCard from './mealCard'



const MealsSection = ()=>{

    const styles = {
        background: "#F7F7F7",
        width: '60%',
        minHeight:'30%',
        border: '1px solid white',
        margin: 'auto',
        marginTop: '10px',
        borderRadius: '25px',
        padding: '1rem'
    }


    return (
        <Box boxShadow={12} sx={styles} >
            <Grid container spacing={2}  sx={{marginBottom: '1rem'}}>
                <Grid sx={{height: '380px'}} item xs={4}>
                    <Box sx={{width: '80%', height: '100%', border: '1px solid black', margin: 'auto' }}>
                            <MultiActionAreaCard />
                    </Box>
                </Grid>
                <Grid sx={{height: '380px'}} item xs={4}>
                    <Box sx={{width: '80%', height: '100%', border: '1px solid black', margin: 'auto' }}>
                            <MultiActionAreaCard />
                    </Box>
                </Grid>
                <Grid sx={{height: '380px'}} item xs={4}>
                    <Box sx={{width: '80%', height: '100%', border: '1px solid black', margin: 'auto' }}>
                            <MultiActionAreaCard />
                    </Box>
                </Grid>


            </Grid>
            <Grid container spacing={2}  >
                <Grid sx={{height: '380px'}} item xs={4}>
                    <Box sx={{width: '80%', height: '100%', border: '1px solid black', margin: 'auto' }}>
                            <MultiActionAreaCard />
                    </Box>
                </Grid>
                <Grid sx={{height: '380px'}} item xs={4}>
                    <Box sx={{width: '80%', height: '100%', border: '1px solid black', margin: 'auto' }}>
                            <MultiActionAreaCard />
                    </Box>
                </Grid>
                <Grid sx={{height: '380px'}} item xs={4}>
                    <Box sx={{width: '80%', height: '100%', border: '1px solid black', margin: 'auto' }}>
                            <MultiActionAreaCard />
                    </Box>
                </Grid>


            </Grid>

        </Box>
    )
}


export default MealsSection;