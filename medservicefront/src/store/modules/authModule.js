import {UserRoles} from "@/constants/constants";
import {AuthAPI, RegistrationApi} from "@/Api";

export default {
    mutations: {
        setUserRole(state, userRole) {
            state.credentials.userRole = userRole;
            localStorage.setItem('userRole', userRole);
        },
        deleteUserRole(state) {
            state.credentials.userRole = null;
            localStorage.removeItem('userRole');
        },
        setToken(state, token) {
            state.credentials.token = token;
            localStorage.setItem('token', token);
        },
        deleteToken(state) {
            state.credentials.token = null;
            localStorage.removeItem('token');
        },
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async onLogin(ctx, {login, password, role}) {
            try {
                const user = await AuthAPI.login(login, password, role);
                console.log(user.id, role);
                ctx.commit('setToken', user.id);
                ctx.commit('setUserRole', role);
            } catch (error) {
                if (error.status >= 400) {
                    return error;
                }
            }
        },
        onLogout(ctx) {
            ctx.commit('deleteToken');
            ctx.commit('deleteUserRole');
        },
        async onRegister(ctx, {form, role}) {
            try {
                const response = await RegistrationApi.register(form, role);
                const id = response.id;
                ctx.commit('setToken', id);
                ctx.commit('setUserRole', role);
            } catch (error) {
                return error;
            }
        }
    },
    state: {
        credentials: {
            token: localStorage.getItem('token') || null,
            userRole: localStorage.getItem('userRole') || UserRoles.Guest,
        }
    },
    getters: {
        getUserRole(state) {
            return state.credentials.userRole;
        },
        getToken(state) {
            return state.credentials.token;
        },
    },
}