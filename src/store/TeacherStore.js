import { defineStore } from 'pinia'
import axios from "axios"
import { ref} from "vue";

export const useTeacherStore = defineStore("teacher",() => {
    const data = ref({});
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
            if (data.value?.id != 0) {
                put();
                return
            }

            const response = await instance.post(
                '/Teacher',
                {
                    ...data.value,
                    "id": 0,
                    "age": 0,
                    "subject": {
                        "id": 0,
                        "name": "string",
                        "term": {
                            "id": 0,
                            "name": "string",
                            "startDate": "2023-01-13T12:06:27.955Z",
                            "endDate": "2023-01-13T12:06:27.955Z",
                            "currentYear": 0
                        }
                    }
                })

            data.value = response.data;
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }


    async function put() {
        try {
            const response = await instance.put(
                '/Teacher',
                {
                    ...data.value,
                    "subject": {
                        "id": 0,
                        "name": "string",
                        "term": {
                            "id": 0,
                            "name": "string",
                            "startDate": "2023-01-13T12:06:27.955Z",
                            "endDate": "2023-01-13T12:06:27.955Z",
                            "currentYear": 0
                        }
                    }
                })

            data.value = response.data;
        } catch (error) {
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