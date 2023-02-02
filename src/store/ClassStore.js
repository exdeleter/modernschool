import { defineStore } from 'pinia'
import API from "../axios/axios.js"
import { ref} from "vue";

export const useClassStore = defineStore("class",() => {
    const data = ref(null);
    const params = ref({});
    
    async function Get() {
        try {
            const response = await API.get('/Class');

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