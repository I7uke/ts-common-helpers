type Options = {
    readonly valueForValidation: string | null | undefined;
    readonly defaultValue?: string;
}

export function validationString(inputOptions: Options): string {
    const defaultValue: string = typeof inputOptions.defaultValue === 'string' ? inputOptions.defaultValue : '';

    if (typeof inputOptions.valueForValidation !== 'string') {
        return defaultValue;
    }

    const resultString = inputOptions.valueForValidation.trim();

    if (!resultString) {
        return defaultValue;
    }

    return resultString;
}