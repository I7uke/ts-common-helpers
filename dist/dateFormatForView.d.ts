type Options = {
    /**
     * Значение по умолчанию, будет возвращено если целевое значение не является датой или является не валидной датой
     */
    readonly defaultValue?: string;
    /**
     * Дата для приведения к формату
     */
    readonly date: Date | undefined | null;
    /**
     * Формат даты для вывода
     */
    readonly format: 'DD.MM.YYYY' | 'DD-MM-YYYY' | 'DD.MM.YYYY HH:MM' | 'DD-MM-YYYY HH:MM' | 'DD.MM.YYYY HH:MM:SS' | 'DD-MM-YYYY HH:MM:SS';
};
export default function dateFormatForView(inputOptions: Options): string;
export {};
