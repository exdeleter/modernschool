import { defineStore } from 'pinia'
import axios from "axios"
import { onMounted, ref} from "vue";

export const useUserStore = defineStore("user",() => {
    const data = ref(null);

    onMounted(async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            data.value = response.data;
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    })

    return {
        data
    }
});