import {concatStrings} from "../../src/helpers/concat-strings";

test('Receive array whit strings and return all strings concated', () => {
    const stringConcacted = concatStrings('a', 'b', 'c');

    expect(stringConcacted).toEqual('abc');
})
