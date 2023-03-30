<template>
    <select @change="$emit('changeArchetype')" name="archetypeSelect" id="archetypeSelect" v-model="store.selectArchetype">
        <option value="">All</option>
        <option v-for="(archetype, index) in store.cardArchetypes" :value="archetype.archetype_name" :key="index">{{
            archetype.archetype_name }}</option>
    </select>
</template>
<script>
import { store } from '../store.js';
export default {
    name: 'AppSelect',
    data() {
        return {
            store,
        }
    },


}
</script>
<style scoped lang="scss">
select {
    margin-left: 11%;
    margin-top: 30px;
    height: 30px;
    border-radius: 5px;
    border: none;

}
</style>