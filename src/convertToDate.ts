type Options = {
    readonly valueForConvert: string | Date | number | null | undefined;
    readonly defaultValue: Date | null;
    readonly changeTime?: 'startDay' | 'endDay';
}

export function convertToDate(inputOptions: Options): Date | null {
    if (!inputOptions.valueForConvert) {
        return inputOptions.defaultValue;
    }

    let resultDate: Date | null = null;

    if (typeof inputOptions.valueForConvert === 'string') {
        const dateString = inputOptions.valueForConvert.trim();

        if (!dateString) {
            return inputOptions.defaultValue;
        }

        const resultDateConvertFromString = new Date(dateString);

        if (isNaN(+resultDateConvertFromString)) {
            return inputOptions.defaultValue;
        }

        resultDate = resultDateConvertFromString;
    }

    if (typeof inputOptions.valueForConvert === 'number') {
        const dateNumber: number = inputOptions.valueForConvert;


        if (dateNumber <= 0) {
            return inputOptions.defaultValue;
        }

        const resultDateConvertFromNumber = new Date(dateNumber);

        if (isNaN(+resultDateConvertFromNumber)) {
            return inputOptions.defaultValue;
        }

        resultDate = resultDateConvertFromNumber;
    }

    if (typeof inputOptions.valueForConvert === 'object') {
        const dateObject: Date = inputOptions.valueForConvert;

        if (isNaN(+dateObject)) {
            return inputOptions.defaultValue;
        }

        resultDate = dateObject;
    }

    if (!resultDate) {
        return inputOptions.defaultValue;
    }

    if (inputOptions.changeTime) {
        if (inputOptions.changeTime === 'startDay') {
            // Обнуляем время
            resultDate.setHours(0, 0, 0, 0);
        }

        if (inputOptions.changeTime === 'endDay') {
            // Ставим 23:59 текущего дня
            resultDate.setHours(23, 59, 0, 0);
        }
    }

    return resultDate;
}