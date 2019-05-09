import {createClassName, hasClassInCache, randomName} from "../../src/modules/tag/create-class-name";

const tamanho = 10;
const className = createClassName(tamanho);

test(`create a random name with length ${tamanho}`, () => {
    const name = randomName(tamanho);
    expect(name).toHaveLength(tamanho);
})
;

test(`create a random class name whit length ${tamanho}`, () => {
    expect(className).toHaveLength(tamanho);
});

test('when generating the class, should be in the cache', () => {
    const hasClass = hasClassInCache(className);
    expect(hasClass).toEqual(true);
});
