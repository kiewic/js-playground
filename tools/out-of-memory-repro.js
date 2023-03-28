for (let i = 1; i > 0; i++) {
    let temp = window.foo;
    window.foo = {
        a: new Array(5024),
        next: temp,
    };
}
