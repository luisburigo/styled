import {tag} from "../../src/modules/tag";

test('Execute the tag function and return class name', () => {

   const className = tag`
        background: red;
        width: 100px;
        ${({colors}) => `color: ${ colors.ORANGE }`}
    `;

    expect(typeof className).toEqual('string')

});