<template>
  <AppHeader />
  <main>
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

export default {
  components: {
    AppHeader,
    AppContainer,
    Loader,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php').then(response => {
        this.store.cardList = response.data.data;
        this.store.loading = false;
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
