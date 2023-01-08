import {toRefs} from "vue";

export default {
    name: "custom-input",
    props:{
        modelValue: [String, Number],
        placeholder: [String, Number],
        type: [String, Number],
    },
    setup(props, {emit}) {
        const { placeholder, modelValue } = toRefs(props);
        
        function updateInput(event) {
            emit('update:modelValue', event.target.value)
        }

        return {
            updateInput,
            placeholder,
            modelValue,
        }
    }
}
//TODO добавить в компонент текст
