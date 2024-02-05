window.foobar = 0;
window.foo = setInterval(() => {
    let dialogButtons = document.querySelectorAll('.l17p5q9z')
    if (dialogButtons.length === 2) {
        dialogButtons[1].click();
    }

    let buttons = document.querySelectorAll('button.CenterAlign');
    if (buttons.length === 5) {
        buttons[3].click();
        console.log(`count: ${++window.foobar}`);
    }
    else {
        console.log(`length: ${buttons.length}`);
    }
}, 2000);
// clearInterval(window.foo);
