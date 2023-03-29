<template>
  <AppHeader />
  <main>
    <AppContainer />
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';

export default {
  components: {
    AppHeader,
    AppContainer,
  }
}
</script>

<style lang="scss">
@use './styles/general.scss'
</style>
