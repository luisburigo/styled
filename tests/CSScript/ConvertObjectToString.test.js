import {convertObjectToString} from "../../src/modules/CSScript/convert-object-to-string";

test('Pass object to function and return a string', () => {
    const string = convertObjectToString({
        width: '100px'
    })

    expect(string).toEqual('width: 100px')
})

test('Pass object with element key and not insert in string', () => {
    const string = convertObjectToString({
        width: '100px',
        element: 'div'
    })

    expect(string).toEqual('width: 100px')
})