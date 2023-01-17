/**
 * Получить расширение файла по его имени
 * @param inputFileName
 */
export function getFileExtensionByName(inputFileName: string): string {
    const tmp = inputFileName.split('.');

    if(!tmp.length) {
        return 'unknown';
    }

    const fileExtension: string = tmp[tmp.length-1];

    if(fileExtension) {
        return fileExtension.toLowerCase();
    }

    return 'unknown';
}

