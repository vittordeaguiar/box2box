<script setup>
import NikeLogo from '../assets/images/nike-99.png';
import AdidasLogo from '../assets/images/Adidas_logo.png';
import PumaLogo from '../assets/images/Puma_logo_PNG1.png';
import UmbroLogo from '../assets/images/Umbro_logo_PNG2.png';
</script>

<template>
    <div class="container px-12 space-y-6">
        <h1 class="font-bold text-4xl">As Melhores Marcas</h1>
        <div class="w-full flex justify-between">
            <img class="h-20" alt="Adidas logo" :src="AdidasLogo" />
            <img class="h-20" alt="Nike logo" :src="NikeLogo" />
            <img class="h-20" alt="Puma Logo" :src="PumaLogo" />
            <img class="h-20" alt="Umbro Logo" :src="UmbroLogo" />
        </div>
    </div>
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
