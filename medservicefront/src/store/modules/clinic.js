export default {
    mutations: {
        updateClinics(state, clinics) {
            state.clinics = clinics;
        },
        updateCurrentClinic(state, clinic) {
          state.currentClinic = clinic;
        },
        updateReviewsClinics(state, reviews) {
            state.reviewsClinics = reviews;
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

          ctx.commit('updateCurrentClinic', result);
        },
        async fetchReviewsClinics(ctx) {
            const response = await fetch(`http://localhost:8000/api/review_clinics`);
            const result = await response.json();
            const reviews = [...result['hydra:member']];

            ctx.commit('updateReviewsClinics', reviews);
        },
    },
    state: {
        clinics: [],
        currentClinic: {},
        reviewsClinics: [],
    },
    getters: {
        allClinics(state) {
            return state.clinics;
        },
        currentClinic(state) {
            return state.currentClinic;
        },
        getReviewsClinics(state) {
            return state.reviewsClinics;
        },
    },
}