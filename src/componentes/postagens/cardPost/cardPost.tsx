import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'



interface CardProps{
    objetoPost: Postagem
}
const novaData = new Intl.DateTimeFormat('pt-BR')

function CardPost({ objetoPost }: CardProps) {
    return (
              <Box m={2} >
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Postagens
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {objetoPost.titulo}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {objetoPost.texto}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {objetoPost.temas?.descricao}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {objetoPost.usuario?.nome}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {novaData.format(new Date(objetoPost.data))}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5}>
    
                      <Link to={`/formularioPostagem/${objetoPost.id}`} className="text-decorator-none" >
                        <Box mx={1}>
                          <Button variant="contained" className="marginLeft" size='small' color="primary" >
                            atualizar
                          </Button>
                        </Box>
                      </Link>
                      <Link to={`/deletarPostagem/${objetoPost.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" size='small' color="secondary">
                            deletar
                          </Button>
                        </Box>
                      </Link>
                    </Box>
                  </CardActions>
                </Card>
              </Box>
            )
    }

    export default CardPost
    