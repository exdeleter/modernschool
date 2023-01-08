import { defineStore } from 'pinia'
import axios from "axios"
import { ref} from "vue";

export const useTeacherStore = defineStore("user",() => {
    const data = ref(null);
    const params = ref({});

    const instance = axios.create({
        baseURL: 'http://localhost:5217/api',
        timeout: 100000,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
    });

    async function get(id) {
        try {
            const response = await instance.get(`/Teacher/${id.id.value}`)

            data.value = response.data;
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }

    async function post() {
        try {
            const response = await instance.post('/Teacher', {
                "id": 0,
                "name": "string",
                "surname": "string",
                "patronymic": "string",
                "age": 0,
                "subject": {
                    "id": 0,
                    "name": "string"
                }
            })

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
        get,
        post,
    }
});