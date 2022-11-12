import {toRefs} from "vue";

export default {
    name: "custom-input",
    props:{
        modelValue: [String, Number],
        placeholder: [String, Number]
    },
    setup(props, {emit}) {
        const { placeholder } = toRefs(props);
        
        function updateInput(event) {
            emit('update:modelValue', event.target.value)
        }

        return {
            updateInput,
            placeholder,
        }
    }
}
//TODO добавить в компонент текст
