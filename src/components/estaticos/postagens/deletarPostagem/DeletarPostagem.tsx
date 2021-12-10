import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Postagem from '../../../../models/Postagem';
import {  buscaId, deleteId } from '../../../../service/Service'
import './DeletarPostagem.css';
import { NoteAdd } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { TokenState } from '../../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

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
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == '') {
            toast.error("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
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
        toast.success("Postagem deletada com sucesso", {
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