import { TextInputBuilder } from "better-discord-builders";
import { Settings } from "../index";
import { LocaleTextInput } from "../interfaces/TextInput";
export class LocaleTextInputBuilder extends TextInputBuilder {
    declare public translations?: {
        [key: string]: {
            placeholder?: string;
            label?: string;
            value?: string;
        }
    };
    public constructor(data: LocaleTextInput, settings?: Settings) {
        super(data);
        if (data.translations) {
            this.translations = data.translations;
        }
        if (settings && this.translations) {
            const locale = settings.useLocale === "user" ? settings.userLocale : settings.guildLocale;
            this.placeholder = this.translations[locale].placeholder ?? this.placeholder ?? "";
            this.label = this.translations[locale].label ?? this.label ?? "";
            this.value = this.translations[locale].value ?? this.value ?? "";
            this.data.label = this.label;
            this.data.placeholder = this.placeholder;
            this.data.value = this.value;
        }
        if (settings) {
            delete this.translations;
        }
    }
}
