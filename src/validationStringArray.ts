type Options = {
    readonly valueForValidation: string[] | null | undefined;
    readonly defaultValue: string[];
}

export function validationStringArray(inputOptions: Options): string[] {
    if (!inputOptions.valueForValidation) {
        return inputOptions.defaultValue;
    }

    if (!Array.isArray(inputOptions.valueForValidation)) {
        return inputOptions.defaultValue;
    }

    const result: string[] = [];

    for (const item of inputOptions.valueForValidation) {
        if (typeof item === 'string') {
            result.push(item);
        }
    }

    return result;
}