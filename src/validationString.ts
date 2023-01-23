type Options = {
    /**
     * Строка для проверки
     */
    readonly valueForValidation: string | null | undefined;
    /**
     * Значение по умолчанию, будет возвращено, если переданное значение не является строкой или пустой строкой
     */
    readonly defaultValue?: string;
}

function validationDefaultValue(inputValue: string | null | undefined): string {
    if (typeof inputValue !== 'string') {
        return '';
    }

    const resultValue = inputValue.trim();

    if (!resultValue) {
        return '';
    }

    return resultValue;
}

/**
 * Проверяет строку
 * @param inputOptions
 */
export default function validationString(inputOptions: Options): string {

    if (typeof inputOptions.valueForValidation !== 'string') {
        return validationDefaultValue(inputOptions.defaultValue);
    }

    const resultString = inputOptions.valueForValidation.trim();

    if (!resultString) {
        return validationDefaultValue(inputOptions.defaultValue);
    }

    return resultString;
}