import checkDate from "../dist/checkDate";

test('Корректное значение дата', () => {
    expect(checkDate(new Date())).toStrictEqual(true);
});

test('Некорректная дата', () => {
    expect(checkDate(new Date('test'))).toStrictEqual(false);
});

test('Некорректное значение = массив', () => {
    expect(checkDate([])).toStrictEqual(false);
});

test('Некорректное значение = массив', () => {
    expect(checkDate([1, 2, 3])).toStrictEqual(false);
});

test('Некорректное значение = массив', () => {
    expect(checkDate([10])).toStrictEqual(false);
});

test('Некорректное значение - объект', () => {
    expect(checkDate({})).toStrictEqual(false);
});

test('Некорректное значение - строка', () => {
    expect(checkDate('Test string')).toStrictEqual(false);
});

test('Некорректное значение - пустая строка', () => {
    expect(checkDate('')).toStrictEqual(false);
});

test('Некорректное значение - строка число', () => {
    expect(checkDate('10')).toStrictEqual(false);
});

test('Некорректное значение - число', () => {
    expect(checkDate(10)).toStrictEqual(false);
});

test('Некорректное значение - число 0', () => {
    expect(checkDate(0)).toStrictEqual(false);
});

test('Некорректное значение - число отрицательное', () => {
    expect(checkDate(-10)).toStrictEqual(false);
});

test('Некорректное значение - null', () => {
    expect(checkDate(null)).toStrictEqual(false);
});

test('Некорректное значение - undefined', () => {
    expect(checkDate(undefined)).toStrictEqual(false);
});

test('Некорректное значение - NaN', () => {
    expect(checkDate(NaN)).toStrictEqual(false);
});