export function createElement(tag: string, text: string | null, className: string) {
    const element = document.createElement(tag);
    if (text) {
        element.innerText = text;
    }
    if (className !== '') {
        element.classList.add(className);
    }
    return element;
}