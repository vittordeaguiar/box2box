<script setup>
const { informations } = defineProps(['informations']);
</script>

<template>
    <section class="text-black text-base leading-relaxed p-12">
        <p v-if="informations.indicadoPara">
            <b>Indicado para:</b> {{ informations.indicadoPara }}
        </p>
        <p v-if="informations.competicao">
            <b>Competição:</b> {{ informations.competicao }}
        </p>
        <p v-if="informations.time"><b>Clube:</b> {{ informations.time }}</p>
        <p v-if="informations.Material">
            <b>Material:</b> {{ informations.material }}
        </p>
        <p v-if="informations.tipo"><b>Tipo:</b> {{ informations.tipo }}</p>
        <p v-if="informations.cor"><b>Cor:</b> {{ informations.cor }}</p>
    </section>
</template>
