type ConvertToNumberOptions =  {
    readonly defaultValue: number;
    readonly valueForConvert: string | number | undefined | null;
}

/**
 * Перевести строку к числу
 * @param inputOptions
 */
export function convertToNumber(inputOptions: ConvertToNumberOptions): number {
    if (typeof inputOptions.valueForConvert === 'number') {
        return inputOptions.valueForConvert;
    }

    if(typeof inputOptions.valueForConvert !== 'string') {
        return inputOptions.defaultValue;
    }

    if (!inputOptions.valueForConvert) {
        return inputOptions.defaultValue;
    }

    const resultNumber: number = Number(inputOptions.valueForConvert);

    if (isNaN(resultNumber)) {
        return inputOptions.defaultValue;
    }

    return resultNumber;
}