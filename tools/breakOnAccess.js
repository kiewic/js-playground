window.break1 = function (obj, propertyKey) {
    let original = Object.getOwnPropertyDescriptor(obj, propertyKey);
    let localValue;
    Object.defineProperty(obj, propertyKey, {
        enumerable: original ? original.enumerable : true,
        configurable: original ? original.configurable : true,
        get: function () {
            debugger;
            return original ? original.value : localValue;
        },
        set: function (newValue) {
            if (original) {
                original.value = newValue;
            }
            else {
                localValue = newValue;
            }
        },
    });
}


// Get, set or delete
node = new Proxy(node, {
    get(target, prop, receiver) {
        if (prop === "disabled") {
            debugger;
        }
        return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
        if (prop === "disabled") {
            debugger;
        }
        return Reflect.set(...arguments);
    },
    deleteProperty(target, prop) {
        if (prop === "disabled") {
            debugger;
        }
        return Reflect.deleteProperty(target, prop);
    },
});


// Arrays
values = new Proxy(values, {
    get(target, prop, receiver) {
        if (typeof prop === 'string' && !isNaN(Number(prop))) {
            debugger;
        }
        return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
        if (typeof prop === 'string' && !isNaN(Number(prop))) {
            debugger;
        }
        return Reflect.set(target, prop, value, receiver);
    },
    deleteProperty(target, prop) {
        if (typeof prop === 'string' && !isNaN(Number(prop))) {
            debugger;
        }
        return Reflect.deleteProperty(target, prop);
    },
});


// Get function
this.legacyService = new Proxy(this.legacyService, {
    get(target, prop, receiver) {
        if (typeof target[prop] === 'function') {
            console.log(`Method ${prop} was accessed`);
            debugger;
        }
        return Reflect.get(target, prop, receiver);
    }
});


// Function invocation
result = new Proxy(result, {
    get(target, property) {
        if (property === 'push') {
            return function (...args) {
                debugger;
                return Array.prototype.push.apply(target, args);
            };
        }
        return Reflect.get(target, property);
    }
});


// Delete
const handler = {
    deleteProperty: function (target, property) {
        console.log(`Property '${property}' is being deleted`);
        debugger;
        return delete target[property];
    }
};
myObject = new Proxy(myObject, handler);
