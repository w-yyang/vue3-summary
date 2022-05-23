/**
 * reactive ref
 * shallowReadonly
 */
function reactive(obj) {
    if(typeof obj === 'object') {
        if(obj instanceof Array) {
            //如果是一个数组，那么取出数组中的每一个元素
            // 判断每一个元素是否又是一个对象，如果是那么也需要包装成Proxy
            obj.forEach((item, index) => {
                if(typeof item === 'object') {
                    obj[index] = reactive(item);
                }
            });
        }else{
            //取出对象属性的取值，判断对象是否又是一个对象，如果是那么也需要包装成Proxy
            for(let key in obj) {
                let item = obj[key];
                if(typeof item === 'object') {
                    obj[key] = reactive(item);
                }
            }
        }
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
    }else{
        console.warn(`${obj} is not object`);
    }
}

function shallowReadonly() {
    return new Proxy(obj, {
        get(obj, key) {
            return obj[key];
        },
        set(obj, key, value) {
            // obj[key] = val;
            // console.log('ui更新');
            // return true;
            console.log('为只读属性，不可赋值');
        }
    });
}
//readonly  拿reactive 注释掉set内内容