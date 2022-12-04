import { defineStore } from 'pinia'
import axios from "axios"
import { onMounted, ref} from "vue";

export const useLoginStore = defineStore("user",() => {
    const data = ref(null);
    const params = ref({});
    const token = ref(null);

    async function Login() {
        try {
            const response = await axios.post(
                'http://localhost:5217/api/Auth/login',
                params.value
            )
            //TODO подумать над тем, как токен сохранить глобально
            data.value = response.data;
            localStorage.setItem('token', response.data)
            //TODO temp solution, may be need to do with other way 
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }

    async function Register() {
        try {
            const response = await axios.post('http://localhost:5217/api/Auth/register',
                params.value
            )
            //TODO подумать над тем, как токен сохранить глобально
            data.value = response.data;
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }

    return {
        data,
        params,
        Login,
        Register,
    }
});