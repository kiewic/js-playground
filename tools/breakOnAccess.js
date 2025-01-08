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


const handler = {
    get(target, prop, receiver) {
        debugger;
        // Return the accessed property
        return Reflect.get(...arguments);
    }
};
newHierarchy = new Proxy(newHierarchy, handler);


const handler = {
  get(target, property) {
    if (property === 'push') {
      return function(...args) {
        debugger; // This will trigger the debugger
        return Array.prototype.push.apply(target, args);
      };
    }
    return Reflect.get(target, property);
  }
};
result = new Proxy(result, handler);


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
const handler = {
    set(target, prop, value, receiver) {
        // Check if the property being set is a numeric index
        if (!isNaN(prop)) {
            debugger;
        }
        // Set the property value
        return Reflect.set(...arguments);
    }
};
newHierarchy.leafNodes = new Proxy(newHierarchy.leafNodes, handler);


const handler = {
    deleteProperty: function (target, property) {
        console.log(`Property '${property}' is being deleted`);
        debugger;
        return delete target[property];
    }
};
myObject = new Proxy(myObject, handler);
