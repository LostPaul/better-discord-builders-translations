import { ActionRowBuilder } from "better-discord-builders";
import { LocaleButtonBuilder } from "./Button";
import { LocaleSelectMenuBuilder } from "./SelectMenu";
import { LocaleTextInputBuilder } from "./TextInput";
import { Settings } from "../index";
export class LocaleActionRowBuilder extends ActionRowBuilder {
    declare public components: LocaleButtonBuilder[] | LocaleSelectMenuBuilder[] | LocaleTextInputBuilder[];
    constructor(settings: Settings, data: LocaleButtonBuilder[] | LocaleSelectMenuBuilder[] | LocaleTextInputBuilder[]) {
        super();
        if (data[0] instanceof LocaleButtonBuilder) {
            this.components = (data as LocaleButtonBuilder[]).map((component) => new LocaleButtonBuilder(component, settings));
        } else if (data[0] instanceof LocaleSelectMenuBuilder) {
            this.components = (data as LocaleSelectMenuBuilder[]).map((component) => new LocaleSelectMenuBuilder(component, settings));
        } else if (data[0] instanceof LocaleTextInputBuilder) {
            this.components = (data as LocaleTextInputBuilder[]).map((component) => new LocaleTextInputBuilder(component));
        }
    }
}
