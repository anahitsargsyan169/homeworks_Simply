import { System } from "./System.js";

export const Table = (data) => {
    const container = document.createElement('div');
    container.className = 'tb-div'
    const table = document.createElement('table');
    const thead = document.querySelector('.thead-temp').content.querySelector('thead').cloneNode(true);
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');
    table.className = 'tb'
    table.append(thead)
    data.forEach((system,id)=>{
        table.append(System(system),tr.cloneNode())
    })
    container.append(table)
    return container
}