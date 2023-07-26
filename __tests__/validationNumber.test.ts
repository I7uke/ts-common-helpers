import validationNumber from "../dist/validationNumber";

test('Число -100', () => {
    expect(validationNumber({
        defaultValue: 5,
        valueForValidation: -100
    })).toStrictEqual(-100);
});

test('Число 0', () => {
    expect(validationNumber({
        defaultValue: 5,
        valueForValidation: 0
    })).toStrictEqual(0);
});

test('Число -0', () => {
    expect(validationNumber({
        defaultValue: 5,
        valueForValidation: -0
    })).toStrictEqual(0);
});

test('Число +0', () => {
    expect(validationNumber({
        defaultValue: 5,
        valueForValidation: -0
    })).toStrictEqual(0);
});

test('Число 125', () => {
    expect(validationNumber({
        defaultValue: 5,
        valueForValidation: 125
    })).toStrictEqual(125);
});

test('defaultValue отсутствует', () => {
    expect(validationNumber({
        valueForValidation: undefined
    })).toStrictEqual(0);
});

test('undefined', () => {
    expect(validationNumber({
        defaultValue: 5,
        valueForValidation: undefined
    })).toStrictEqual(5);
});

test('null', () => {
    expect(validationNumber({
        defaultValue: 150,
        valueForValidation: null
    })).toStrictEqual(150);
});

test('NaN', () => {
    expect(validationNumber({
        defaultValue: 5,
        valueForValidation: NaN
    })).toStrictEqual(5);
});

test('Некорректное значение valueForValidation - строка', () => {
    expect(validationNumber({
        defaultValue: 5,
        // @ts-ignore
        valueForValidation: 'Lala'
    })).toStrictEqual(5);
});

test('Некорректное значение valueForValidation - массив', () => {
    expect(validationNumber({
        defaultValue: 5,
        // @ts-ignore
        valueForValidation: []
    })).toStrictEqual(5);
});

test('Некорректное значение valueForValidation - объект', () => {
    expect(validationNumber({
        defaultValue: 5,
        // @ts-ignore
        valueForValidation: {test: 123}
    })).toStrictEqual(5);
});

test('Некорректные все значение', () => {
    expect(validationNumber({
        // @ts-ignore
        defaultValue: {test: 123},
        // @ts-ignore
        valueForValidation: {test: 123}
    })).toStrictEqual(0);
});