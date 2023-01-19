import validationNumberArray from "../src/validationNumberArray";

test('Массив пустой', () => {
    expect(validationNumberArray({
        valueForValidation: []
    })).toStrictEqual([]);
});

test('Массив чисел', () => {
    expect(validationNumberArray({
        valueForValidation: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    })).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('undefined', () => {
    expect(validationNumberArray({
        valueForValidation: undefined
    })).toStrictEqual([]);
});

test('null', () => {
    expect(validationNumberArray({
        valueForValidation: null
    })).toStrictEqual([]);
});

test('Некорректное значение - Массив строк', () => {
    expect(validationNumberArray({
        // @ts-ignore
        valueForValidation: ['1', '2', '3', '4', '5']
    })).toStrictEqual([]);
});

test('Некорректное значение - смешанный массив', () => {
    expect(validationNumberArray({
        // @ts-ignore
        valueForValidation: ['1', 2, '3', 4, '5', 6, 7, '8', 9]
    })).toStrictEqual([2, 4, 6, 7, 9]);
});

test('Некорректное значение - объект', () => {
    expect(validationNumberArray({
        // @ts-ignore
        valueForValidation: {test: 123}
    })).toStrictEqual([]);
});

test('Некорректное значение - строка', () => {
    expect(validationNumberArray({
        // @ts-ignore
        valueForValidation: 'Lalala'
    })).toStrictEqual([]);
});

test('Некорректное значение - число', () => {
    expect(validationNumberArray({
        // @ts-ignore
        valueForValidation: 123456
    })).toStrictEqual([]);
});

