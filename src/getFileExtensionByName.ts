/**
 * Получить расширение файла по его имени
 * @param inputFileName
 */
export function getFileExtensionByName(inputFileName: string | undefined | null): string {
    const unknownFileExtension: string = 'unknown';

    if (!inputFileName) {
        return unknownFileExtension;
    }

    if (typeof inputFileName !== 'string') {
        return unknownFileExtension;
    }

    if (inputFileName.length < 3) {
        return unknownFileExtension;
    }

    const tmp = inputFileName.split('.');

    if (!tmp.length) {
        return unknownFileExtension;
    }

    const fileExtension: string = tmp[tmp.length - 1];

    if (fileExtension) {
        return fileExtension.toLowerCase();
    }

    return unknownFileExtension;
}

