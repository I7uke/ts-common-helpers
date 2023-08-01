type Options = {
    /**
     * Значение для преобразования
     */
    readonly value: string | number | null | undefined;
    /**
     * Значение по умолчанию, применяется если не удалось выполнить преобразование
     */
    readonly defaultValue?: Date | null;
    /**
     * Изменить время полученной даты
     */
    readonly changeTime?: 'startDay' | 'endDay';
};
/**
 * Преобразовать строку или число к дате
 * @param inputOptions
 */
export default function convertToDate(options: Options): Date | null;
export {};
