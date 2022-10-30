import { LocaleTextInputBuilder } from '../components/TextInput';
export interface Modal {
    title: string;
    custom_id: string;
    components?: LocaleTextInputBuilder[];
    translations?: {
        [key: string]: {
            title?: string;
        }
    };
}
