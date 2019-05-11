/**
 * @description conver the object to string
 * @param {Object} object
 * @return string
 */
export function convertObjectToString(object){
    let string = '';

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key];
            string += `${key}: ${value}`;
        }
    }

    return string;
}