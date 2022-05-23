export const Logo = (plan) => {
    const wrapper = document.createElement('div')
    const logo = document.createElement('div')
    logo.classList.add('header__logo', plan.name.toLowerCase())
    const text = document.createElement('div')
    text.append(plan.name.toUpperCase())
    text.classList.add('header__logo-text', plan.name.toLowerCase())
    wrapper.append(logo,text)
    if(!plan.active) return wrapper
    logo.classList.add('activated')
    text.classList.add('activated')
    return wrapper
}