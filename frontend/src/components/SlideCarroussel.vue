<template>
    <div class="slide-carousel">
    <img v-for="slide in slides" :key="slide.id" :src="slide.imageUrl" alt="" class="slide-image" />
    <div class="carousel-controls">
      <button @click="prevSlide">Anterior</button>
      <button @click="nextSlide">Próximo</button>
    </div>
  </div>
</template>


<script lang="ts">
   import { defineComponent, ref } from 'vue'
  //eslint-disable-next-line
 


export default defineComponent({
  name: 'SlideCarousel',
  setup() {
    const slides = ref([
      { id: 1, imageUrl: '/banner1.png' },
      { id: 2, imageUrl: '/banner2.png' },
      // { id: 3, imageUrl: '/image3.jpg' },
    ])
    const currentSlideIndex = ref(0)

    const prevSlide = () => {
      if (currentSlideIndex.value === 0) return
      currentSlideIndex.value--
    }

    const nextSlide = () => {
      if (currentSlideIndex.value === slides.value.length - 1) return
      currentSlideIndex.value++
    }

    return {
      slides,
      currentSlideIndex,
      prevSlide,
      nextSlide,
    }
  },
})

          
</script>
          
<style scoped>
.slide-carousel {
  position: relative;
  display: flex;
  width: 100%;
}

.slide-image {
  width: 100%;
  height: 649px;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}

</style>