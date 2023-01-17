type Options = {
    readonly valueForValidation: string | null | undefined;
    readonly defaultValue: string;
}

export function validationString(inputOptions: Options): string {
    if (typeof inputOptions.valueForValidation !== 'string') {
        return inputOptions.defaultValue;
    }

    const resultString = inputOptions.valueForValidation.trim();

    if (!resultString) {
        return inputOptions.defaultValue;
    }

    return resultString;
}