type Options = {
    readonly valueForValidation: number | null | undefined;
    readonly defaultValue: number;
}

export function validationNumber(inputOptions: Options): number{
    if(typeof inputOptions.valueForValidation !== 'number'){
        return inputOptions.defaultValue;
    }

    if(isNaN(inputOptions.valueForValidation)){
        return inputOptions.defaultValue;
    }

    return inputOptions.valueForValidation;
}