import { LocaleTextInputBuilder } from "../components/TextInput";
import { LocaleActionRowBuilder } from "../components/ActionRowTextInput";
import { Settings, } from "../index";
import { ModalBuilder } from "better-discord-builders";
import { Modal } from "../interfaces/Modal";
export class LocaleModalBuilder extends ModalBuilder {
    public title: string;
    public custom_id: string;
    public components: LocaleActionRowBuilder[] = [];
    public translations?: {
        [key: string]: {
            title?: string;
        }
    };
    public constructor(settings: Settings, data: Modal) {
        super(data);
        this.title = data.title;
        this.custom_id = data.custom_id;
        this.translations = this.translations;
        if (settings && data.translations) {
            const locale = settings.useLocale === "user" ? settings.userLocale : settings.guildLocale;
            this.title = data.translations[locale].title ?? this.title ?? "";
        }
        this.components = [new LocaleActionRowBuilder(settings, data.components?.map((component) => new LocaleTextInputBuilder(component, settings)) ?? [])];
        delete this.translations;
    }
}
