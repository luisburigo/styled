/**
 * @description Receive a string with styles and add in tag <style csscript> in <head>
 * @param {Array<string>} styles
 */
export function createStyleString(...styles) {
    const styleArray = styles.map((css, i, array) => {
        if (typeof css === 'object') {
            return css;
        } else if (typeof css === 'function') {
            return css();
        }
    });

    const styleString = styleArray.join('');
    const styleSplitForBreakLines = styleString.split(',');

    return removeCommaAndReturnString(styleSplitForBreakLines);
}

/**
 * @param {Array} array
 * @return string
 */
function removeCommaAndReturnString(array) {
    return array.filter(arr => arr !== ',').join('')
}
