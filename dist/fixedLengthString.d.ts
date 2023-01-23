type FixedLengthStringOptions = {
    /**
     * Целевая строка
     */
    readonly stringToFixed: string | undefined | null;
    /**
     * Максимальная длинна строки
     */
    readonly maxLength: number;
    /**
     * Значение по умолчанию, будет возвращено в случае если целевое значение не строка или пустая строка
     */
    readonly defaultValue?: string;
};
/**
 * Ограничить строку до заданного количества символов
 * @param inputOptions
 */
export declare function fixedLengthString(inputOptions: FixedLengthStringOptions): string;
export {};
