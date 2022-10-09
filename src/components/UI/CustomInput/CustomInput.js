export default {
    name: "custom-input",
    props:{
        modelValue: [String, Number]
    },
    methods : {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
//TODO добавить в компонент текст
