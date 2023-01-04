import { defineStore } from 'pinia'
import axios from "axios"
import { ref} from "vue";

export const useSubjectStore = defineStore("user",() => {
    const data = ref(null);
    const params = ref({});

    const instance = axios.create({
        baseURL: 'http://localhost:5217/api',
        timeout: 100000,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
    });
    
    async function Get() {
        try {
            const response = await instance.get('/Subject')

            data.value = response.data;
            //TODO temp solution, may be need to do with other way 
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }
    
    return {
        data,
        params,
        Get,
    }
});