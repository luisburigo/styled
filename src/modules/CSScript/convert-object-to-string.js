const KEYS_NO_VALIDATE = ['element'];

/**
 * @description conver the object to string
 * @param {Object} object
 * @return string
 */
export function convertObjectToString(object){
    let string = '';

    for (const key in object) {
        if (object.hasOwnProperty(key) && noValidate(KEYS_NO_VALIDATE, key)) {
            const value = object[key];
            string += `${key}: ${value}`;
        }
    }

    return string;
}

/**
 * @description Validate values
 * @param {Array} validates 
 * @param {string|number} value 
 * @return boolean
 */
function noValidate(validates, value){
    return !validates.includes(value);
}