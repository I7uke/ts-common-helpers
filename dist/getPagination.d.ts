type Options = {
    /**
     * Текущая страница
     */
    readonly currentPage: number;
    /**
     * Максимальное возможное количество страниц
     */
    readonly maxPages: number;
    /**
     * Шаг сколько показывать страниц от текущей
     */
    readonly step: number;
};
type PagesResult = {
    /**
     * Показывать последнюю страницу или нет
     */
    readonly firstPage?: number;
    /**
     * Показывать первую страницу или нет
     */
    readonly lastPage?: number;
    /**
     * Список страниц пагинации
     */
    readonly pages: number[];
};
export default function getPagination(options: Options): PagesResult;
export {};
