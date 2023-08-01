import { InputOptions } from "./models/inputOptions";
type ValueForValidation = string | null | undefined;
/**
 * Проверяет строку
 * Значение по умолчанию, будет возвращено, если переданное значение не является строкой или пустой строкой
 * @param inputOptions
 */
export default function validationString(options: InputOptions<ValueForValidation, string>): string;
export {};
