export const Navigation = (tabs) => {
    const df = new DocumentFragment();
    const nav = document.createElement('nav')
    nav.className = 'nav flex'
    tabs.forEach(tab =>{
        const link = document.createElement('div');
        link.className = 'nav__link';
        if(Object.keys(tab.data).length) link.classList.add('clicked')
        link.append(tab.title)
        df.append(link)
    })
    nav.append(df)
    return nav

}