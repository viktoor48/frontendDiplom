export default {
    mutations: {
        updateCurrentClient(state, client) {
            state.currentClient = client;
        },
    },
    actions: {
        async fetchClient(ctx, id) {
            const response = await fetch(`http://localhost:8000/api/clients/${id}`);
            const result = await response.json();

            ctx.commit('updateCurrentClient', result);
        },
    },
    state: {
        currentClient: {},
    },
    getters: {
        getCurrentClient(state) {
            return state.currentClient;
        },
    },
}