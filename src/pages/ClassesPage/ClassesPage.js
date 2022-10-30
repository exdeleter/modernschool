// @vue/component
import { ref } from 'vue'
import { 
    MyDialogWindow, 
    CustomTable,
    CustomButton,
    CustomTableCellEditor,
} from "@/components/UI";

export default {
    name: 'classes-page',

    components: {
        CustomTable,
        MyDialogWindow,
        CustomButton,
        CustomTableCellEditor
    },

    setup(props, {emit}) {

        const columns = [
            {
                name: 'productName', 
                label: "product name",
            },
            {
                name: 'color',
                label: 'color',
            },
            {
                name: 'category',
                label: 'category',
            },
            {
                name: 'price',
                label: 'PRICE',
            },
        ]


        const data = ref([
            {
                productName: 'Apple MacBook Pro 17"', 
                color: 'Silver',
                category: 'Laptop',
                price: '$2999'
            },
            {
                productName: 'Apple MacBook Pro 17"', 
                color: 'Silver',
                category: 'Laptop',
                price: '$2999'
            },
            {
                productName: 'Apple MacBook Pro 17"', 
                color: 'Silver',
                category: 'Laptop',
                price: '$2999'
            },
        ])

        //TODO delete later
        const testValue = ref(null);

        return {
            data, 
            columns,
            testValue,
        }
    },
}
