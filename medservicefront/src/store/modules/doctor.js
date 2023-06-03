export default {
    mutations: {
        updateDoctors(state, doctors) {
            state.doctors = doctors;
        },
        updateServices(state, services) {
            state.services = services;
        },
        updateTimeSlots(state, slots) {
            state.timeSlots = slots;
        }
    },
    actions: {
        async fetchDoctors(ctx) {
            const response = await fetch('http://localhost:8000/api/doctors');
            const result = await response.json();
            const doctors = [...result['hydra:member']];

            ctx.commit('updateDoctors', doctors);
        },
        async fetchServices(ctx) {
            const response = await fetch('http://localhost:8000/api/services');
            const result = await response.json();
            const services = [...result['hydra:member']];

            ctx.commit('updateServices', services);
        },
        async fetchTimeSlots(ctx) {
            const response = await fetch('http://localhost:8000/api/time_slots');
            const result = await response.json();
            const timeSlots = [...result['hydra:member']];

            ctx.commit('updateTimeSlots', timeSlots);
        },
    },
    state: {
        doctors: [],
        services: [],
        timeSlots: [],
    },
    getters: {
        allDoctors(state) {
          return state.doctors;
        },
        allServices(state) {
          return state.services;
        },
        allTimeSlots(state) {
          return state.timeSlots;
        },
    },
}