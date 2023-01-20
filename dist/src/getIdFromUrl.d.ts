type ValidTypeIdNumber = 'number';
type ValidTypeIdString = 'string';
type ValidTypesId = ValidTypeIdNumber | ValidTypeIdString;
type ValueType<IdType extends ValidTypesId> = IdType extends ValidTypeIdNumber ? number : string;
interface BaseIdType<IdType extends ValidTypesId> {
    /**
     * Желаемый тип ID - number или string
     */
    readonly idType: IdType;
    /**
     * Значение по умолчанию, будет возвращено в случае, если не удалось получить ID
     */
    readonly defaultValue: ValueType<IdType>;
    /**
     * url из которого нужно получить ID
     */
    readonly url?: string | null;
}
/**
 * Получить из url вида /path/path2/someID последний элемент (someID)
 * @param inputOptions
 */
export declare function getIdFromUrl<T extends ValidTypesId>(inputOptions: BaseIdType<T>): ValueType<T>;
export {};
