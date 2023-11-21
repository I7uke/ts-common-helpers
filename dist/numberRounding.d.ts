type Options = {
    /**
     * Число для округления
     */
    readonly number: number | undefined | null;
    /**
     * Точность, количество знаков после запятой
     * Если заданная точность меньше или равна нулю, число будет округлено до ближайшего целого
     */
    readonly accuracy?: number;
};
/**
 * Округлить число до знака
 * @param inputOptions
 */
export default function numberRounding(options: Options): number;
export {};
