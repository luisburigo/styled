import {tag} from "../tag";
import {convertObjectToString} from "../../modules/CSScript/convert-object-to-string"

/**
 * @description Generate CSS, add style in DOM and create Element
 * @param {string|Object} styles
 * @return string
 */
export function CSScript(styles){
    if(typeof styles === 'object' && Array.isArray(styles)){
        return tag(styles);
    } else if(typeof styles === 'object'){
        const style = convertObjectToString(styles);
        console.log('aqui: ', style);
        return tag([style]);

    } else if(typeof styles === 'string'){ 
        return tag([styles]);
    }
}