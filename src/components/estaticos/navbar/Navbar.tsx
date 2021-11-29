import React from 'react';
import{AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import './Navbar.css'
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
            <AppBar position="static">
                <Toolbar variant="dense" className="cor">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit" >
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit" >
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;