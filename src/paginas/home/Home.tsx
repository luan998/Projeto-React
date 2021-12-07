import React from'react';
import {Typography, Box, Grid, Button} from '@material-ui/core'
import './Home.css';
import TabPostagem from '../../components/estaticos/postagens/tabpostagem/TabPostagem';

/*vh é o tamanho da view port, de quem tá vendo */
//o grid item, tá definindo o tamanho das colunas por tamanho de tela, xs, sm, e etc são os tamanho das colunas
/* Box 2 Conteúdo dentro de cada box, define local do titulo o que a caixa é(flex) etc */
//Na imagem a largura e a altura estão no estilo 100%, para ocupar 100% do espaço disponível
function Home(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"  className="letracor fontef2 titulo2">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="letracor fontef1 titulo2">digite aqui seus pensamentos do dia!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button  className="letracor fontef2 botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://icon-library.com/images/puzzle-piece-icon-png/puzzle-piece-icon-png-4.jpg" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;