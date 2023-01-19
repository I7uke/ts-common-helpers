import validationString from "../src/validationString";

test('Строка', () => {
    expect(validationString({
        defaultValue: 'string defaultValue',
        valueForValidation: 'Lorem ipsum dolor sit amet, solum summo platonem has ea'
    })).toStrictEqual('Lorem ipsum dolor sit amet, solum summo platonem has ea');
});

test('Пустая строка', () => {
    expect(validationString({
        defaultValue: 'string defaultValue',
        valueForValidation: ''
    })).toStrictEqual('string defaultValue');
});

test('Пустая строка без defaultValue', () => {
    expect(validationString({
        valueForValidation: ''
    })).toStrictEqual('');
});

test('defaultValue отсутствует', () => {
    expect(validationString({
        valueForValidation: undefined
    })).toStrictEqual('');
});

test('undefined', () => {
    expect(validationString({
        defaultValue: 'string defaultValue',
        valueForValidation: undefined
    })).toStrictEqual('string defaultValue');
});

test('null', () => {
    expect(validationString({
        defaultValue: 'string defaultValue',
        valueForValidation: null
    })).toStrictEqual('string defaultValue');
});

test('Некорректное значение valueForValidation - NaN', () => {
    expect(validationString({
        defaultValue: 'string defaultValue',
        // @ts-ignore
        valueForValidation: NaN
    })).toStrictEqual('string defaultValue');
});

test('Некорректное значение valueForValidation - число', () => {
    expect(validationString({
        defaultValue: 'string defaultValue',
        // @ts-ignore
        valueForValidation: 123456789
    })).toStrictEqual('string defaultValue');
});

test('Некорректное значение valueForValidation - массив', () => {
    expect(validationString({
        defaultValue: 'string defaultValue',
        // @ts-ignore
        valueForValidation: []
    })).toStrictEqual('string defaultValue');
});

test('Некорректное значение valueForValidation - объект', () => {
    expect(validationString({
        defaultValue: 'string defaultValue',
        // @ts-ignore
        valueForValidation: {test: 123}
    })).toStrictEqual('string defaultValue');
});

test('Некорректные все значение', () => {
    expect(validationString({
        // @ts-ignore
        defaultValue: {test: 123},
        // @ts-ignore
        valueForValidation: {test: 123}
    })).toStrictEqual('');
});