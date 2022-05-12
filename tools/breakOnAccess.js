window.breakOn2 = function(obj, propertyKey) {
    let original = Object.getOwnPropertyDescriptor(obj, propertyKey);
    let localValue;
    Object.defineProperty(obj, propertyKey, {
        enumerable: original ? original.enumerable : true,
        configurable: original ? original.configurable : true,
        get: function() {
            debugger;
            return original ? original.value : localValue;
        },
        set: function(newValue) {
            if (original) {
                original.value = newValue;
            }
            else {
                localValue = newValue;
            }
        },
    });
}
