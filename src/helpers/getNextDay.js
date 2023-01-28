export function getNextDay() {
    return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1)
}