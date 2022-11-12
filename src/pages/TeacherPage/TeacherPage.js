import { ref } from "vue";
import {
    CustomButton,
    CustomInput,
} from "@components"

import {createRouter as $router} from "vue-router/dist/vue-router.mjs";

export default {
    name: 'teacher-page',

    components: {
        CustomButton,
        CustomInput,
    },

    props: {},
    setup(props){
        const log = ref(null);
        const pass = ref(null);
        const isVisible = ref(false);
        
        
        return {
            isVisible,
            log,
            pass,
        }
    }
}
