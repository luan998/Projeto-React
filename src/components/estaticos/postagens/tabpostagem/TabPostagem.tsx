import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static" className='tab-nav'>
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab className ='tab-typo' label="Todas as postagens" value="1" />
                        <Tab className='tab-typo' label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="tab-typo2">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom className='tab-typo2' align="justify">Olá, seja bem vindo ao meu blog, eu sou o Luan. Este site é minha primeira criação em react em que você pode postar qualquer coisa, desde o que você está pensando até experiências do seu dia a dia. Informações de contato estão no rodapé da página, espero que tenha gostado deste meu primeiro projeto que criei em conjunto com meu aprendizado de Spring Boot e React.</Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabPostagem;