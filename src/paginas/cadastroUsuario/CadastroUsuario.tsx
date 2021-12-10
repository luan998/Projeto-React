import { Grid, Box, Typography, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../service/Service";
import { Link } from "react-router-dom";
import React,{useState, useEffect, ChangeEvent} from "react";
import { toast } from "react-toastify";
import './CadastroUsuario.css';

function CadastroUsuario(){

    let history= useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        }
    )
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success("Usuário cadastrado com sucesso!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error("Dados inconsistentes. Favor verificar as informações de cadastro!", {
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
    <Grid container direction='row' justifyContent='center' alignItems='center' className='corfundo2'>
            <Grid xs={12} sm={6} className='imagem2'></Grid>
            <Grid xs={12} sm={6} alignItems='center'>
            <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textocadastro fontef2'>Cadastrar</Typography>
                        <TextField value={user.nome } onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth className='corfundocaixa2' />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e) } id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth className='corfundocaixa2'/>
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e) }id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='corfundocaixa2'/>
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e) }id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' fullWidth className='corfundocaixa2'/>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar fontef2 corfundobt3'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className='fontef2 corfundobt2'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
            </Box>
        </Grid>
    </Grid>
    );
}

export default CadastroUsuario;