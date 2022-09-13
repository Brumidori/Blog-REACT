import React, { useState, useEffect } from 'react'
import Postagem from '../../../models/Postagem';
import { busca, post } from '../../../services/Service'
import './Listapostagem.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokenReducer';
import CardPost from '../cardPost/cardPost';
import { toast } from 'react-toastify';


function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

 

  return (
    <>
     { posts.map(post => (
          <CardPost objetoPost={post} />
        ))}
    </>
  )
}

export default ListaPostagem;