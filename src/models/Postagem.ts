import Tema from './Tema'
import User from './User';

interface Postagem{
    id: number;
    titulo:string;
    texto: string;
    data: string;
    temas?: Tema|null;
    usuario: User | null;
}



export default Postagem;