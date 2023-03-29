<template>
    <div class="header-container">
        <img src="http://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es"
            alt="yugioh logo">
        <h1>Yu-Gi-Oh Api</h1>
    </div>
</template>
<script>
export default {
    name: 'AppHeader',
}
</script>
<style scoped lang="scss">
.header-container {
    background-color: white;
    display: flex;
    align-items: center;

    img {
        height: 30px;
        margin: 0px 30px;
    }
}
</style>