<template>
  <AppHeader />
  <main>
    <AppContainer />
  </main>
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';

export default {
  components: {
    AppHeader,
    AppContainer,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes').then(response => {
        this.store.cardList = response.data.data;
        this.store.loading = true;
      });
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<style lang="scss">
@use './styles/general.scss'
</style>
