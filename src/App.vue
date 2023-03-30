<template>
  <AppHeader />

  <main>
    <AppSelect @changeArchetype="getCards()" />
    <AppContainer />
  </main>
  <Loader />
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';
import Loader from './components/Loader.vue';
import AppSelect from './components/AppSelect.vue';

export default {
  components: {
    AppHeader,
    AppContainer,
    Loader,
    AppSelect
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {
      let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
      if (this.store.selectArchetype.length > 0) {
        urlApi += `?archetype=${this.store.selectArchetype}`
      }
      axios.get(urlApi).then(response => {
        this.store.cardList = response.data.data;
        this.store.loading = false;
      })
    },
    getArchetype() {
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then(response => {
        this.store.cardArchetypes = response.data;
      })
    }

  },
  created() {
    this.getCards();
    this.getArchetype();
  }
}
</script>

<style lang="scss">
@use './styles/general.scss';
</style>
