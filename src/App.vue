<template>
  <div class="corpo">
    <meu-menu :rotas="routes" />
    
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Menu from "./components/shared/menu/Menu.vue";
import { routes } from "./router/routes";

export default Vue.extend({
  components: {
    "meu-menu": Menu,
  },

  data() {
    return {
      routes,
    };
  },
});
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.4s;
}
</style>
