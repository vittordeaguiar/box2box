<script setup>
import { ref } from 'vue';
import FirstBanner from '../assets/images/banner_1.png';
import SecondBanner from '../assets/images/banner_2.png';

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
            <p class="text-red-500">Anterior</p>
        </button>
        <button class="absolute top-1/2 text-2xl right-0" @click.prevent="switchSlide">
            <p class="text-red-500">Próximo</p>
        </button>
    </div>
</template>

<style scoped>
.slide-image {
    height: 649px;
    transition: transform 0.5s ease-in-out;
}
</style>
