/**
 * @description create element and insert className
 * @param {string} element 
 * @param {string} className 
 * @return HTMLElement
 */
export function createElement(element, className){
    const $el = document.createElement(element);
    $el.classList.add(className);
    return $el;
}