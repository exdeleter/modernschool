import {toRefs} from "vue";

export default {
    name: "custom-input",
    props:{
        modelValue: {
            default: null,
            type: String
        },
        placeholder: [String, Number],
        type: [String, Number],
        label: {
            default: null,
            type: String,
        }
    },
    setup(props, {emit}) {
        const { placeholder, modelValue, label } = toRefs(props);
        
        function updateInput(event) {
            emit('update:modelValue', event.target.value)
        }

        return {
            updateInput,
            placeholder,
            modelValue,
            label,
        }
    }
}
//TODO добавить в компонент текст
