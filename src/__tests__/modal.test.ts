import { ModalBuilder, TextInputBuilder, TextInputStyle } from '../index';
test("modal-builder", () => {
    const modal = new ModalBuilder({ userLocale: "de", guildLocale: "en", useLocale: "user" }, {
        title: 'Test',
        custom_id: 'test',
        components: [
          new TextInputBuilder({
            custom_id: 'test',
            style: TextInputStyle.Paragraph,
            placeholder: 'Test',
            label: 'Hello',
            translations: {
              de: {
                label: 'Hallo',
                placeholder: 'Test'
              }
            }
          })
        ]
      })
      console.log(modal.components[0])
    expect(modal).toBeDefined();
});