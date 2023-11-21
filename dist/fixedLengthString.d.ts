type FixedLengthStringOptions = {
    /**
     * Целевая строка
     */
    readonly value: string | undefined | null;
    /**
     * Максимальная длинна строки
     */
    readonly maxLength: number;
    /**
     * Значение по умолчанию, будет возвращено в случае если целевое значение не является строкой или является пустой строкой
     */
    readonly defaultValue?: string;
};
/**
 * Ограничить строку до заданного количества символов
 * @param inputOptions
 */
export default function fixedLengthString(options: FixedLengthStringOptions): string;
export {};
