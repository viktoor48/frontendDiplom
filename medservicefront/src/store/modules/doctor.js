import {patchMethod} from "@/assets/apiMethods";

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
        },
        updateCurrentDoctor(state, doctor) {
            state.currentDoctor = doctor;
        },
        updateCurrentSlot(state, slot) {
            state.currentTimeSlot = slot;
        },
        updateReviewsDoctors(state, reviews) {
            state.reviewsDoctors = reviews;
        },
    },
    actions: {
        async fetchDoctors(ctx) {
            const response = await fetch('http://localhost:8000/api/doctors');
            const result = await response.json();
            const doctors = [...result['hydra:member']];

            ctx.commit('updateDoctors', doctors);
        },
        async fetchDoctor(ctx, id) {
            const response = await fetch(`http://localhost:8000/api/doctors/${id}`);
            const result = await response.json();

            ctx.commit('updateCurrentDoctor', result);
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
        async fetchTimeSlot(ctx, id) {
            const response = await fetch(`http://localhost:8000/api/time_slots/${id}`);
            const result = await response.json();

            ctx.commit('updateCurrentSlot', result);
        },
        async patchTimeSlot(ctx, {id, data}) {
            const url = `http://localhost:8000/api/time_slots/${id}`;

            try {
                const response = await patchMethod(url, data);

                if (!response.ok) {
                    throw new Error('Error occurred');
                }

                const responseData = await response.json();
                console.log(responseData);
                return true;
            }
            catch (error) {
                console.error(error);
                return false;
            }
        },
        async fetchReviewsDoctors(ctx) {
            const response = await fetch(`http://localhost:8000/api/review_doctors`);
            const result = await response.json();
            const reviews = [...result['hydra:member']];

            ctx.commit('updateReviewsDoctors', reviews);
        },
    },
    state: {
        doctors: [],
        services: [],
        timeSlots: [],
        currentDoctor: {},
        currentTimeSlot: {},
        reviewsDoctors: [],
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
        getCurrentDoctor(state) {
            return state.currentDoctor;
        },
        getCurrentSlot(state) {
            return state.currentTimeSlot;
        },
        getReviewsDoctors(state) {
            return state.reviewsDoctors;
        },
    },
}