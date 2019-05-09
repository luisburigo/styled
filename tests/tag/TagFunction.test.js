import {tag} from "../../src/modules/tag";

test('Execute the tag function and return class name', () => {

    tag`
        background: red;
        width: 100px;
        ${({color}) => `color: ${ color.orange }`}
    `;

});