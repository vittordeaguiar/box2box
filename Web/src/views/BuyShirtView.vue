<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Service from '../services/productService';
import ProductInformations from '../components/ProductInformations.vue';
import MaisVendidas from '../components/MaisVendidas.vue';

const Route = useRoute();

const product = ref(null);

const fetchProduct = async (id) => {
    try {
        product.value = await Service.findById(id);
    } catch (error) {
        console.error(`Erro ao buscar produto ${id}: `, error.message);
    }
};

watch(
    () => Route.params.id,
    async (newId, oldId) => {
        if (newId !== oldId) {
            fetchProduct(Route.params.id);
        }
    },
);

onMounted(async () => {
    await fetchProduct(Route.params.id);
});
</script>

<template>
    <section v-if="product" class="w-full py-12 flex animate__animated animate__fadeIn ">
        <div class="w-4/12 text-white items-center">
            <div class="bg-gray rounded-r-lg max-h-60 p-6">
                <h1 class="text-3xl leading-relaxed font-semibold">
                    {{ product.description }}
                </h1>
            </div>
            <ProductInformations :informations="product.informations" />
        </div>

        <div class="w-4/12">
            <img :src="product.pathToImage" alt="" class="mx-auto h-96" />
        </div>

        <div class="w-4/12 flex flex-col">
            <div class="bg-orange py-2">
                <p class="text-white text-center">
                    FRETE GRÁTIS para todo o Brasil!
                </p>
            </div>

            <div class="p-16 space-y-6">
                <div>
                    <p class="text-2xl font-semibold">
                        {{ product.newPrice }}
                        <span class="font-normal">no PIX</span>
                    </p>
                    <p>
                        Ou R$ 179,90 em até {{ product.maximoDeVezesJuros }} sem
                        juros
                    </p>
                </div>
                <div class="border-b-2 border-black pb-6 space-y-2">
                    <p class="font-semibold">Tamanho:</p>
                    <div class="flex space-x-6 text-white text-center">
                        <button
                            class="bg-gray hover:bg-white hover:text-black p-2 w-10 h-10 rounded-lg"
                        >
                            P
                        </button>
                        <button
                            class="bg-gray hover:bg-white hover:text-black p-2 w-10 h-10 rounded-lg"
                        >
                            M
                        </button>
                        <button
                            class="bg-gray hover:bg-white hover:text-black p-2 w-10 h-10 rounded-lg"
                        >
                            G
                        </button>
                        <button
                            class="bg-gray hover:bg-white hover:text-black p-2 w-10 h-10 rounded-lg"
                        >
                            GG
                        </button>
                    </div>
                </div>

                <div class="flex flex-col space-y-4">
                    <div class="flex space-x-4">
                        <input
                            type="text"
                            placeholder="Digite seu CEP"
                            class="rounded-xl p-2 outline-none border-2 text-black max-h-10 w-40"
                        />
                        <button class="btn-consultar bg-orange">
                            Consultar
                        </button>
                    </div>
                    <button class="btn-comprar w-40">Comprar</button>
                </div>
            </div>
        </div>
    </section>

    <MaisVendidas class="border-t-2 border-black" />
</template>
