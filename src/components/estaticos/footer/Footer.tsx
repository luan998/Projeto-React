import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import{Typography, Box, Grid} from '@material-ui/core'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Footer.css';

function Footer(){
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token!=""){
        footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="letracor fontef1">Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon className=" letracor redes" />
                            </a>
                            <a href="https://github.com/luan998" target="_blank">
                                <GitHubIcon className=" letracor redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/luan-rodrigues-88a5b1152/" target="_blank">
                                <LinkedInIcon className=" letracor redes" />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="letracor" >© 2021 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a className='text-decorator-none' target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center" className="letracor">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    }
    return(
        <>
            {footerComponent}
        </>
    )
}

export default Footer;