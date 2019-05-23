/**
 * @description create element and insert className
 * @param {string} element
 * @param {string} className
 * @return
 */
import {tag} from "../tag";

export function createElement(element, className){
    const $el = document.createElement(element);
    $el.classList.add(className);

    return returnTypeElement($el);
}

/**
 * @param $el
 * @return {{getElement: HTMLElement, appendElement: (function(*=): {getElement: *, appendElement})}}
 */
function returnTypeElement($el) {
    return {
        appendStyle: appendStyle($el),
        appendElement: appendElement($el),
        getElement: $el
    }
}

/**
 * @description Receive a Array of HTMLElements and return types for Element
 * @param {HTMLElement} $el
 * @return {Function}
 */
function appendElement($el) {
    return (...$arrElement) => {
        $arrElement.forEach( $newElement => $el.appendChild($newElement));
        return returnTypeElement($el);
    }
}

function appendStyle($el) {
    return (...style) => {
        const className = tag(style);
        $el.classList.add(className);
        return returnTypeElement($el);
    }
}