type FixedLengthStringOptions = {
    /**
     * Целевая строка
     */
    readonly stringToFixed: string | undefined | null;
    /**
     * Максимальная длинна строки
     */
    readonly maxLength: number;
    /**
     * Значение по умолчанию, будет возвращено в случае если целевое значение не строка или пустая строка
     */
    readonly defaultValue?: string;
}

function validationDefaultValue(inputValue: string | undefined | null): string {
    const emptyValue: string = '';

    if (typeof inputValue !== 'string') {
        return emptyValue;
    }

    return inputValue;
}

function validationMaxLength(inputValue: number | string | null): number {
    if (!inputValue) {
        return 0;
    }

    if (typeof inputValue !== 'number') {
        return 0;
    }

    return inputValue;
}

/**
 * Ограничить строку до заданного количества символов
 * @param inputOptions
 */
export default function fixedLengthString(inputOptions: FixedLengthStringOptions): string {
    const defaultValue: string = validationDefaultValue(inputOptions.defaultValue);
    const maxLength: number = validationMaxLength(inputOptions.maxLength);

    if (typeof inputOptions.stringToFixed !== 'string') {
        return defaultValue;
    }

    if (!inputOptions.stringToFixed) {
        return defaultValue;
    }

    if (maxLength <= 0) {
        return inputOptions.stringToFixed;
    }

    if (inputOptions.stringToFixed.length >= maxLength) {
        return `${inputOptions.stringToFixed.slice(0, maxLength)}...`;
    }

    return inputOptions.stringToFixed;
}
