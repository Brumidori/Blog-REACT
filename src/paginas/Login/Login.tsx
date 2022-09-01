import { Box } from '@mui/material'
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import React, {ChangeEvent, useState, useEffect} from 'react';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';


import './Login.css'

function Login() {
  let history = useNavigate();
  const [token, setToken] = useLocalStorage('token');

  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      token: ''
    }
  )

  function updatedModel(e: ChangeEvent<HTMLInputElement>){
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(token != '') {
      history('/home')
    }
  }, [token]
  )
  
  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      await login('/usuarios/logar', userLogin, setToken)

      alert('Usuário logado com sucesso!')
    }catch (error){
      alert('Dados do usuário inconsistentes. Erro ao logar! ');
    }
    
  }

  return (
    <Grid container className="bg-login">
      <Grid item xs={12} sm={12}>

        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">

          <Box className="card">
            <Typography className='card-title' variant="h4" align="center">
              Login
            </Typography>

            <form onSubmit={onSubmit}>
              <Box marginY={4}>
                <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input' id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
              </Box>

              <Box marginY={4}>
                <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input'  id='senha' label='Senha' variant='outlined' name='senha' margin='normal' fullWidth type='password' />
              </Box>
                
                  <Button className="form-btn" variant="contained" type='submit'>
                    Logar
                  </Button>
                
              
            </form>
            <Box display='flex' justifyContent='center' marginTop={2} style={{color: '#BF685E', fontFamily: 'montserrat'}}>
              <Box marginRight={1}>
                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
              </Box>
              <Link to='/cadastroUsuario' className='text-decoration-link'>
                <Typography variant='subtitle1' gutterBottom align='center' style=
                {{fontWeight: 'bold', cursor: "pointer"}}>Cadastre-se</Typography>
              </Link>
              
            </Box>

          </Box>
        </Box>

      </Grid>
    </Grid>
  )
}

export default Login