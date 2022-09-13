import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';


function Navbar() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000, // fecha depois de 2s
            hideProgressBar: false,
            closeOnClick: true, 
            pauseOnHover: false, // pausa o tempo com o mouse
            draggable: false, // não pode mover
            theme: "colored", 
            progress: undefined,
        })
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
                <Link to='/perfil' className='text-decoration-none'>
                    <Box mx={1} className='cursor, botaoNav'>
                        <Typography >
                            Perfil
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

