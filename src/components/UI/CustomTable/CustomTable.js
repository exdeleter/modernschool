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
        //TODO подумать над тем, как передавать изменение значение в ячейке таблицы
        
        return {
            columns,
            data,
        }
    }
}
