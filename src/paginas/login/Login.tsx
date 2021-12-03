import { Grid, Box, Typography, TextField, Button } from '@material-ui/core'
import { Link,  useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../service/Service';
import React,{useState, useEffect, ChangeEvent} from 'react';
import './Login.css';
import UserLogin from '../../models/UserLogin';

function Login(){

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    const[userLogin, setUserLogin] = useState<UserLogin>(
        {
            id:0,
            usuario: '',
            senha: '',
            token: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>){
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        useEffect(()=>{
            if(token != ''){
                history.push('/home')
            }
        },[token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        try{
            await login(`/usuarios/logar`, userLogin, setToken)
            
            alert('Usuário logado com sucesso!');
        } catch(error){
            alert('Dados do usuário inconsistentes. Erro ao logar!')
        }
    }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center' className='corfundo'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textologin fontef1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth className='corfundocaixa'/>
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='corfundocaixa'/>
                        <Box marginTop={2} textAlign='center'>
                            
                                <Button type='submit' variant='contained'  className='fontef1 corfundobt'>
                                    Logar
                                </Button>
                            
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