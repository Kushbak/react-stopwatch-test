export const beautifyDate = (date) => {
    let centiseconds = ("0" + (Math.floor(date / 10) % 100)).slice(-2)
    let seconds = ("0" + (Math.floor(date / 1000) % 60)).slice(-2)
    let minutes = ("0" + (Math.floor(date / 60000) % 60)).slice(-2)
    let hours = ("0" + Math.floor(date / 3600000)).slice(-2)

    return `${hours} : ${minutes} : ${seconds} : ${centiseconds}`
}