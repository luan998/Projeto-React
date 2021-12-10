import { Grid, Box, Typography, TextField, Button } from '@material-ui/core'
import { Link,  useHistory } from 'react-router-dom';
import { login } from '../../service/Service';
import React,{useState, useEffect, ChangeEvent} from 'react';
import { toast } from 'react-toastify';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { useDispatch} from 'react-redux';
import { addToken } from "../../store/tokens/actions";

function Login(){

    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] =useState ('');

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
                dispatch(addToken(token));
                history.push('/home')
            }
        },[token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        try{
            await login(`/usuarios/logar`, userLogin, setToken)
            
            toast.success("Usuário logado com sucesso!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch(error){
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center' className='corfundo'>
            <Grid alignItems='center' xs={12} sm={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textologin fontef1-login'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth className='corfundocaixa'/>
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='corfundocaixa'/>
                        <Box marginTop={2} textAlign='center'>
                            
                                <Button type='submit' variant='contained'  className='fontef1-login corfundobt'>
                                    Logar
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='fontef1-login'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='cadastrocor textologin fontef3-login text-decorator-none'>Cadastre-se</Typography>
                        </Link>
                        
                    </Box>
                </Box>
            </Grid>
            <Grid xs={12} sm={6} className="imagem">

            </Grid>
        </Grid>
    );
}

export default Login;