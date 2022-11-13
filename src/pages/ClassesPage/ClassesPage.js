// @vue/component
import { ref } from 'vue'
import { 
    MyDialogWindow, 
    CustomTable,
    CustomButton,
    CustomTableCellEditor,
} from "@components";
import { useUserStore } from "@store";

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
                name: 'id', 
                label: "Класс (буква)",
            },
            {
                name: 'name',
                label: 'Классный руководитель',
            },
            {
                name: 'username',
                label: 'Количество учеников',
            },
            {
                name: 'email',
                label: 'Староста',
            },
        ]

        const store = useUserStore();

        const data = ref([
            {
                class: "11 A",
                mainTeacher: "Тестовая С. С.",
                count: "29",
                mainStudent: "Тестовый К. С.",
            },
            {
                class: "11 Б",
                mainTeacher: "Боевая Р. У.",
                count: "30",
                mainStudent: "Боев Ю. Р.",
            },
            {
                class: "11 В",
                mainTeacher: "Продов Х. С.",
                count: "27",
                mainStudent: "Продова М. У.",
            },
        ])

        //TODO delete later
        const testValue = ref(null);

        return {
            data, 
            columns,
            testValue,
            store,
        }
    },
}
