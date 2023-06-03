import { createStore } from 'vuex'
import doctor from "@/store/modules/doctor";
import clinic from "@/store/modules/clinic";

const store = createStore({
    modules: {
        doctor,clinic
    }
})

export default store