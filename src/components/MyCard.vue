<template>
    <div class="card">
        <img :src="image" alt="name" />
        <h3>{{ name }}</h3>
        <h3>{{ archetype }}</h3>
    </div>
</template>
<script>
export default {
    name: 'MyCard',
    props: {
        image: String,
        name: String,
        archetype: String
    }
}
</script>
<style scoped lang="scss">
.card {
    margin: 10px 20px;
    width: calc((100% / 5) - 40px);
    text-align: center;

    img {
        width: 100%;
    }
}
</style>