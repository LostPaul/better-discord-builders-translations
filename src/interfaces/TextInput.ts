import { TextInput } from "better-discord-builders";
export interface LocaleTextInput extends TextInput {
    translations?: {
        [key: string]: {
            placeholder?: string;
            label?: string;
            value?: string;
        }
    };
}
