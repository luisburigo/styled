import {createClassName, hasClassInCache, randomName} from "../../src/modules/tag/create-class-name";

const tamanho = 10;
const className = createClassName(tamanho);

test(`create a random name with length ${tamanho}`, () => {
    const name = randomName(tamanho);
    expect(name).toHaveLength(tamanho);
})
;

test(`create a random class name whit length ${tamanho + 1}`, () => {
    // O mais 1 é para somar com a inserção do 
    expect(className.className).toHaveLength(tamanho + 1);
});

test('when generating the class, should be in the cache', () => {
    const hasClass = hasClassInCache(className.name);
    expect(hasClass).toEqual(true);
});
