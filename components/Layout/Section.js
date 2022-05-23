export const Section = (name, component) => {
    const section = document.createElement('section')
    section.className = 'section';
    const sectionName = document.createElement('div')
    sectionName.className = 'section__name';
    sectionName.append(name)
    section.append(sectionName, component())
    return section
}