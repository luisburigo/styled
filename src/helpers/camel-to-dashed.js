/**
 * @description Receive the string camel case and return dashed
 * @param {string} camel
 * @return {string}
 */
export function camelCaseToDashed(camel) {
    return camel.replace(/[A-Z]/g, '-$&').toLowerCase()
}
