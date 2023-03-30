import { reactive } from 'vue';

export const store = reactive(
    {
        cardList: [],
        cardArchetypes: [],
        loading: true,
        selectArchetype: '',

    }
);