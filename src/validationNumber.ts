type Options = {
    /**
     * Число для проверки
     */
    readonly valueForValidation: number | null | undefined;
    /**
     * Значение по умолчанию, будет возвращено, в случае если число для проверки не являлось числом
     */
    readonly defaultValue?: number;
}

function validationDefaultValue(inputValue: number | undefined | null): number{
    if(typeof inputValue !== 'number'){
        return 0;
    }

    if (isNaN(inputValue)) {
        return 0;
    }

    return inputValue;
}

/**
 * Проверить число
 * @param inputOptions
 */
export function validationNumber(inputOptions: Options): number {

    if (typeof inputOptions.valueForValidation !== 'number') {
        return validationDefaultValue(inputOptions.defaultValue);
    }

    if (isNaN(inputOptions.valueForValidation)) {
        return validationDefaultValue(inputOptions.defaultValue);
    }

    if(!inputOptions.valueForValidation){
        // Отсеиваем тут +0 и -0
        return 0;
    }

    return inputOptions.valueForValidation;
}