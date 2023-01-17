type Options = {
    readonly valueForValidation: number[] | null | undefined;
    readonly defaultValue: number[];
}

export function validationNumberArray(inputOptions: Options): number[] {
    if (!inputOptions.valueForValidation) {
        return inputOptions.defaultValue;
    }

    if (!Array.isArray(inputOptions.valueForValidation)) {
        return inputOptions.defaultValue;
    }

    const result: number[] = [];

    for (const item of inputOptions.valueForValidation) {
        if (typeof item === 'number') {
            result.push(item);
        }
    }

    return result;
}