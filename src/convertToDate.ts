type Options = {
    readonly valueForConvert: string | Date | number | null | undefined;
    readonly defaultValue: Date | null;
    readonly changeTime?: 'startDay' | 'endDay';
}

function validationDefaultValue(inputValue: Date | null | undefined): Date | null {
    if (!inputValue) {
        return null;
    }

    if (typeof inputValue !== 'object') {
        return null;
    }

    const defaultValueTimestamp = Number(inputValue);

    if (!defaultValueTimestamp) {
        return null;
    }

    if (isNaN(defaultValueTimestamp)) {
        return null;
    }

    const result = new Date(defaultValueTimestamp);

    if (isNaN(+result)) {
        return null;
    }

    return result;
}


export function convertToDate(inputOptions: Options): Date | null {
    const defaultValue: Date | null = validationDefaultValue(inputOptions.defaultValue);

    if (!inputOptions.valueForConvert) {
        return defaultValue;
    }

    let resultDate: Date | null = null;

    if (typeof inputOptions.valueForConvert === 'string') {
        const dateString = inputOptions.valueForConvert.trim();

        if (!dateString) {
            return defaultValue;
        }

        const resultDateConvertFromString = new Date(dateString);

        if (isNaN(+resultDateConvertFromString)) {
            return defaultValue;
        }

        resultDate = resultDateConvertFromString;
    }

    if (typeof inputOptions.valueForConvert === 'number') {
        const dateNumber: number = inputOptions.valueForConvert;


        if (dateNumber <= 0) {
            return defaultValue;
        }

        const resultDateConvertFromNumber = new Date(dateNumber);

        if (isNaN(+resultDateConvertFromNumber)) {
            return defaultValue;
        }

        resultDate = resultDateConvertFromNumber;
    }

    if (typeof inputOptions.valueForConvert === 'object') {
        if (Array.isArray(inputOptions.valueForConvert)) {
            return defaultValue;
        }

        const dateNumber: number = Number(inputOptions.valueForConvert);

        if (!dateNumber) {
            return defaultValue;
        }

        if (isNaN(+dateNumber)) {
            return defaultValue;
        }

        const dateObject: Date = new Date(dateNumber);

        if (isNaN(+dateObject)) {
            return defaultValue;
        }

        resultDate = dateObject;
    }

    if (!resultDate) {
        return defaultValue;
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