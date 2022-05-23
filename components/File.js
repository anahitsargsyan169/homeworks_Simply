import { preventDefaults } from "../helpers/helpers.js"

export const File = (url) => {
    const wrapper = document.createElement('div')
    wrapper.className = 'file-input__file'
    const img = document.createElement('img')
    url.includes('image') ? img.src = url : img.src = '../icons/file.png'
    const remove = document.createElement('div')
    remove.className = 'remove'
    remove.innerHTML = 'x'
    document.querySelector(".file-input__label").classList.add('uploaded')
    wrapper.addEventListener('click',preventDefaults)
    remove.addEventListener('click',(e)=>{
        e.target.parentElement.remove()
    })
    wrapper.append(img,remove)
    return wrapper
}