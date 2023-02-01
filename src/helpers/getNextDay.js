export function getNextDay() {
    return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1)
}

export function getDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    return month + '.' + day + '.' + year;
}