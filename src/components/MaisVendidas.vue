<script setup>
import { ref } from 'vue';
import CamisaGremio from '../assets/images/camisa-gremio.svg';
import CamisaFlamengo from '../assets/images/camisa-fla.svg';
import CamisaFluminense from '../assets/images/camisa-flu.svg';
import CamisaInterMiami from '../assets/images/camisa-inter-miami.svg';

const shirts = ref([
    {
        id: 0,
        description:
            'Camisa Grêmio 22/23 - Azul, preta e branca - Umbro Torcedor',
        pathToImage: CamisaGremio,
        oldPrice: 'R$ 249,90',
        newPrice: 'R$ 149,90',
        maximoDeVezesJuros: '6x',
        valorParcelas: 'R$ 24,90',
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
    },
    {
        id: 2,
        description: 'Camisa Fluminense - Verde e grená - Umbro Torcedor',
        pathToImage: CamisaFluminense,
        oldPrice: 'R$ 249,90',
        newPrice: 'R$ 149,90',
        maximoDeVezesJuros: '6x',
        valorParcelas: 'R$ 24,90',
    },
    {
        id: 3,
        description: 'Camisa Inter Miami - Rosa - Messi 10 - Adidas Torcedor',
        pathToImage: CamisaInterMiami,
        oldPrice: 'R$ 249,90',
        newPrice: 'R$ 149,90',
        maximoDeVezesJuros: '6x',
        valorParcelas: 'R$ 24,90',
    },
]);
</script>

<template>
    <section class="w-full px-32 py-12">
        <h1 class="font-semibold text-3xl">Mais vendidas</h1>
        <div class="flex justify-between text-center text-base leading-relaxed">
            <div
                v-for="item in shirts"
                :key="item.id"
                class="w-1/4 space-y-2 cursor-pointer"
                @click.prevent="() => $router.push(`/comprar/${item.id}`)"
            >
                <img
                    :src="item.pathToImage"
                    :alt="item.description"
                    class="mx-auto"
                />
                <p>
                    {{ item.description }}
                </p>
                <div class="flex justify-center space-x-8">
                    <p class="text-sm line-through">{{ item.oldPrice }}</p>
                    <p class="font-semibold text-base">{{ item.newPrice }}</p>
                </div>
                <div>
                    <p>
                        Em até <b>{{ item.maximoDeVezesJuros }}</b> de
                        <b>{{ item.valorParcelas }}</b> sem juros
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
