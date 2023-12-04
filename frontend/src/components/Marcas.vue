<template>
      <div class="melhores-marcas">
            <div class="as-melhores-marcas">As Melhores Marcas</div>
            <div class="rectangle-parent">
                  <img class="frame-child" alt="" src="Rectangle 7.png" />
                  <img class="nike-99-2-icon" alt="" src="C:\projeto ppi\box2box\frontend\src\assets\images\nike-99.png" />
                  <img class="puma-logo-png1-1-icon" alt="" src="Puma_logo_PNG1 1.png" />
                  <img class="umbro-logo-png2-1-icon" alt="" src="Umbro_logo_PNG2 1.png" />
            </div>
      </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
      name: "MelhoresMarcas"
})
</script>
          
<style scoped>
.as-melhores-marcas {
      position: relative;
}

.frame-child {
      position: absolute;
      top: -43.29px;
      left: calc(50% - 278.76px);
      width: 296.04px;
      height: 211.29px;
      object-fit: cover;
}

.nike-99-2-icon {
      position: absolute;
      top: 40.67px;
      left: calc(50% - 432px);
      width: 182.96px;
      height: 65.1px;
      object-fit: cover;
}

.puma-logo-png1-1-icon {
      position: absolute;
      top: 14px;
      left: calc(50% + 12.79px);
      width: 205.04px;
      height: 114.51px;
      object-fit: cover;
}

.umbro-logo-png2-1-icon {
      position: absolute;
      top: 0px;
      left: calc(50% + 230.2px);
      width: 201.8px;
      height: 147px;
      object-fit: cover;
}

.rectangle-parent {
      position: relative;
      width: 864px;
      height: 147px;
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
}</style>