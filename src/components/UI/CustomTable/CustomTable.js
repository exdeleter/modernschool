// @vue/component
export default {
    name: 'custom-table',

    components: {},
    props: {},
    
    setup(props) {
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
                name: 'PRICE',
                label: 'PRICE',
            },
        ]
        
        return {
            columns,
        }
    }
}
