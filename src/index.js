'use strict';

export default function getAllPropertyNames(obj) {
    var props = [];

    do {
        for(let prop of Object.getOwnPropertyNames(obj)) {
            if (props.indexOf( prop ) === -1) props.push(prop);
        }
        obj = Object.getPrototypeOf(obj);
    } while (obj);

    return props;
}