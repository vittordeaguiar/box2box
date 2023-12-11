<script setup>
import NikeLogo from '../assets/images/nike-99.png';
import AdidasLogo from '../assets/images/Adidas_logo.png';
import PumaLogo from '../assets/images/Puma_logo_PNG1.png';
import UmbroLogo from '../assets/images/Umbro_logo_PNG2.png';
</script>

<template>
    <section class="w-full px-12 py-12 space-y-6" style="background-color: #c9c9c9;">
        <h1 class="text-4xl text-center">Melhores marcas</h1>
        <div class="w-1/2 flex items-center justify-between mx-auto">
            <img class="h-14" alt="Nike logo" :src="NikeLogo" />
            <img class="h-20" alt="Adidas logo" :src="AdidasLogo" />
            <img class="h-20" alt="Puma Logo" :src="PumaLogo" />
            <img class="h-28" alt="Umbro Logo" :src="UmbroLogo" />
        </div>
    </section>
</template>

<style scoped>
.frame-child {
    position: absolute;
    top: -43.29px;
    left: calc(50% - 278.76px);
    width: 296.04px;
    height: 211.29px;
    object-fit: cover;
}

.melhores-marcas {
    position: relative;
    background-color: #d9d9d9;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 21px 283px 21px 293px;
    box-sizing: border-box;
    gap: 22px;
    text-align: left;
    font-size: 36px;
    color: #000;
    font-family: Questrial;
}
</style>
