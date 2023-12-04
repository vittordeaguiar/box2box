<template>
    <div class="componentelogin">
        <div class="componentelogin-child" />
        <div class="login">
            <div class="login-child" />
            <div class="esqueceu-a-senha">Esqueceu a senha?</div>
            <div class="login1">Login </div>
            <div class="login-item" />
            <div class="componente-de-busca-1">
                <div class="componente-de-busca-1-child" />
                <div class="digite-seu-e-mail">Digite seu E-mail</div>
            </div>
            <div class="comprar-2">
                <div class="comprar-2-child" />
                <div class="entrar">ENTRAR</div>
            </div>
            <div class="digite-sua-senha">Digite sua senha </div>
            <div class="rectangle-parent">
                <div class="comprar-2-child" />

                <button class="criar-uma-conta" @click="onCRIARUMACONTAClick">CRIAR UMA CONTA</button>
                
                </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.componentelogin-child {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: #d9d9d9;
}

.login-child {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 31px;
    background-color: #c5c5c5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
}

.esqueceu-a-senha {
    position: absolute;
    top: 51.48%;
    left: 72.57%;
    font-size: 13px;
    font-weight: 100;
}

.login1 {
    position: absolute;
    top: 10.93%;
    left: 40.27%;
    font-size: 36px;
    font-family: Questrial;
}

.login-item {
    position: absolute;
    height: 9.79%;
    width: 95.58%;
    top: 41.69%;
    right: 1.55%;
    bottom: 48.52%;
    left: 2.88%;
    border-radius: 10px;
    background-color: #d9d9d9;
}

.componente-de-busca-1-child {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 10px;
    background-color: #d9d9d9;
}

.digite-seu-e-mail {
    position: absolute;
    height: 48.84%;
    width: 40.97%;
    top: 25.58%;
    left: 3.47%;
    font-weight: 100;
    display: inline-block;
}

.componente-de-busca-1 {
    position: absolute;
    height: 9.79%;
    width: 95.58%;
    top: 26.88%;
    right: 1.99%;
    bottom: 63.33%;
    left: 2.43%;
}

.comprar-2-child {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 10px;
    background-color: #3e3e3e;
}

.entrar {
    position: absolute;
    height: 57.5%;
    width: 18.29%;
    top: 20%;
    left: 40.74%;
    font-weight: 300;
    display: inline-block;
}

.comprar-2 {
    position: absolute;
    height: 9.11%;
    width: 95.58%;
    top: 61.5%;
    right: 1.99%;
    bottom: 29.38%;
    left: 2.43%;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4);
    font-size: 20px;
    color: #fff;
}

.digite-sua-senha {
    position: absolute;
    height: 4.78%;
    width: 39.16%;
    top: 44.19%;
    left: 6.42%;
    font-weight: 100;
    display: inline-block;
}

.criar-uma-conta {
    position: absolute;
    color: #fff;
    height: 57.5%;
    width: 42.59%;
    top: 20%;
    left: 28.7%;
    font-weight: 300;
    display: inline-block;
    cursor: pointer;
}

.rectangle-parent {
    position: absolute;
    height: 9.11%;
    width: 95.58%;
    top: 74.72%;
    right: 1.99%;
    bottom: 16.17%;
    left: 2.43%;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4);
    font-size: 20px;
    color: #fff;
}

.login {
    position: absolute;
    height: 64.65%;
    width: 31.39%;
    top: 5.74%;
    right: 34.31%;
    bottom: 29.6%;
    left: 34.31%;
}

.componentelogin {
    position: relative;
    width: 100%;
    height: 679px;
    text-align: left;
    font-size: 22px;
    color: #000;
    font-family: Inter;
}
</style>