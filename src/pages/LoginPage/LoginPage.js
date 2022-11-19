// @vue/component
import {
    CustomInput,
    CustomButton
} from "@components"
import { useLoginStore } from "@store";
import { ref } from "vue";

export default {
    name: 'login-page',

    components: {
        CustomInput,
        CustomButton
    },
    setup() {
        const log = ref(null);
        const pass = ref(null);

        const store = useLoginStore()

        function Login(){
            store.params = {
                userName: log,
                password: pass,
            }
            store.Login();
        }

        return {
            Login,
            store,
            log,
            pass,
        }
    }
}
