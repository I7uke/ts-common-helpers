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
     * startDay - Начало дня, hours: 0, min: 0, sec: 0, ms: 0
     * endDay - Конец дня hours: 23, min: 59, sec: 0, ms: 0
     */
    readonly changeTime?: 'startDay' | 'endDay';
};
/**
 * Преобразовать строку или число к дате
 * @param inputOptions
 */
export default function convertToDate(options: Options): Date | null;
export {};
