import React from 'react';
import{AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Search'
import Search from './Search';
/*
import { default as createMuiTheme } from '@material-ui/core/styles/createTheme'
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    typography: {
        fontFamily: "Helvetica"
    }
})*/


function Navbar() {
    return (
        <>
            <AppBar position="sticky" className="navbar">
                <Toolbar variant="dense" className="cor2">
                    <Box className="cursor" >
                        <Typography variant="h5" className="letracor2 fontef1">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" className="letracor2 fontef1">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" className="letracor2 fontef1">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" className="letracor2 fontef1">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" className="letracor2 fontef1">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" className="letracor2 fontef1" >
                                    logout
                                </Typography>
                            
                            </Box>
                        </Link>
                    </Box>
                    <Box className="last-item"><Search />
                    </Box>
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;