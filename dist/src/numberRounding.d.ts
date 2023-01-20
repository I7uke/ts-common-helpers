type Options = {
    /**
     * Число для округления
     */
    readonly number: number | undefined | null;
    /**
     * Точность, количество знаков после запятой
     */
    readonly accuracy?: number;
};
/**
 * Округлить число до знака
 * @param inputOptions
 */
export declare function numberRounding(inputOptions: Options): number;
export {};
