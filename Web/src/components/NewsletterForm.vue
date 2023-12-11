<script setup>
import { ref } from 'vue';
import ToastService from '../services/toastifyService';
import { validateEmail } from '../utils/utils';

const email = ref('');

const assinarNewsletter = async () => {
    const res = await validateEmail(email.value);

    if (res.valid) {
        ToastService.success('Newsletter assinada com sucesso!');
        email.value = '';
        return;
    }

    if (res.blank) {
        ToastService.error('O e-mail é obrigatório!', 'E-mail em branco');
        return;
    }

    ToastService.error('O e-mail inserido não é válido!', 'E-mail inválido');
};
</script>

<template>
    <section
        class="w-full bg-black text-white px-32 py-12 text-center space-y-4"
    >
        <h2 class="text-xl">Newsletter</h2>
        <h1 class="text-2xl">Quer receber todas as novas promoções?</h1>
        <h3 class="text-base font-bold">Cadastre-se e comece a recebê-las</h3>
        <input
            v-model="email"
            type="email"
            placeholder="Digite seu e-mail"
            class="rounded-xl p-2 outline-none text-black max-h-10 w-1/3"
        />
        <button
            class="btn-comprar mx-auto"
            @click.prevent="assinarNewsletter()"
        >
            Assinar Newsletter
        </button>
    </section>
</template>
