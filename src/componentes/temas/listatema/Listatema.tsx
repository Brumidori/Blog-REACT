import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Tema';
import './Listatema.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState} from '../../../store/tokens/tokenReducer'
import CardTema from '../cardTema/cardTema';

function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(()=>{
    if(token == '') {
      alert("Você precisa estar logado")
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