<template>
  <img class="imagem-responsiva" :src="url" :alt="titulo" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ["url", "titulo"],
})
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
}
</style>
