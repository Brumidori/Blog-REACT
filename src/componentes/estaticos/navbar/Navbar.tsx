import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    
    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
       navigate('/login')}

    return (
        <>
            <AppBar position="static" className='bg-menu'>
                <Toolbar className='container' variant="dense">
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit" className='title'>
                            Blog Pessoal Bruna
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="flex-end">
                        <Link to='/home' className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/postagens' className='text-decoration-none'>
                         <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        </Link>
                       <Link to='/temas'>
                       <Box mx={1}  className='text-decoration-none cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                       </Link>
                        <Link to='/formularioTema' className='text-decoration-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        </Link>
                        
                            <Box onClick={goLogout} mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                       
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;

