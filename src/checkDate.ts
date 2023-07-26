/**
 *  Проверяет является ли переданный объект датой
 * Если объект является датой вернет true иначе вернет false
 * @param date 
 * @returns 
 */
export default function checkDate(date: any): boolean {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        return false;
    }

    if(isNaN(Number(date))) {
        return false;
    }

    return true;
}