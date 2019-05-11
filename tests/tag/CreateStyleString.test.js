import {createStyleString} from "../../src/modules/tag/create-style-string";

test('Execute the function whit tag functions', () => {
    const style = createStyleString`
        ${() => `width: ${100 + 20}px`}
    `;

    expect(style).toContain('width: 120px')
});

test('Execute the function whit tag functions and contain colors in parameters', () => {
    const style = createStyleString`
        ${({colors}) => `background-color: ${colors.RED}`}
    `;

    console.log('Aqui -> ', style);

    expect(style).toContain(`background-color: #ff0000`)
});
