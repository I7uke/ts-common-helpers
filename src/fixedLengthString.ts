type FixedLengthStringOptions =  {
    readonly stringToFixed: string | undefined | null;
    readonly maxLength: number;
    readonly defaultValue?: string;
}

export function fixedLengthString(inputOptions: FixedLengthStringOptions): string {
    const defaultValue = inputOptions.defaultValue ? inputOptions.defaultValue : 'invalid string';

    if (typeof inputOptions.stringToFixed !== 'string') {
        return defaultValue;
    }

    if (!inputOptions.stringToFixed) {
        return defaultValue;
    }

    if (inputOptions.maxLength <= 0) {
        return inputOptions.stringToFixed;
    }

    if (inputOptions.stringToFixed.length >= inputOptions.maxLength) {
        return `${inputOptions.stringToFixed.slice(0, inputOptions.maxLength)}...`;
    }

    return inputOptions.stringToFixed;
}
