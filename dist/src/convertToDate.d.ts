type Options = {
    /**
     * Значение для преобразования
     */
    readonly valueForConvert: string | Date | number | null | undefined;
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
 * Если передана дата, выполнит ее проверку и в случае успеха вернет переданную дату
 * @param inputOptions
 */
export declare function convertToDate(inputOptions: Options): Date | null;
export {};
