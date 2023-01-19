type Options = {
    readonly valueForValidation: string[] | null | undefined;
}

export function validationStringArray(inputOptions: Options): string[] {

    const result: string[] = [];

    if (!inputOptions.valueForValidation) {
        return result;
    }

    if (!Array.isArray(inputOptions.valueForValidation)) {
        return result;
    }

    for (const item of inputOptions.valueForValidation) {
        if (typeof item === 'string') {
            result.push(item);
        }
    }

    return result;
}