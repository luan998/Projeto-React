import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import './Login.css';

function Login(){

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center' className='corfundo'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textologin fontef1'>Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth className='corfundocaixa'/>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='corfundocaixa'/>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained'  className='fontef1 corfundobt'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='fontef1'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='cadastrocor textologin fontef1'>Cadastre-se</Typography>
                        </Link>
                        
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem">

            </Grid>
        </Grid>
    );
}

export default Login;