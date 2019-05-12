import {tag} from "../tag";
import {convertObjectToString} from "../../modules/CSScript/convert-object-to-string"
import {createElement} from "../../modules/CSScript/create-element"
import {colors} from "../tag/Colors"

const tagsHTML = ['div', 'section', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'header', 'footer', 'main'];

/**
 * Type Style
 * @typedef {Object<string>} Style
 * @property {'div'|'span'|'h1'} element The element HTML create.
 */
/**
 * @description Generate CSS, add style in DOM and create Element
 * @param {string|Object|Style} styles
 * @return string | HTMLElement
 */
function CSScript(styles){
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
 * Static property to get all colors
 */
CSScript.colors = colors;

tagsHTML.forEach(tag => {
    CSScript[tag] = executeCSScriptWithTagHTML(tag);
})

export {CSScript};

function executeCSScriptWithTagHTML(tag){
    return (style) => {
        const classname = CSScript(style);
        const element = createElement(tag, classname);
        return element;

        // style.element = tag;
        // return CSScript(style);
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