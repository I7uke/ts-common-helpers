type Options = {
    readonly defaultValue?: string;
    readonly date: Date | undefined | null;
    readonly format: 'DD.MM.YYYY'
        | 'DD-MM-YYYY'
        | 'DD.MM.YYYY HH:MM'
        | 'DD-MM-YYYY HH:MM'
        | 'DD.MM.YYYY HH:MM:SS'
        | 'DD-MM-YYYY HH:MM:SS';
}

function validationDefaultValue(inputValue: string | undefined | null): string {
    const emptyValue: string = '';

    if(typeof inputValue !== 'string'){
        return emptyValue;
    }

    return inputValue;
}

export function dateFormatForView(inputOptions: Options): string {
    const defaultValue: string = validationDefaultValue(inputOptions.defaultValue);

    if (!inputOptions.date) {
        return defaultValue;
    }

    if(typeof inputOptions.date !== 'object'){
        return defaultValue;
    }

    const timestamp: number = Number(inputOptions.date);

    if (!timestamp) {
        return defaultValue;
    }

    if (isNaN(timestamp)) {
        return defaultValue;
    }

    let day: string = String(inputOptions.date.getDate());
    if (day.length === 1) {
        day = '0' + day;
    }

    let month: string = String(inputOptions.date.getMonth() + 1);
    if (month.length === 1) {
        month = '0' + month;
    }

    const year: string = String(inputOptions.date.getFullYear());

    if (inputOptions.format === 'DD.MM.YYYY') {
        return `${day}.${month}.${year}`;
    }

    if (inputOptions.format === 'DD-MM-YYYY') {
        return `${day}-${month}-${year}`;
    }

    let hours: string = String(inputOptions.date.getHours());
    if (hours.length === 1) {
        hours = '0' + hours;
    }

    let minutes: string = String(inputOptions.date.getMinutes());
    if (minutes.length === 1) {
        minutes = '0' + minutes;
    }

    if (inputOptions.format === 'DD.MM.YYYY HH:MM') {
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    if (inputOptions.format === 'DD-MM-YYYY HH:MM') {
        return `${day}-${month}-${year} ${hours}:${minutes}`;
    }

    let seconds: string = String(inputOptions.date.getSeconds());
    if (seconds.length === 1) {
        seconds = '0' + seconds;
    }

    if (inputOptions.format === 'DD.MM.YYYY HH:MM:SS') {
        return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    }

    if (inputOptions.format === 'DD-MM-YYYY HH:MM:SS') {
        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    }

    return defaultValue;
}
