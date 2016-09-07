
/**
 * Web Storage Adapter
 */

export default {
    init,
    get,
    set,
    push,
};

function init() {
    return new Promise((resolve, reject) => {
        var test = 'tls::' + Date.now();
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}

function get(key, defaultValue = null) {
    return new Promise((resolve, reject) => {
        try {
            var value = localStorage.getItem(key);
            if (value === null) {
                resolve(defaultValue);
            } else {
                resolve(JSON.parse(value));
            }
        } catch (e) {
            reject(e);
        }
    });
}

function set(key, value) {
    return new Promise((resolve, reject) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}

function push(key, value) {
    return new Promise((resolve, reject) => {
        get(key, [])
        .then(collection => {
            collection.push(value);

            set(key, collection)
            .then(resolve)
            .catch(reject);
        })
        .catch(reject);
    });
}
