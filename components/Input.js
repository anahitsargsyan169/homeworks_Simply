import { addDropdownEventListeners } from "../helpers/helpers.js";

export const Input = () => {
    const container = document.createElement('div');
    container.className = 'file-input'
    const label = document.createElement('label');
    label.className = 'file-input__label flex'
    label.htmlFor = 'file-input'
    const arrow = document.createElement('div');
    arrow.className = 'file-input__arrow'
    arrow.innerHTML = '&#129123;'
    const input = document.createElement('input');
    input.id = 'file-input'
    input.type = 'file'
    input.setAttribute('multiple','');
    const text = document.createElement('div');
    text.className = 'file-input__text'
    text.innerHTML = '<span class="highlighted">Choose a file</span> to upload or drag it here<br>(jpg, png, max size 5mb)'
    label.append(input,arrow,text)
    container.append(label)
    addDropdownEventListeners(container)
    return container
}