import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/actions';


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert("Usuário deslogado")
        navigate('/login')
    }

    var navbarComponent;

    if(token != "") {
        navbarComponent =  <AppBar position="static" className='bg-menu'>
        <Toolbar className='container' variant="dense">
            <Box className='cursor' >
                <Typography variant="h5" className='title'>
                    Blog Pessoal Bruna
                </Typography>
            </Box>

            <Box className='botoes' >
                <Link to='/home' className='text-decoration-none'>
                    <Box mx={1} className='cursor, botaoNav'>
                        <Typography >
                            Home
                        </Typography>
                    </Box>
                </Link>
                <Link to='/postagens' className='text-decoration-none'>
                    <Box mx={1} className='cursor, botaoNav'>
                        <Typography >
                            Postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to='/temas' className='text-decoration-none'>
                    <Box mx={1} className='cursor, botaoNav'>
                        <Typography  >
                            Temas
                        </Typography>
                    </Box>
                </Link>
                <Link to='/formularioTema' className='text-decoration-none'>
                    <Box mx={1} className='cursor, botaoNav'>
                        <Typography >
                            Novo Tema
                        </Typography>
                    </Box>
                </Link>
                <Link to='/formularioPostagem' className='text-decoration-none'>
                    <Box mx={1} className='cursor, botaoNav'>
                        <Typography >
                            Nova Postagem
                        </Typography>
                    </Box>
                </Link>

                <Box onClick={goLogout} mx={1} className='cursor, botaoNav'>
                    <Typography  >
                        Logout
                    </Typography>
                </Box>


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

