import { InputOptions } from "./models/inputOptions";
type ValueForConvert = string | number | undefined | null;
/**
 * Перевести строку к числу
 * @param inputOptions
 */
export default function convertToNumber(options: InputOptions<ValueForConvert, number>): number;
export {};
