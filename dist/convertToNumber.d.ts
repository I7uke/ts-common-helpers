type ConvertToNumberOptions = {
    /**
     * Значение по умолчанию, применяется если не удалось выполнить преобразование
     */
    readonly defaultValue?: number;
    /**
     * Значение для преобразования
     */
    readonly valueForConvert: string | number | undefined | null;
};
/**
 * Перевести строку к числу
 * Если передано число, оно будет проверено и в случае успеха возвращено
 * @param inputOptions
 */
export default function convertToNumber(inputOptions: ConvertToNumberOptions): number;
export {};
