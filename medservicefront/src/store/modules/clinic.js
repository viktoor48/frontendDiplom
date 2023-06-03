export default {
    mutations: {
        updateClinics(state, clinics) {
            state.clinics = clinics;
        },
        updateCurrentClinic(state, clinic) {
          state.currentClinic = clinic;
        },
    },
    actions: {
        async fetchClinics(ctx) {
            const response = await fetch('http://localhost:8000/api/clinics');
            const result = await response.json();

            const clinics = [...result['hydra:member']];

            ctx.commit('updateClinics', clinics);
        },
        async fetchClinicId(ctx, id) {
          const response = await fetch(`http://localhost:8000/api/clinics/${id}`);
          const result = await response.json();
          // const clinic = [...result['hydra:member']];

          ctx.commit('updateCurrentClinic', result);
        },
    },
    state: {
        clinics: [],
        currentClinic: {},
    },
    getters: {
        allClinics(state) {
            return state.clinics;
        },
        currentClinic(state) {
            return state.currentClinic;
        },
    },
}