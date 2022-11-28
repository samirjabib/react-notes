import { Google } from "@mui/icons-material";
import { Link as RouterLink} from 'react-router-dom'; //Renombramos el link de routerdom para no confundirnos con el de material ui
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout";


export const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
        <form>            
            <Grid container>
                <Grid item xs={12} sx={{mt: 2}}>
                    <TextField
                        label='Name'
                        type='email'
                        placeholder='Full Name'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sx={{mt: 2}}>
                    <TextField
                        label='Email'
                        type='email'
                        placeholder='correo@google.com'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sx={{mt:2}}>
                    <TextField
                        label='Password'
                        type='password'
                        placeholder="Contraseña"
                        fullWidth
                    />
                </Grid>
                
                <Grid container spacing={2} sx={{mb: 2, mt: 1}}>

                    <Grid item xs={12} >
                        <Button variant='contained' fullWidth>
                            Login
                        </Button>
                    </Grid>

                    <Grid container diretion='row' justifyContent='end' sx={{mt:1}}>
                        <Typography variant='span'>¿Ya tienes unas cuenta?</Typography>
                        <Link component={RouterLink} sx={{ ml:0.5}} color='inherit' to='/auth/register'>
                            Ingresar
                        </Link>

                    </Grid>

                </Grid>
            </Grid>
        </form>
    </AuthLayout>
    );
};

