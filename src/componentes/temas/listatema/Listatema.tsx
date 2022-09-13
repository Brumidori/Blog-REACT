import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Tema';
import './Listatema.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState} from '../../../store/tokens/tokenReducer'
import CardTema from '../cardTema/cardTema';
import { toast } from 'react-toastify';

function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(()=>{
    if(token == '') {
      toast.error('Você precisa estar logado', {
      position: "top-right",
      autoClose: 2000, // fecha depois de 2s
      hideProgressBar: false,
      closeOnClick: true, 
      pauseOnHover: false, // pausa o tempo com o mouse
      draggable: false, // não pode mover
      theme: "colored", 
      progress: undefined,
      })
      navigate("/login")
    }
}, [token])

  async function getTema(){
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
   {
        temas.map(tema => (
          <CardTema objetoTema={tema} />
        ))}
    </>
  );
}


export default ListaTema;