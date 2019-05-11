import {tag} from "../tag";
import {convertObjectToString} from "../../modules/CSScript/convert-object-to-string"
/**
 * A type Style
 * @typedef {Object<string>} Style
 * @property {'div'|'span'|'h1'} element The element HTML create.
 */
/**
 * @description Generate CSS, add style in DOM and create Element
 * @param {string|Object|Style} styles
 * @return string
 */
export function CSScript(styles){
    if(typeof styles === 'object' && Array.isArray(styles)){
        return tag(styles);
    } else if(typeof styles === 'object'){
        const style = convertObjectToString(styles);
        return tag([style]);

    } else if(typeof styles === 'string'){ 
        return tag([styles]);
    }
}