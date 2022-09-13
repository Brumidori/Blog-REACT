import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';

function DeletarTema() {
    let history = useNavigate();
    const { id_temas } = useParams<{id_temas: string}>();
    const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>()

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
            history("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id_temas !== undefined){
            findById(id_temas)
        }
    }, [id_temas])

    async function findById(id_temas: string) {
        buscaId(`/temas/${id_temas}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            history('/temas')
            deleteId(`/temas/${id_temas}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Tema deletado com sucesso', {
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
        
          function nao() {
            history('/temas')
          }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button  onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;