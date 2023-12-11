<script setup>
import LogoB2B from '../assets/images/icons/b2b-logo.svg';
</script>

<template>
    <div class="w-full text-center py-2 text-white bg-orange">
        <p>BLACK FRIDAY - Todo site com até 60% de desconto, APROVEITE!!!</p>
    </div>

    <main
        class="w-full text-white bg-black px-32 py-8 align-middle items-center flex justify-between"
    >
        <img
            :src="LogoB2B"
            alt="Logo B2B"
            class="cursor-pointer"
            @click="() => $router.push('/home')"
        />
        <input
            type="text"
            placeholder="Buscar"
            class="rounded-xl p-2 outline-none text-black max-h-10 w-1/3"
        />
        <div class="flex space-x-10 text-lg">
            <p class="cursor-pointer hover:text-gray-500">Criar conta</p>
            <p class="cursor-pointer hover:text-gray-500">Carrinho</p>
            <p class="cursor-pointer hover:text-gray-500">Contato</p>
        </div>
    </main>

    <div
        style="background-color: #444444"
        class="px-40 text-white text-base py-2 flex justify-between"
    >
        <p
            class="cursor-pointer hover:text-gray-500"
            @click="$router.push('/home')"
        >
            Início
        </p>
        <p class="cursor-pointer hover:text-gray-500">Brasileirão</p>
        <p class="cursor-pointer hover:text-gray-500">Internacionais</p>
        <p class="cursor-pointer hover:text-gray-500">Retrôs</p>
        <p class="cursor-pointer hover:text-gray-500">Versão jogador</p>
        <p class="cursor-pointer hover:text-gray-500">Envios e Prazos</p>
    </div>
</template>
