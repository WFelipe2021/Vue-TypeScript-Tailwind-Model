<template>
  <nav>
    <ul>
      <li :key="rota" v-for="rota in rotas">
        <router-link :to="rota.path ? rota.path : '/'">
          {{ rota.titulo }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    rotas: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style></style>
