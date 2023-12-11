import CamisaGremio from '../assets/images/camisa-gremio.svg';
import CamisaFlamengo from '../assets/images/camisa-fla.svg';
import CamisaFluminense from '../assets/images/camisa-flu.svg';
import CamisaInterMiami from '../assets/images/camisa-inter-miami.svg';

const products = [
    {
        id: 0,
        description:
            'Camisa Grêmio 22/23 - Azul, preta e branca - Umbro Torcedor',
        pathToImage: CamisaGremio,
        oldPrice: 'R$ 249,90',
        newPrice: 'R$ 149,90',
        maximoDeVezesJuros: '6x',
        valorParcelas: 'R$ 24,90',
        informations: {
            indicadoPara: 'Dia a dia',
            competicao: 'Brasileirão',
            time: 'Grêmio FBPA',
            material: 'Poliéster',
            tipo: 'Torcedor',
            Cor: 'Azul/Preto/Branco',
        },
    },
    {
        id: 1,
        description:
            'Camisa Flamengo 22/23 - Vermelha e preta - Adidas Torcedor',
        pathToImage: CamisaFlamengo,
        oldPrice: 'R$ 249,90',
        newPrice: 'R$ 149,90',
        maximoDeVezesJuros: '6x',
        valorParcelas: 'R$ 24,90',
        informations: {
            indicadoPara: 'Dia a dia',
            competicao: 'Brasileirão',
            time: 'Clube de Regatas Flamengo',
            material: 'Poliéster',
            tipo: 'Torcedor',
            Cor: 'Vermelho/Preto',
        },
    },
    {
        id: 2,
        description: 'Camisa Fluminense - Verde e grená - Umbro Torcedor',
        pathToImage: CamisaFluminense,
        oldPrice: 'R$ 249,90',
        newPrice: 'R$ 149,90',
        maximoDeVezesJuros: '6x',
        valorParcelas: 'R$ 24,90',
        informations: {
            indicadoPara: 'Dia a dia',
            competicao: 'Brasileirão',
            time: 'Fluminense Football Club',
            material: 'Poliéster',
            tipo: 'Torcedor',
            Cor: 'Verde/Grená',
        },
    },
    {
        id: 3,
        description: 'Camisa Inter Miami - Rosa - Messi 10 - Adidas Torcedor',
        pathToImage: CamisaInterMiami,
        oldPrice: 'R$ 249,90',
        newPrice: 'R$ 149,90',
        maximoDeVezesJuros: '6x',
        valorParcelas: 'R$ 24,90',
        informations: {
            indicadoPara: 'Dia a dia',
            competicao: 'MLS',
            time: 'Inter Miami',
            material: 'Poliéster',
            tipo: 'Torcedor',
            Cor: 'Rosa',
        },
    },
];

class productService {
    async findById(id) {
        return products.find((x) => x.id === Number(id));
    }
}

export default new productService();
