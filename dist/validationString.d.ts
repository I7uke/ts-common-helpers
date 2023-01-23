type Options = {
    /**
     * Строка для проверки
     */
    readonly valueForValidation: string | null | undefined;
    /**
     * Значение по умолчанию, будет возвращено, если переданное значение не является строкой или пустой строкой
     */
    readonly defaultValue?: string;
};
/**
 * Проверяет строку
 * @param inputOptions
 */
export default function validationString(inputOptions: Options): string;
export {};
