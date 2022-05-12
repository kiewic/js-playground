// https://stackoverflow.com/q/46882295/27211
let original = KeyboardEvent.prototype.stopPropagation;
KeyboardEvent.prototype.stopPropagation = function () {
    debugger;
    original.apply(this, arguments);
}
