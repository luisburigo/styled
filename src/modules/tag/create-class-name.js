/**
 * @type {Array<string>}
 */
const cache = [];

/**
 * @type {string}
 */
const allLetters = "ABCDDEFGHIJKLMNOPQRSTUVXZWYabcdefghijklmnopqrsuvxzwy";

/**
 * @description add clas name in cache
 * @param {string} className
 * @return {number}
 */
const addClassNameInCache = (className) => cache.push(className);

/**
 * @description return a boolean value if exist class in cache
 * @param {string} className
 * @return {boolean}
 */
export const hasClassInCache = (className) => cache.includes(className);

/**
 * @description create random class name
 * @param {number} length
 * @return {string}
 */
export function createClassName(length) {
    let name = randomName(length);

    do {
        name = randomName(length);
    } while (hasClassInCache(name));

    name = className(name);
    addClassNameInCache(name);

    return name; // Todo: retornar dois tipos, com e sem ponto.
}

/**
 * @description generate a random name
 * @param {number} length
 * @return {string}
 */
export function randomName(length) {
    const lengthLetters = allLetters.length - 1;
    const randomNumber = (length) => Math.round(Math.random() * length);
    let name = '';

    for (let i = 0; i < length; i++) {
        name += allLetters[randomNumber(lengthLetters)];
    }

    return name;
}

/**
 * @param {string} className
 * @return {string}
 */
function className(className) {
    return `.${className}`;
}