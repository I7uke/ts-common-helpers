import {numberRounding} from "../src/numberRounding";

test('+0', () => {
    expect(numberRounding({
        number: 0,
        accuracy: 2
    })).toStrictEqual(0);
});

test('-0', () => {
    expect(numberRounding({
        number: 0,
        accuracy: 2
    })).toStrictEqual(0);
});

test('Положительное округление до целого', () => {
    expect(numberRounding({
        number: 1234.56789
    })).toStrictEqual(1235);
});

test('Отрицательное округление до целого', () => {
    expect(numberRounding({
        number: -1234.56789
    })).toStrictEqual(-1235);
});

test('Положительное округление до 3 знака', () => {
    expect(numberRounding({
        number: 1234.56789,
        accuracy: 3
    })).toStrictEqual(1234.568);
});

test('Отрицательное округление до 3 знака', () => {
    expect(numberRounding({
        number: -1234.56789,
        accuracy: 3
    })).toStrictEqual(-1234.568);
});

test('Положительное округление до 7 знака', () => {
    expect(numberRounding({
        number: 1234.56789,
        accuracy: 7
    })).toStrictEqual(1234.56789);
});

test('Отрицательное округление до 7 знака', () => {
    expect(numberRounding({
        number: -1234.56789,
        accuracy: 7
    })).toStrictEqual(-1234.56789);
});

test('Положительное округление до 2 знака', () => {
    expect(numberRounding({
        number: 123.43214321,
        accuracy: 2
    })).toStrictEqual(123.43);
});

test('Отрицательное округление до 2 знака', () => {
    expect(numberRounding({
        number: -123.43214321,
        accuracy: 2
    })).toStrictEqual(-123.43);
});


test('undefined', () => {
    expect(numberRounding({
        number: undefined,
        accuracy: 2
    })).toStrictEqual(0);
});

test('null', () => {
    expect(numberRounding({
        number: null,
        accuracy: 2
    })).toStrictEqual(0);
});

test('NaN', () => {
    expect(numberRounding({
        number: NaN,
        accuracy: 2
    })).toStrictEqual(0);
});

test('Некорректное значение number - строка', () => {
    expect(numberRounding({
        // @ts-ignore
        number: 'Lala',
        accuracy: 2
    })).toStrictEqual(0);
});


test('Некорректное значение number - массив', () => {
    expect(numberRounding({
        // @ts-ignore
        number: [],
        accuracy: 2
    })).toStrictEqual(0);
});

test('Некорректное значение number - объект', () => {
    expect(numberRounding({
        // @ts-ignore
        number: {},
        accuracy: 2
    })).toStrictEqual(0);
});

test('Некорректное значение accuracy - объект', () => {
    expect(numberRounding({
        number: 1234.56789,
        // @ts-ignore
        accuracy: 'lala'
    })).toStrictEqual(1235);
});

test('Все некорректные значения', () => {
    expect(numberRounding({
        // @ts-ignore
        number: [],
        // @ts-ignore
        accuracy: 'lala'
    })).toStrictEqual(0);
});