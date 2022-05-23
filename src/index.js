
function component() {
    const container = document.querySelector('.content');
    const element = document.createElement('div');
    element.textContent = "hello";
    container.appendChild(element);
    console.log(container);
}

component();