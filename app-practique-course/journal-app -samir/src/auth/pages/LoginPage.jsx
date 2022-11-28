import { Google } from "@mui/icons-material";
import { Link as RouterLink} from 'react-router-dom'; //Renombramos el link de routerdom para no confundirnos con el de material ui
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout";

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <form>            
                <Grid container>
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

                        <Grid item xs={12} sm={6}>
                            <Button variant='contained' fullWidth>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button variant='contained' fullWidth>
                                <Google/>
                                <Typography sx={{ml:1}}>Google</Typography>
                            </Button>
                        </Grid>

                        <Grid container diretion='row' justifyContent='end' sx={{mt:1}}>
                            <Link component={RouterLink} color='inherit' to='/auth/register'>
                                Crear una cuenta
                            </Link>

                        </Grid>

                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};

