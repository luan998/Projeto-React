import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Search from './Search';
import { useDispatch } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import './Navbar.css';
import './Search';

function Navbar() {
    let history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    function logout() {
        dispatch(addToken(''));
        toast.info("Usuário deslogado",{
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
        var navbarComponent;

        if(token!= ""){
            navbarComponent = 
                <AppBar position="sticky" className="navbar">
                    <Toolbar variant="dense" className="cor2">
                        <Box className="cursor" display='flex'>
                            <img src='https://i.imgur.com/8e27Ltp.png' className='img'></img>
                            <Typography variant="h5" className="padding-left10 letracor2 fontef1 ">
                                Blog do Luan
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent="start">
                            <Box mx={1} className="cursor padding-left20">
                                <Link to='/home' className='text-decorator-none'>
                                    <Typography variant="h6" className="letracor2 fontef1">
                                        home
                                    </Typography>
                                </Link>
                            </Box>
                            <Box mx={1} className="cursor">
                                <Link to='/postagens' className='text-decorator-none'>
                                    <Typography variant="h6" className="letracor2 fontef1">
                                        postagens
                                    </Typography>
                                </Link>
                            </Box>
                            <Box mx={1} className="cursor">
                                <Link to='/temas' className='text-decorator-none'>
                                    <Typography variant="h6" className="letracor2 fontef1">
                                        temas
                                    </Typography>
                                </Link>
                            </Box>
                            <Link to='/formularioTema' className='text-decorator-none'>
                                <Box mx={1} className="cursor">
                                    <Typography variant="h6" className="letracor2 fontef1">
                                        cadastrar tema
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/login' className='text-decorator-none'>
                                <Box mx={1} className="cursor" onClick={() => logout()}>
                                    <Typography variant="h6" className="letracor2 fontef1">
                                        logout
                                    </Typography>

                                </Box>
                            </Link>
                        </Box>
                        <Box className="last-item"><Search />
                        </Box>

                    </Toolbar>
                </AppBar>
        
    }
    return (
        
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;