import {convertToDate} from "../src/convertToDate";

const defaultValueDate: Date = new Date();
const testDate = new Date();
testDate.setUTCMilliseconds(0);

const testDateStartDay = new Date(+testDate);
testDateStartDay.setHours(0, 0, 0, 0);
const testDateEndDay = new Date(+testDate);
testDateEndDay.setHours(23, 59, 0, 0);

test('Date object', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        valueForConvert: testDate
    })).toStrictEqual(testDate);
});

test('timestamp', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        valueForConvert: +testDate
    })).toStrictEqual(testDate);
});

test('ISOS', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        valueForConvert: testDate.toISOString()
    })).toStrictEqual(testDate);
});

test('UTC', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        valueForConvert: testDate.toUTCString()
    })).toStrictEqual(testDate);
});

test('JSON', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        valueForConvert: testDate.toJSON()
    })).toStrictEqual(testDate);
});

test('Начало дня', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        valueForConvert: testDateStartDay.toJSON(),
        changeTime: 'startDay'
    })).toStrictEqual(testDateStartDay);
});

test('Конец дня', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        valueForConvert: testDateEndDay.toJSON(),
        changeTime: 'endDay'
    })).toStrictEqual(testDateEndDay);
});

test('Invalid Date', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        valueForConvert: new Date('Lala')
    })).toStrictEqual(defaultValueDate);
});

test('defaultValue null', () => {
    expect(convertToDate({
        defaultValue: null,
        valueForConvert: new Date('Lala')
    })).toStrictEqual(null);
});

test('undefined', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        valueForConvert: undefined
    })).toStrictEqual(defaultValueDate);
});

test('null', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        valueForConvert: null
    })).toStrictEqual(defaultValueDate);
});

test('NaN', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        valueForConvert: NaN
    })).toStrictEqual(defaultValueDate);
});

test('Некорректное значение - массив', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        // @ts-ignore
        valueForConvert: []
    })).toStrictEqual(defaultValueDate);
});

test('Некорректное значение - объект', () => {
    expect(convertToDate({
        defaultValue: defaultValueDate,
        // @ts-ignore
        valueForConvert: {test:123}
    })).toStrictEqual(defaultValueDate);
});

test('Некорректное defaultValue', () => {
    expect(convertToDate({
        // @ts-ignore
        defaultValue: [],
        // @ts-ignore
        valueForConvert: {test:123}
    })).toStrictEqual(null);
});