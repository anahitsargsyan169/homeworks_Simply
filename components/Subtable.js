import { Subsystem } from "./Subsystem.js";

export const SubTable = (data, last = false) => {
    if(!data.length) return ''
    const table = document.createElement('table');
    const thead = document.querySelector('.tshead-temp').content.querySelector('thead').cloneNode(true);
    const tbody = document.createElement('tbody');
    const td = document.createElement('td')
    td.colSpan = '5'
    const tr = document.createElement('tr');
    table.className = 'sub-tb'
    table.append(thead)
    data.forEach((subsystem,id)=>{
        table.append(Subsystem(subsystem),tr.cloneNode())
    })
    td.append(table)
    return td
}