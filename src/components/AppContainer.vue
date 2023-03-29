<template>
    <div class="container">
        <p>Found N cards</p>
        <CardsContainer />
    </div>
</template>
<script>
import CardsContainer from './CardsContainer.vue';
export default {
    name: 'AppContainer',
    components: {
        CardsContainer
    }
}
</script>
<style scoped lang="scss">
.container {
    background-color: white;
    width: 1100px;
    padding: 20px;
    margin: auto;

    p {
        background-color: black;
        color: white;
        line-height: 40px;
    }
}
</style>