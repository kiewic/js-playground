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


this.legacyService = new Proxy(this.legacyService, {
  get(target, prop, receiver) {
    if (typeof target[prop] === 'function') {
      console.log(`Method ${prop} was accessed`);
      debugger;
    }
    return Reflect.get(target, prop, receiver);
  }
});


this.viewModel = new Proxy(this.viewModel, {
    set(target, prop, value, receiver) {
        if (prop === 'sourceSelector') {
            debugger;
        }
        return Reflect.set(...arguments);
    }
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
