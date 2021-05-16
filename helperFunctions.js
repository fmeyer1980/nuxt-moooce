import Vue from 'vue'
export function setReactiveStateValue(storeObject,property,value)
{
    if(typeof storeObject[property] === 'undefined')
        Vue.set(storeObject, property, value);
    else
        storeObject[property] = value;
}