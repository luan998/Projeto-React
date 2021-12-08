import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../../models/Postagem';
import {  buscaId, deleteId } from '../../../../service/Service'
import './DeletarPostagem.css';
import { NoteAdd } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/core/styles'

function DeletarPostagem() {

    const useStyles = makeStyles(() =>
        createStyles({
            caixa: {
                backgroundColor: '#EDF5E1'
        }

        })
    );
    
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == '') {
            alert('Você precisa estar logado')
            history.push('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        history.push('/postagens')
        deleteId(`/postagens/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Postagem deletado com sucesso');
    }

    function nao() {
        history.push('/postagens')
    }

    const classes = useStyles();
    return (
        <>
            <Box m={2}>
                <Card variant="outlined" className={classes.caixa} >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography className='fonte-postagem-delete' gutterBottom>
                                Deseja deletar a Postagem:
                            </Typography>
                            <Typography className='fonte-postagem-texto-delete'>
                                {post?.titulo}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft botao-postagem-delete1" size='large'>
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size='large' className='botao-postagem-delete'>
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarPostagem;