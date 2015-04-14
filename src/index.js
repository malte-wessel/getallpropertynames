'use strict';

export default function getAllPropertyNames(obj) {
    var props = [];

    do {
        let names = Object.getOwnPropertyNames(obj);
        for(let i = 0; i < names.length; i++) {
            let prop = names[i];
            if (props.indexOf( prop ) === -1) props.push(prop);
        }
        obj = Object.getPrototypeOf(obj);
    } while (obj);

    return props;
}