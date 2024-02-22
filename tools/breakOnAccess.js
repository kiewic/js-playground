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
    set(target, prop, value, receiver) {
        // Check if the property being set is a numeric index
        if (!isNaN(prop)) {
            debugger;
        }
        // Set the property value
        return Reflect.set(...arguments);
    }
};
newHierarchy.leafNodes  = new Proxy(newHierarchy.leafNodes, handler);
