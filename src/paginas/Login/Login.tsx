import { Box } from '@mui/material'
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import React, {ChangeEvent, useState, useEffect} from 'react';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addToken, addId } from "../../store/tokens/actions";
import { toast } from 'react-toastify';

import './Login.css'

function Login() {
  let history = useNavigate();
  const dispatch = useDispatch();

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

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
})

  function updatedModel(e: ChangeEvent<HTMLInputElement>){
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(respUserLogin.token !== ""){

        // Verifica os dados pelo console (Opcional)
        console.log("Token: " + respUserLogin.token)
        console.log("ID: " + respUserLogin.id)

        // Guarda as informações dentro do Redux (Store)
        dispatch(addToken(respUserLogin.token)) 
        dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
        history('/home')
    }
}, [respUserLogin.token])

  useEffect(() => {
    if(respUserLogin.token !== ""){

        // Verifica os dados pelo console (Opcional)
        console.log("Token: " + respUserLogin.token)
        console.log("ID: " + respUserLogin.id)

        // Guarda as informações dentro do Redux (Store)
        dispatch(addToken(respUserLogin.token)) 
        dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
        history('/home')
    }
}, [respUserLogin.token])
  
  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      
      await login(`/usuarios/logar`, userLogin, setRespUserLogin)
      toast.success('Usuário logado com sucesso', {
        position: "top-right",
        autoClose: 2000, // fecha depois de 2s
        hideProgressBar: false,
        closeOnClick: true, 
        pauseOnHover: false, // pausa o tempo com o mouse
        draggable: false, // não pode mover
        theme: "colored", 
        progress: undefined,
        })

  } catch (error) {
    toast.error('Dados incosistentes. Erro ao logar.', {
      position: "top-right",
      autoClose: 2000, // fecha depois de 2s
      hideProgressBar: false,
      closeOnClick: true, 
      pauseOnHover: false, // pausa o tempo com o mouse
      draggable: false, // não pode mover
      theme: "colored", 
      progress: undefined,
      })
  }
}

  return (
    <Grid container className="bg-login">
      <Grid item xs={12} sm={12}>
        

        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
          <Box className="card-login">
          
            <Typography className='card-title-login' >
              Login
            </Typography>

            <form onSubmit={onSubmit}>
              <Box marginY={4}>
              <TextField className='input-login' value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail' name='usuario'/>
              </Box>
              <Box marginY={4}>
              <TextField className='input-login' value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha'  name='senha'  type='password' />
              </Box>
                
                  <Button className="form-btn-login" variant="contained" type='submit'>
                    Logar
                  </Button>
                
              
            </form>
            <Box display='flex' justifyContent='center' marginTop={1} style={{color: '#BF685E', fontFamily: 'montserrat'}}>
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