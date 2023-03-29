<template>
    <div class="loader" v-if="store.loading">
        <h1>CARICAMENTO CARTE</h1>
    </div>
</template>
<script>
import { store } from '../store.js';
export default {
    name: 'Loader',
    data() {
        return {
            store
        }
    }
}
</script>
<style scoped lang="scss">
.loader {
    background-color: #d48f38;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>