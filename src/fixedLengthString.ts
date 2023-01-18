type FixedLengthStringOptions = {
    readonly stringToFixed: string | undefined | null;
    readonly maxLength: number;
    readonly defaultValue?: string;
}

function validationDefaultValue(inputValue: string | undefined | null): string {
    const emptyValue: string = 'invalid string';

    if (!inputValue) {
        return emptyValue;
    }

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


export function fixedLengthString(inputOptions: FixedLengthStringOptions): string {
    const defaultValue:string = validationDefaultValue(inputOptions.defaultValue);
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
