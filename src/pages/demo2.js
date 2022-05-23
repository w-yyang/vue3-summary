/**
 * shallowReactive shallowRef
 */
function shallowRef(value){
    return shallowReactive({value: val});
}

function shallowReactive(obj){
    return new Proxy(obj, {
        get(obj, key){
            return obj[key];
        },
        set(obj, key, value){
            obj[key] = val;
            console.log('ui更新');
            return true;
        }
    });
}

let obj = {
    a: 'a',
    gf: {
        b: 'b',
        f: {
            c: 'c',
            s: {
                d: 'd'
            }
        }
    }
};

let state = shallowReactive(obj);

state.a = '222';
state.gf.b = '444';
console.log(state);