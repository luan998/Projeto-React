import React, { useState, useEffect }from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../../models/Postagem';
import { busca } from '../../../../service/Service';
import './ListaPostagem.css';



function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <>
        {posts.map(post=> (
            <Box m={2} className='borda-postagem'>
                <Card variant="outlined" className='caixa-postagem'>
                    <CardContent >
                        <Typography color="textSecondary" className='fonte-postagem' gutterBottom>
                            Postagens
                        </Typography>
                        <Typography variant="h5" className='fonte-postagem-texto' component="h2">
                            {post.titulo}
                        </Typography>
                        <Typography variant="body2" className='fonte-postagem-texto2' component="p">
                            {post.texto}
                        </Typography>
                        <Typography variant="body2" className='fonte-postagem-texto2 postagem-bold' component="p">
                            {post.tema?.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>

                            <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft botao-postagem1" size='small'  >
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' className='botao-postagem'>
                                        deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        ))}
        </>)
}

export default ListaPostagem;