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
        },
        icon: {
            default: null,
            type: Boolean,
        }
    },
    setup(props, {emit}) {
        const { modelValue } = toRefs(props);
        
        function updateInput(event) {
            emit('update:modelValue', event.target.value)
        }

        return {
            updateInput,
            modelValue,
        }
    }
}
//TODO добавить в компонент текст
