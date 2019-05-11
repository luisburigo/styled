import {tag} from "../tag";
import {convertObjectToString} from "../../modules/CSScript/convert-object-to-string"
import {createElement} from "../../modules/CSScript/create-element"

/**
 * A type Style
 * @typedef {Object<string>} Style
 * @property {'div'|'span'|'h1'} element The element HTML create.
 */
/**
 * @description Generate CSS, add style in DOM and create Element
 * @param {string|Object|Style} styles
 * @return string | HTMLElement
 */
export function CSScript(styles){
    if(typeof styles === 'object' && Array.isArray(styles)){
        return tag(styles);
    } else if(typeof styles === 'object'){
        const styleConverted = convertObjectToString(styles);
        const className = tag([styleConverted]);
        return verifyIfCreateElement(styles, className);
    } else if(typeof styles === 'string'){ 
        return tag([styles]);
    }
}

/**
 * @description verify if create element or return the classname
 * @param {Object} styles 
 * @param {string} className 
 * @return HTMLElement | string
 */
function verifyIfCreateElement(styles, className){
    if(styles.element){
        return createElement(styles.element, className);
    }

    return className;
}