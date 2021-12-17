<template>
  <button
    @click="disparaAcao()"
    class="botao"
    :class="estiloDoBotao"
    :type="tipo"
  >
    {{ rotulo }}
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    tipo: {
      required: true,
      type: String,
    },

    rotulo: {
      required: true,
      type: String,
    },

    confirmacao: Boolean,
    estilo: String,
  },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operação?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    },
  },

  computed: {
    estiloDoBotao() {
      if (this.estilo == "padrao" || !this.estilo) return "botao-padrao";
      if (this.estilo == "perigo") return "botao-perigo";
      return "botao-padrao";
    },
  },
});
</script>

<style>
.botao {
  @apply font-bold py-2 px-4 rounded;
}

.botao-perigo {
  @apply bg-red-700 hover:bg-red-400 text-white;
}

.botao-padrao {
  @apply bg-blue-500 hover:bg-blue-400 text-white;
}
</style>
