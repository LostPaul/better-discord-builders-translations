import { ComponentType } from 'discord-api-types/v10';
import { LocaleTextInputBuilder } from './TextInput';
import { ActionRowTextInputBuilder } from 'better-discord-builders';
import { Settings } from '../index';
export class LocaleActionRowBuilder extends ActionRowTextInputBuilder {
    public type = ComponentType.ActionRow;
    public components: LocaleTextInputBuilder[] = [];
    constructor(settings: Settings, components: LocaleTextInputBuilder[]) {
        super();
        this.components = components;
    }
}
