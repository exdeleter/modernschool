import { defineStore } from 'pinia'
import axios from "axios"
import { onMounted, ref} from "vue";

export const useLoginStore = defineStore("user",() => {
    const data = ref(null);
    const params = ref({});
    const token = ref(null);

    onMounted(async () => {
        try {
            const response = await axios.post('http://localhost:5217/api/Auth/register',
                {
                    "userName": "string",
                    "password": "string"
                })
            data.value = response.data;
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    })

    async function Login() {
        try {
            const response = await axios.post('http://localhost:5217/api/Auth/login',
                {
                    "userName": "string",
                    "password": "string"
                })
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
    }
});