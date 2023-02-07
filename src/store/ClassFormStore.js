import { defineStore } from 'pinia'
import API from "../axios/axios.js"
import { ref} from "vue";

export const useClassFormStore = defineStore("class-form",() => {
    const data = ref({});
    const params = ref({});

    async function get() {
        try {
            const response = await API.get(`/Class/${params.value?.id}`,);

            data.value = response.data;
            //TODO temp solution, may be need to do with other way
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }

    async function post() {
        try {
            let response = null;

            if(!!data.value?.id)
            {
                response = await API.put('/Class',  data.value);
            } else {
                response = await API.post('/Class',  data.value);
            }

            data.value = response.data;
        } catch (e) {
            alert(e)
            console.log(e)
        }
    }

    return {
        data,
        params,
        get,
        post
    }
});