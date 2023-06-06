import { createStore } from 'vuex'
import doctor from "@/store/modules/doctor";
import clinic from "@/store/modules/clinic";
import authModule from "@/store/modules/authModule";

const store = createStore({
    modules: {
        doctor,clinic, authModule
    }
})

export default store