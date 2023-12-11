<script setup>
import CasalFlu from '../assets/images/casal-flu.svg';
import CamisasVasco from '../assets/images/camisas-vasco.svg';
import CamisaLuanEdicaoEspecial from '../assets/images/camisa-luan-edicao-especial.svg';
import CartaoDeCredito from '../assets/images/cartao-de-credito.png';
</script>

<template>
    <section class="w-full px-36 py-12 space-y-8">
        <h1 class="font-semibold text-3xl">Lançamentos</h1>
        <div class="flex justify-between">
            <div class="flex flex-col space-y-6">
                <img
                    :src="CasalFlu"
                    alt="Foto de casal com camisa do Fluminense"
                />
                <button class="btn-comprar w-1/2 mx-auto">Comprar</button>
            </div>
            <div class="flex flex-col space-y-6">
                <img :src="CamisasVasco" alt="Foto das camisas do Vasco" />
                <button class="btn-comprar w-1/2 mx-auto">Comprar</button>
            </div>
            <div class="flex flex-col space-y-6">
                <img
                    :src="CamisaLuanEdicaoEspecial"
                    alt="Foto da camisa do Luan edição especial"
                />
                <button class="btn-comprar w-1/2 mx-auto">Comprar</button>
            </div>
        </div>
    </section>
    <div class="bg-black w-full py-2 flex">
        <div class="flex flex-row space-x-4 mx-auto">
            <p class="text-center text-white">
                Parcele em até 6x sem juros no cartão de crédito
            </p>
            <img :src="CartaoDeCredito" alt="Cartão de crédito" class="h-6" />
        </div>
    </div>
</template>

<style scoped>
img {
    max-width: 400px;
    max-height: 400px;
}
</style>
