// @vue/component
import {
    CustomInput,
    CustomButton
} from "@components"
import { useLoginStore } from "@store";
import { computed, ref} from "vue";

export default {
    name: 'login-page',

    components: {
        CustomInput,
        CustomButton
    },
    setup() {
        const log = ref(null);
        const pass = ref(null);
        const repeatPass = ref(null)

        const isRegisterVisible = ref(false);

        const store = useLoginStore()

        const isValid = computed(() => pass.value !== repeatPass.value)

        function Login(){
            store.params = {
                userName: log.value,
                password: pass.value,
            }
            store.Login();
        }

        function Register() {
            isRegisterVisible.value = true;
        }

        function onRegister() {
            if (isValid.value) {
                return;
            }

            store.params = {
                userName: log.value,
                password: pass.value
            }
            
            store.Register();
            
            isRegisterVisible.value = false;
        }

        return {
            Login,
            store,
            log,
            pass,
            isRegisterVisible,
            Register,
            repeatPass,
            onRegister,
            isValid,
        }
    }
}
