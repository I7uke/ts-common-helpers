/**
 * Округление дробных значений
 * @param inputNumber - Число для округления
 * @param inputAccuracy - Точность, количество знаков после запятой
 */
export function numberRounding(inputNumber: number, inputAccuracy?: number): number {
    const numberToRound: number = inputNumber;

    if(isNaN(numberToRound)){
        return 0;
    }

    if(typeof numberToRound !== 'number'){
        return 0;
    }

    if(typeof inputAccuracy !== 'number'){
        return Math.round(numberToRound);
    }

    if(inputAccuracy < 0){
        return Math.round(numberToRound);
    }

    if(inputAccuracy === 0) {
        return Math.round(numberToRound);
    }

    const accuracy: number =Math.pow(10, inputAccuracy);

    return Math.round(numberToRound * accuracy) / accuracy;
}