// @vue/component
import { toRefs } from 'vue'
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
    
    setup(props, { emit }) {
        const { data, columns } = toRefs(props);
        //TODO подумать над тем, как передавать изменение значение в ячейке таблицы
        function updateItem() {
            debugger;
            emit('update:modelValue', event.target.value)
        }
        
        return {
            updateItem,
            columns,
            data,
        }
    }
}
