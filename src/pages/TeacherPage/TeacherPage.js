import { ref } from "vue";
import CustomButton from "@/components/UI/CustomButton/CustomButton.vue"
import CustomInput from "@/components/UI/CustomInput/CustomInput.vue"
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
