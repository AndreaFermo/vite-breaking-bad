<template>
    <div class="cards-container">
        <MyCard />
    </div>
</template>
<script>
import MyCard from './MyCard.vue';
export default {
    name: 'CardsContainer',
    components: {
        MyCard
    }
}
</script>
<style scoped lang="scss">
.cards-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>