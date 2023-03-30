<template>
    <div class="container">
        <p>Found cards</p>
        <CardsContainer />
    </div>
</template>
<script>
import CardsContainer from './CardsContainer.vue';

export default {
    name: 'AppContainer',
    components: {
        CardsContainer
    },


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