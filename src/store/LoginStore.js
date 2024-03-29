﻿import { defineStore } from 'pinia'
import axios from "axios"
import { ref} from "vue";
import {useRouter} from "vue-router/dist/vue-router";

export const useLoginStore = defineStore("user",() => {
    const data = ref(null);
    const params = ref({});

    const router = useRouter()

    async function Login() {
        try {
            const response = await axios.post(
                'http://localhost:5217/api/Auth/Login',
                params.value
            )

            data.value = response.data;
            localStorage.setItem('token', response.data)

            router.push('./hub-page')
            //TODO temp solution, may be need to do with other way 
        }
        catch (error) {
            alert(error)
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