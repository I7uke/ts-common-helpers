type ConvertToNumberOptions = {
    readonly defaultValue?: number;
    readonly valueForConvert: string | number | undefined | null;
}

function validationDefaultValue(inputValue: number | undefined | null): number {
    if (typeof inputValue !== 'number') {
        return 0;
    }

    if (isNaN(inputValue)) {
        return 0;
    }

    return inputValue;
}


/**
 * Перевести строку к числу
 * @param inputOptions
 */
export default  function convertToNumber(inputOptions: ConvertToNumberOptions): number {
    const defaultValue = validationDefaultValue(inputOptions.defaultValue);

    if (typeof inputOptions.valueForConvert === 'number') {
        if (isNaN(inputOptions.valueForConvert)) {
            return defaultValue;
        }

        return inputOptions.valueForConvert;
    }

    if (typeof inputOptions.valueForConvert !== 'string') {
        return defaultValue;
    }

    if (!inputOptions.valueForConvert) {
        return defaultValue;
    }

    const resultNumber: number = Number(inputOptions.valueForConvert);

    if (isNaN(resultNumber)) {
        return defaultValue;
    }

    return resultNumber;
}