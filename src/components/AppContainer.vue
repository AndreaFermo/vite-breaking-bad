<template>
    <div class="container">
        <p>Found {{ foundCard }} cards</p>
        <CardsContainer />
    </div>
</template>
<script>
import { store } from '../store.js';
import CardsContainer from './CardsContainer.vue';

export default {
    name: 'AppContainer',
    components: {
        CardsContainer
    },
    data() {
        return {
            store
        }
    },
    computed: {
        foundCard() {
            return this.store.cardList.length
        }
    }




}
</script>
<style scoped lang="scss">
.container {
    background-color: white;
    width: 80%;
    padding: 20px;
    margin: 40px auto 0px;

    p {
        background-color: black;
        color: white;
        line-height: 40px;
        padding: 0px 20px;

    }
}
</style>