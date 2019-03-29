function styled(...style){
    return tag(style)
}

styled.div = function(...style){
    const classname = tag(style)
    const el = document.createElement('div')
    el.setAttribute('class', classname)

    return el
}

styled.object = function(obj){
    let css = '';

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && key !== 'element' ) {
            const propertyName = key.split(/(?=[A-Z])/).join('-').toLowerCase();
            css += `
                ${propertyName}: ${obj[key]};
            ` 
        }
    }
    
    const classe = tag([css]);

    if(obj.element){
        const el = document.createElement(obj.element)
        el.setAttribute('class', classe)
        
        return el
    }

    return classe    
    // .split(/(?=[A-Z])/).join('-').toLowerCase();
}

function tag(styles){
    const cacheNameClass = ['a'];
    let className = generateClass(cacheNameClass);
    let css = `.${className}`;

    styles.forEach(style => {
        if(typeof style === 'object'){
            css += `
                {
                    ${style[0].trim()}
                }
            `
        } else if(typeof style === 'string'){
            css += `
                {
                    ${style.trim()}
                }
            `
        }

    })

    insertInDom(css.trim())

    return className;

    function insertInDom(css){
        const head = document.querySelector('head')
        const styled = head.querySelector('[data-styled]')

        if(styled){
            return styled.innerHTML += css
        }

        head.innerHTML += `
            <style data-styled>
                ${ css }
            </style>
        `
    }

    function generateClass(){
        let hasClass = false;
        let classRandom = randomName(5);

        cacheNameClass.push(classRandom);

        do {
            hasClass = cacheNameClass.includes(classRandom);
            classRandom = randomName(5);
        } while(hasClass);
        
        
        return classRandom;
    }

    function randomName(size){
        const alphabet = "ABCDEFGHIJKLMNOPRSTUVXZabcdefghijklmnopqrstuvxz"
        let name = "";
        

        for(let i = 0; i < size; i++){
            const randomNumber = Math.round(Math.random() * (alphabet.length - 1));
            name += alphabet[randomNumber];
        }

        return name;
    }
}