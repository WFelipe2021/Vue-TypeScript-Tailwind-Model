<script lang="ts">
import Vue from "vue";

import BotaoVue from "@/components/shared/botao/Botao.vue";
import PainelVue from "@/components/shared/painel/Painel.vue";
import ImagemResponsivaVue from "@/components/shared/imagem-responsiva/ImagemResponsiva.vue";
import AxiosAdapter from "@/infra/AxiosAdapter";
import { HomeService } from "@/views/home/HomeService";
import { HomeInterface } from "./HomeInterface";
import { HomeMethod } from "./HomeMethod";

const homeService = new HomeService(
  new AxiosAdapter(),
  "http://localhost:3000/v1/fotos"
);

const homeMethod = new HomeMethod();

export default Vue.extend({
  components: {
    "meu-painel": PainelVue,
    "imagem-responsiva": ImagemResponsivaVue,
    "meu-botao": BotaoVue,
  },

  data(): HomeInterface {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: "",
    };
  },

  computed: {
    fotosComFiltro() {
      return homeService.filterList(this);
    },
  },

  methods: {
    remove(foto) {
      homeMethod.remove(foto);
    },
    add() {
      homeMethod.add();
    },
  },

  async created() {
    this.fotos = await homeService.getItems();
  },
});
</script>

<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="filtre por parte do título"
    />

    <ul class="lista-fotos" v-if="true">
      <li
        class="lista-fotos-item"
        :key="foto.id"
        v-for="foto of fotosComFiltro"
      >
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="padrao"
          />
        </meu-painel>
      </li>
    </ul>
    <div v-if="false">Teste</div>
  </div>
</template>

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>

