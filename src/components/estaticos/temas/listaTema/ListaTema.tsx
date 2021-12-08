import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../../service/Service';
import './ListaTema.css';

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado.")
            history.push('/login')
        }
    }, [token])

    async function getTema(){
        await busca('/tema', setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(()=>{
        getTema()
    }, [temas.length])

    return (
        <>
        {
            temas.map(tema=> (
                <Box m={2} >
                    <Card variant="outlined" className='borda-tema'>
                        <CardContent className='caixa-tema'>
                        <Typography color="textSecondary" className='fonte-tema' gutterBottom>
                            Tema
                        </Typography>
                            <Typography variant="h5" className='fonte-tema-texto'component="h2">
                            {tema.descricao}
                        </Typography>
                    </CardContent>
                        <CardActions className='caixa-tema'>
                        <Box display="flex" justifyContent="center" mb={1.5} >
                            <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                        <Button variant="contained" className="marginLeft botao-tema1" size='small'  >
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' className='botao-tema'>
                                        deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
            ))}
        </>
    )
}

export default ListaTema
