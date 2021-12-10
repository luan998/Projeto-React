import React,{useEffect} from'react';
import { Typography, Box, Grid, Button } from '@material-ui/core'
import { useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import TabPostagem from '../../components/estaticos/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/estaticos/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';



function Home(){

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
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
            history.push("/login")

        }
    }, [token])

    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="letracor fonte-barlow2 titulo2">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="letracor fonte-barlow titulo2">digite aqui seus pensamentos do dia!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>
                        <Link to='/postagens' className='text-decorator-none'>
                        <Button className="letracor fonte-barlow2 botao">Ver Postagens</Button>
                        </Link>
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