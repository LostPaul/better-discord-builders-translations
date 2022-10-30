export interface Settings {
    userLocale: string;
    guildLocale: string;
    useLocale: 'user' | 'guild';
}
export { LocaleButtonBuilder as ButtonBuilder } from './components/Button';
export { LocaleSelectMenuBuilder as SelectMenuBuilder } from './components/SelectMenu';
export { LocaleActionRowBuilder as ActionRowBuilder } from './components/ActionRow';
export { LocaleModalBuilder as ModalBuilder } from './interactions/Modal';
export { LocaleTextInputBuilder as TextInputBuilder } from './components/TextInput';
export { LocaleEmbedBuilder as EmbedBuilder } from './messages/Embed';
export {
    ButtonStyle,
    SelectMenuStyle,
    TextInputStyle,
    SlashCommandOption
} from 'better-discord-builders';
