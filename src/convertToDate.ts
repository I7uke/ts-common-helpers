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
}

function validationDate(date: Date | null | undefined): Date | null {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        return null;
    }

    if(isNaN(Number(date))) {
        return null;
    }

    return date as Date;
}

/**
 * Преобразовать строку или число к дате
 * Если передана дата, выполнит ее проверку и в случае успеха вернет переданную дату
 * @param inputOptions
 */
export default function convertToDate(inputOptions: Options): Date | null {

    if (!inputOptions.valueForConvert) {
        return validationDate(inputOptions.defaultValue);
    }

    let resultDate: Date | null = null;

    if (typeof inputOptions.valueForConvert === 'string') {
        const dateString = inputOptions.valueForConvert.trim();

        if (!dateString) {
            return validationDate(inputOptions.defaultValue);
        }

        const resultDateConvertFromString = new Date(dateString);

        if (isNaN(+resultDateConvertFromString)) {
            return validationDate(inputOptions.defaultValue);
        }

        resultDate = resultDateConvertFromString;
    }

    if (typeof inputOptions.valueForConvert === 'number') {
        const dateNumber: number = inputOptions.valueForConvert;

        if (dateNumber <= 0) {
            return validationDate(inputOptions.defaultValue);
        }

        const resultDateConvertFromNumber = new Date(dateNumber);

        if (isNaN(+resultDateConvertFromNumber)) {
            return validationDate(inputOptions.defaultValue);
        }

        resultDate = resultDateConvertFromNumber;
    }

    if (typeof inputOptions.valueForConvert === 'object') {
        const dateObject = validationDate(inputOptions.valueForConvert);

        if (!dateObject) {
            return validationDate(inputOptions.defaultValue);
        }

        resultDate = dateObject;
    }

    if (!resultDate) {
        return validationDate(inputOptions.defaultValue);
    }

    if (inputOptions.changeTime) {
        if (inputOptions.changeTime === 'startDay') {
            // Обнуляем время
            resultDate.setHours(0, 0, 0, 0);
        }

        if (inputOptions.changeTime === 'endDay') {
            // Ставим 23:59 текущего дня
            resultDate.setHours(23, 59, 0, 0);
        }
    }

    return resultDate;
}