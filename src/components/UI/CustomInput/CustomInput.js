export default {
    name: "custom-input",
    props:{
        modelValue: [String, Number]
    },
    setup(props, {emit}) {
        function updateInput(event) {
            emit('update:modelValue', event.target.value)
        }

        return {
            updateInput,
        }
    }
}
//TODO добавить в компонент текст
