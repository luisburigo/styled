import {convertObjectToString} from "../../src/modules/CSScript/convert-object-to-string";

test('Pass object to function and return a string', () => {
    const string = convertObjectToString({
        width: '100px'
    })

    expect(string).toEqual('width: 100px')
})