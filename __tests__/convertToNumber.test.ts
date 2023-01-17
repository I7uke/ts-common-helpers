import {convertToNumber} from "../src/convertToNumber";

test('Число -5', () => {
    expect(convertToNumber({
        defaultValue: 0,
        valueForConvert: -5
    })).toBe(-5);
});

test('Число 0', () => {
    expect(convertToNumber({
        defaultValue: 0,
        valueForConvert: 0
    })).toBe(0);
});

test('Число 1', () => {
    expect(convertToNumber({
        defaultValue: 0,
        valueForConvert: 1
    })).toBe(1);
});


test('Строковое -300', () => {
    expect(convertToNumber({
        defaultValue: 0,
        valueForConvert: '-300'
    })).toBe(-300);
});

test('Строковое 0', () => {
    expect(convertToNumber({
        defaultValue: 0,
        valueForConvert: '0'
    })).toBe(0);
});

test('Строковое 1000', () => {
    expect(convertToNumber({
        defaultValue: 0,
        valueForConvert: '1000'
    })).toBe(1000);
});

test('Строковое Lalala', () => {
    expect(convertToNumber({
        defaultValue: 100,
        valueForConvert: 'Lalala'
    })).toBe(100);
});

test('undefined', () => {
    expect(convertToNumber({
        defaultValue: 5,
        valueForConvert: undefined
    })).toBe(5);
});

test('null', () => {
    expect(convertToNumber({
        defaultValue: 6,
        valueForConvert: null
    })).toBe(6);
});

test('object', () => {
    expect(convertToNumber({
        defaultValue: 7,
        // @ts-ignore
        valueForConvert: {test: 123}
    })).toBe(7);
});

test('array', () => {
    expect(convertToNumber({
        defaultValue: 8,
        // @ts-ignore
        valueForConvert: []
    })).toBe(8);
});

test('NaN', () => {
    expect(convertToNumber({
        defaultValue: 9,
        valueForConvert: NaN
    })).toBe(9);
});