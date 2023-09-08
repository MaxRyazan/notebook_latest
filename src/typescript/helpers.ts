export function normalizeTime(dateTime: number){
    const propDate = new Date(dateTime)
    const day = propDate.getDate()
    const month = ternalForDate((propDate.getMonth() + 1))
    const year = propDate.getFullYear()
    const hour = ternalForDate(propDate.getHours())
    const min = ternalForDate(propDate.getMinutes())
    return day + '-' + month + '-' + year + " " + hour + ':' + min
}

export function ternalForDate(param: any) {
    return param < 10 ? '0' + param : param
}