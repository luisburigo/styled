import {camelCaseToDashed} from "../../src/helpers/camel-to-dashed";

test('Convert string camel case to dashed', () => {
    const string = camelCaseToDashed('camelCase');
    expect(string).toEqual('camel-case')
})
