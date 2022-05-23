import { SubTable } from "./Subtable.js";

export const System = (data) => {
    const row = document.querySelector('.tr-temp').content.querySelector('.tb__row').cloneNode(true);
    const name = row.querySelector('.tb__system-name');
    name.id = data.id
    name.append(data.system_name)
    const id = row.querySelector('.tb__system-id');
    id.append(data.id)
    const date = row.querySelector('.tb__date');
    date.append(data.created_date)
    const activeLicenses = row.querySelector('.tb__active-licenses');
    activeLicenses.append(data.active_licenses)
    name.addEventListener('click',(e)=>{
        e.target.classList.toggle('opened')
        const nextElement = e.target.parentElement.nextElementSibling
        if(!e.target.classList.contains('opened')) {
            nextElement.innerHTML = ''
            if(nextElement.nextElementSibling?.nodeName === 'THEAD') nextElement.nextElementSibling.remove()
        }
        else {
            const table = SubTable(data.subsystems)
            if(!table) return
            if(!nextElement.nextElementSibling) nextElement.append(table)
            else {
                nextElement.append(table)
                const thead = document.querySelector('.thead-temp').content.querySelector('thead').cloneNode(true);
                thead.querySelector('.tb__system-name').innerHTML = '';
                thead.querySelector('.tb__system-id').innerHTML = '';
                nextElement.insertAdjacentElement('afterend',thead)
            }
        }
    })
    return row
}