import { createStore } from 'vuex'
import doctor from "@/store/modules/doctor";
import clinic from "@/store/modules/clinic";
import authModule from "@/store/modules/authModule";
import client from "@/store/modules/client";

const store = createStore({
    modules: {
        doctor,clinic, authModule, client,
    }
})

export default store