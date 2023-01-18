/**
 * @jest-environment jsdom
 */

import {getIdFromUrl} from "../src/getIdFromUrl";

// @ts-ignore
delete window.location;
// @ts-ignore
window.location = {};
Object.defineProperty(window.location, 'href', {
    get: jest.fn(() => 'http://path1/path2/123'),
});

test('ID является числом,ожидается число', () => {
    expect(getIdFromUrl({
        idType: 'number',
        defaultValue: -1
    })).toStrictEqual(123);
});

test('ID является числом,ожидается строка', () => {
    expect(getIdFromUrl({
        idType: 'string',
        defaultValue: 'empty'
    })).toStrictEqual('123');
});