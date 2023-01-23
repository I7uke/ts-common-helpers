type Options = {
    readonly defaultValue?: string;
    readonly date: Date | undefined | null;
    readonly format: 'DD.MM.YYYY' | 'DD-MM-YYYY' | 'DD.MM.YYYY HH:MM' | 'DD-MM-YYYY HH:MM' | 'DD.MM.YYYY HH:MM:SS' | 'DD-MM-YYYY HH:MM:SS';
};
export default function dateFormatForView(inputOptions: Options): string;
export {};
