import {createClassName} from "./create-class-name";
import {createStyleString} from "./create-style-string";
import {concatStrings} from "../../helpers/concatStrings";
import {insertInDom} from "./insert-in-dom";

const SIZE_CLASSNAME = 10;

/**
 * @description create style, insert in DOM and return the classname
 * @param {string} style
 * @return string
 */
export function tag(...style) {
    const className = createClassName(SIZE_CLASSNAME);
    const styleString = createStyleString(style);
    const styleConcact = concatStrings(className.className, styleString);

    insertInDom(styleConcact);

    return className.name;
}