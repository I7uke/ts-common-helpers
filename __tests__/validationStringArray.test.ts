import validationStringArray from "../src/validationStringArray";

test('Массив пустой', () => {
    expect(validationStringArray({
        valueForValidation: []
    })).toStrictEqual([]);
});

test('Массив строк', () => {
    expect(validationStringArray({
        valueForValidation: ['1', '2', '2', '3', '4', '5', '6', '7', '8', '9']
    })).toStrictEqual(['1', '2', '2', '3', '4', '5', '6', '7', '8', '9']);
});

test('undefined', () => {
    expect(validationStringArray({
        valueForValidation: undefined
    })).toStrictEqual([]);
});

test('null', () => {
    expect(validationStringArray({
        valueForValidation: null
    })).toStrictEqual([]);
});

test('Некорректное значение - смешанный массив', () => {
    expect(validationStringArray({
        // @ts-ignore
        valueForValidation: ['1', 2, '3', 4, '5', 6, 7, '8', 9]
    })).toStrictEqual(['1', '3', '5', '8']);
});

test('Некорректное значение - Массив чисел', () => {
    expect(validationStringArray({
        // @ts-ignore
        valueForValidation: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    })).toStrictEqual([]);
});

test('Некорректное значение - объект', () => {
    expect(validationStringArray({
        // @ts-ignore
        valueForValidation: {test: 123}
    })).toStrictEqual([]);
});

test('Некорректное значение - строка', () => {
    expect(validationStringArray({
        // @ts-ignore
        valueForValidation: 'Lalala'
    })).toStrictEqual([]);
});

test('Некорректное значение - число', () => {
    expect(validationStringArray({
        // @ts-ignore
        valueForValidation: 123456
    })).toStrictEqual([]);
});