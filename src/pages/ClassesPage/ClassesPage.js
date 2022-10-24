// @vue/component
import { ref } from 'vue'
import CustomTable from "@/components/UI/CustomTable/CustomTable.vue"

export default {
    name: 'classes-page',

    components: {
        CustomTable
    },

    mixins: [],

    props: {},

    data () {
        return {}
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

        return {
            data, 
            columns,
        }
    },
    computed: {},

    watch: {},

    created () {},

    methods: {}
}
