import React, {useEffect} from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokenReducer';

function Home() {

    let history = useNavigate();
    const token = useSelector <TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history("/login")
    
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/postagens' className='text-decoration-none'>
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                        
                    </Box>
                </Grid>
                <Grid item xs={6} className='bg-home' >
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;