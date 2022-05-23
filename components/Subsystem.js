export const Subsystem = (data) => {
    const subRow = document.querySelector('.tsr-temp').content.querySelector('.tb__row').cloneNode(true);
    const name = subRow.querySelector('.tb__system-name');
    name.append(data.licenses)
    const date = subRow.querySelector('.tb__date');
    date.append(data.expires)
    return subRow
}