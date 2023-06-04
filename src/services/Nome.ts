import api from './api';
import { NomeProps } from '../types';

class Nome {
    async get(nome: string): Promise<NomeProps[]> {
        const { data } = await api.get(`${nome}`);
        return data;
    }
}

const nome = new Nome();
export default nome;