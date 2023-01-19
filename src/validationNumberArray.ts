type Options = {
    readonly valueForValidation: number[] | null | undefined;
}

export function validationNumberArray(inputOptions: Options): number[] {
    const result: number[] = [];

    if (!inputOptions.valueForValidation) {
        return result;
    }

    if (!Array.isArray(inputOptions.valueForValidation)) {
        return result;
    }

    for (const item of inputOptions.valueForValidation) {
        if (typeof item === 'number') {
            result.push(item);
        }
    }

    return result;
}