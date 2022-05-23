import { Logo } from "../Logo.js";

export const Header = (title,plans) => {
    const header = document.querySelector('.header-temp').content.querySelector('.header').cloneNode(true);
    const pageTitle = header.querySelector('.header__page-title');
    pageTitle.innerHTML = title;
    const rightBlock = header.querySelector('.header__rightBlock');
    plans.forEach(plan => {
        rightBlock.insertBefore(Logo(plan),header.querySelector('.header__btn'))
    });
    return header
}