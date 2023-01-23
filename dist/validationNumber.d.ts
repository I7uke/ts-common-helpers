type Options = {
    /**
     * Число для проверки
     */
    readonly valueForValidation: number | null | undefined;
    /**
     * Значение по умолчанию, будет возвращено, в случае если число для проверки не являлось числом
     */
    readonly defaultValue?: number;
};
/**
 * Проверить число
 * @param inputOptions
 */
export declare function validationNumber(inputOptions: Options): number;
export {};
