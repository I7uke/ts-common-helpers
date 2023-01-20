type Options = {
    /**
     * Число для округления
     */
    readonly number: number | undefined | null;
    /**
     * Точность, количество знаков после запятой
     */
    readonly accuracy?: number;
}

/**
 * Округлить число до знака
 * @param inputOptions
 */
export function numberRounding(inputOptions: Options): number {
    if (typeof inputOptions.number !== 'number') {
        return 0;
    }

    if (isNaN(inputOptions.number)) {
        return 0;
    }

    const numberToRound: number = inputOptions.number;
    const inputAccuracy = inputOptions.accuracy;

    if (typeof inputAccuracy !== 'number') {
        return Math.round(numberToRound);
    }

    if (inputAccuracy <= 0) {
        return Math.round(numberToRound);
    }

    const accuracy: number = Math.pow(10, inputAccuracy);

    return Math.round(numberToRound * accuracy) / accuracy;
}