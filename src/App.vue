<script setup>
import NavBar from './components/NavBar.vue';
// import Home from './views/HomeView.vue';
import FooterComponent from './components/FooterComponent.vue';
import NewsletterForm from './components/NewsletterForm.vue';
</script>

<template>
    <section class="div-body">
        <nav>
            <NavBar />
        </nav>
        <div class="content-wrap flex-grow h-full">
            <router-view />
            <NewsletterForm />
        </div>
        <footer>
            <FooterComponent />
        </footer>
    </section>
</template>

<style scoped>
.div-body {
    position: relative;
    background-repeat: repeat-y;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    overflow-x: hidden;
}

.div-body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: repeat-y;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    z-index: -1;
}
</style>
