// @vue/component
import {ref, toRefs } from 'vue'
export default {
    name: 'custom-table',

    components: {},
    props: {
        data: {
            default: null,
            required: true,
        },
        columns: {
            default: null,
            required: true,
        }
    },
    
    setup(props) {
        const { data, columns } = toRefs(props);
        
        
        return {
            columns,
            data,
        }
    }
}
