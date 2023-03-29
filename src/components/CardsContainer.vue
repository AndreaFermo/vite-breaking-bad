<template>
    <div class="cards-container">
        <MyCard v-for="(card, index) in store.cardList" :key="index" :image="card.card_images[0].image_url"
            :name="card.name" :archetype="card.archetype" />
    </div>
</template>
<script>
import MyCard from './MyCard.vue';
import { store } from '../store.js'
export default {
    name: 'CardsContainer',
    data() {
        return {
            store
        }
    },
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
    justify-content: flex-start;
}
</style>