export interface ILanguage {
    id: number;
    shortcode: string;
    name: string;
}

export interface ILanguagesList {
    data: Array<ILanguage>
}