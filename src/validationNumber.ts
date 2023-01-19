type Options = {
    readonly valueForValidation: number | null | undefined;
    readonly defaultValue?: number;
}

export function validationNumber(inputOptions: Options): number {
    let defaultValue: number = typeof inputOptions.defaultValue === 'number' ? inputOptions.defaultValue : 0;

    if (isNaN(defaultValue)) {
        defaultValue = 0;
    }

    if (typeof inputOptions.valueForValidation !== 'number') {
        return defaultValue;
    }

    if (isNaN(inputOptions.valueForValidation)) {
        return defaultValue;
    }

    if(!inputOptions.valueForValidation) {
        return 0;
    }

    return inputOptions.valueForValidation;
}