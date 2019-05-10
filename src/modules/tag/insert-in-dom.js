const PROPS_NAME = 'csscript';

/**
 * @description Insert style in head whit props
 * @param {string} style
 */
export function insertInDom(style) {
    const head = document.querySelector('head');
    let node = getNodeInDom();

    if (!node) {
        node = createNodeStyle();
        head.appendChild(node);
    }

    setAttributtesAndStyle(node, style);
}

/**
 * @return {HTMLStyleElement}
 */
function getNodeInDom() {
    return document.querySelector(`[${PROPS_NAME}]`);
}

/**
 * @return {HTMLStyleElement}
 */
function createNodeStyle() {
    return document.createElement('style');
}

/**
 * @param {HTMLStyleElement} node
 * @param {string} style
 */
function setAttributtesAndStyle(node, style) {
    node.setAttribute(PROPS_NAME, '');
    node.innerHTML += style;
}