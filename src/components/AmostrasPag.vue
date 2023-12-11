<template>
      <div class="amostra">
            <img class="amostra-1-icon" alt="" src="Amostra 1.png" />
            <img class="amostra-3-icon" alt="" src="Amostra 3.png" />
            <div class="frame">
            <img class="amostra-2-icon" alt="" src="Amostra 2.png" />
            </div>
      </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
      // eslint-disable-next-line vue/multi-word-component-names
      name: "amostra"
})
</script>
          
<style scoped>
.amostra-1-icon {
      position: absolute;
      height: 101.72%;
      width: 32.14%;
      top: 0%;
      right: 68.16%;
      bottom: -1.72%;
      left: -0.3%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
}

.amostra-3-icon {
      position: absolute;
      height: 101.72%;
      width: 32.14%;
      top: 0%;
      right: -0.3%;
      bottom: -1.72%;
      left: 68.16%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
}

.amostra-2-icon {
      position: relative;
      width: 422px;
      height: 465px;
      object-fit: cover;
}

.frame {
      position: absolute;
      width: 31.54%;
      top: calc(50% - 232.5px);
      right: 34.23%;
      left: 34.23%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
}

.amostras {
      position: relative;
      width: 100%;
      height: 465px;
}</style>