<template>
      <div class="navbar">
            <iframe class="navbar-child" />
            <div class="navbar-item" />
            <div class="navbar-inner">
                  <input id="input" v-model="searchText" type="search" placeholder="Buscar..." />
            </div>
            <div class="cadastre-se" @click="onCADASTRESETextClick">CADASTRE-SE</div>
            <div class="incio">Início</div>
            <div class="brasileiro" @click="onBrasileiroTextClick">Brasileirão</div>
            <div class="internacionais">Internacionais</div>
            <div class="retrs">Retrôs</div>
            <div class="verso-jogador">Versão Jogador </div>
            <div class="envios-e-prazos">Envios e Prazos</div>
            <div class="contato">Contato </div>
            <div class="iniciar-sesso" @click="onINICIARSESSOTextClick">INICIAR SESSÃO</div>
            <div class="carrinho" @click="onCARRINHOTextClick">CARRINHO</div>
            <header class="rectangle-header" id="NavBar" />
            <div class="black-friday-">BLACK FRIDAY - Todo site com até 60% de desconto, APROVEITE!!!</div>
            <button class="b2b-2-1" :disabled=true id="b2b" preload="auto" />
      </div>
</template>
<script setup>

</script>
<style scoped>
.navbar-child {
      border: none;
      position: absolute;
      height: 59.24%;
      width: 100%;
      top: 14.22%;
      right: 0%;
      bottom: 26.54%;
      left: 0%;
      background-color: #101010;
}

.navbar-item {
      position: absolute;
      height: 26.54%;
      width: 100%;
      top: 73.46%;
      right: 0%;
      bottom: 0%;
      left: 0%;
      background-color: #3e3e3e;
}

.navbar-inner {
      width: 44.72%;
      border: none;
      background-color: #fff;
      position: absolute;
      height: 20.38%;
      top: 35.55%;
      right: 33.4%;
      bottom: 44.08%;
      left: 21.88%;
}

#input {
      
      width: 100%;
      height: 100%;
      border: transparent;
      padding: 10px;
      outline: none;

}

.cadastre-se {
      position: absolute;
      height: 9.48%;
      width: 7.15%;
      top: 40.76%;
      left: 68.96%;
      font-size: 15px;
      font-weight: 200;
      display: inline-block;
      cursor: pointer;
}

.incio {
      position: absolute;
      height: 12.8%;
      width: 3.75%;
      top: 80.57%;
      left: 13.26%;
      font-weight: 300;
      display: inline-block;
}

.brasileiro {
      position: absolute;
      height: 12.8%;
      width: 7.43%;
      top: 80.57%;
      left: 21.39%;
      font-weight: 300;
      display: inline-block;
      cursor: pointer;
}

.internacionais {
      position: absolute;
      height: 12.8%;
      width: 10%;
      top: 80.57%;
      left: 32.29%;
      font-weight: 300;
      display: inline-block;
}

.retrs {
      position: absolute;
      height: 12.8%;
      width: 4.65%;
      top: 80.57%;
      left: 45.49%;
      font-weight: 300;
      display: inline-block;
}

.verso-jogador {
      position: absolute;
      height: 12.8%;
      width: 11.32%;
      top: 80.57%;
      left: 53.33%;
      font-weight: 300;
      display: inline-block;
}

.envios-e-prazos {
      position: absolute;
      height: 12.8%;
      width: 11.25%;
      top: 80.57%;
      left: 67.15%;
      font-weight: 300;
      display: inline-block;
}

.contato {
      position: absolute;
      height: 12.8%;
      width: 5.83%;
      top: 80.57%;
      left: 80.9%;
      font-weight: 300;
      display: inline-block;
}

.iniciar-sesso {
      position: absolute;
      height: 9.48%;
      width: 8.06%;
      top: 40.76%;
      left: 78.68%;
      font-size: 15px;
      font-weight: 200;
      display: inline-block;
      cursor: pointer;
}

.carrinho {
      position: absolute;
      height: 9.48%;
      width: 5.35%;
      top: 40.76%;
      left: 89.38%;
      font-size: 15px;
      font-weight: 200;
      display: inline-block;
      cursor: pointer;
}

.rectangle-header {
      position: absolute;
      height: 14.22%;
      width: 100%;
      top: 0%;
      right: 0%;
      bottom: 85.78%;
      left: 0%;
      background-color: #ff5f2d;
}

.black-friday- {
      position: absolute;
      height: 9.48%;
      width: 39.93%;
      top: 2.37%;
      left: 30.07%;
      font-size: 18px;
      font-family: Questrial;
      display: inline-block;
}

.b2b-2-1 {
      border: none;
      padding: 0;
      background-color: transparent;
      position: absolute;
      height: 24.64%;
      width: 15.42%;
      top: 35.07%;
      right: 81.81%;
      bottom: 40.28%;
      left: 2.78%;
      border-radius: 94px;
      background-image: url('b2b (2) 1.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
}

.navbar {
      position: relative;
      width: 100%;
      height: 211px;
      text-align: left;
      font-size: 22px;
      color: #fff;
      font-family: Inter;
}
</style>