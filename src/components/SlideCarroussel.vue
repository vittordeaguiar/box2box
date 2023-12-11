<script setup>
import { ref } from 'vue';
import FirstBanner from '../assets/images/banner_1.png';
import SecondBanner from '../assets/images/banner_2.png';
import Arrow from '../assets/images/icons/arrow.svg';

const currentSlide = ref(0);
const imageUrl = ref(FirstBanner);

const switchSlide = () => {
    if (currentSlide.value === 0) {
        currentSlide.value = 1;
        imageUrl.value = SecondBanner;
        return;
    }
    currentSlide.value = 0;
    imageUrl.value = FirstBanner;
};
</script>

<template>
    <div class="relative flex w-full">
        <img
            :src="imageUrl"
            alt="Banner"
            class="slide-image cover w-full animate__animated animate__fadeIn"
        />
        <button class="absolute top-1/2 text-2xl" @click.prevent="switchSlide">
            <img :src="Arrow" alt="Anterior" class="transform rotate-180 p-4" />
        </button>
        <button
            class="absolute top-1/2 text-2xl right-0"
            @click.prevent="switchSlide"
        >
            <img :src="Arrow" alt="Próximo" class="p-4" />
        </button>
    </div>
    <div class="w-full text-center py-2 text-white bg-orange">
        FRETE GRÁTIS para todo o Brasil!
    </div>
</template>

<style scoped>
.slide-image {
    height: 649px;
    transition: transform 0.5s ease-in-out;
}
</style>
