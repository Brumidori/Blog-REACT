import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardProps{
    objetoTema: Tema
}

function CardTema({ objetoTema }: CardProps) {
    return (
        <Box m={2} >
            <Card variant="outlined">
                <CardContent>

                    <Typography color="textSecondary" gutterBottom>
                        Tema
                    </Typography>

                    <Typography variant="h5" component="h2">
                        {objetoTema.descricao}
                    </Typography>

                </CardContent>

                <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5} >

                        <Link to={`/formularioTema/${objetoTema.id_temas}`} className="text-decorator-none">
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                    Atualizar
                                </Button>
                            </Box>
                        </Link>

                        <Link to={`/deletarTema/${objetoTema.id_temas}`} className="text-decorator-none">
                            <Box mx={1}>
                                <Button variant="contained" size='small' color="secondary">
                                    Deletar
                                </Button>
                            </Box>
                        </Link>

                    </Box>
                </CardActions>

            </Card>
        </Box>
    )
}

export default CardTema