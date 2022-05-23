import { fetchData } from "./helpers/helpers.js"
import { Header } from "./components/Layout/Header.js"
import { Navigation } from "./components/Layout/Nav.js"
import { Main } from "./components/Layout/Main.js"

function init(){

    fetchData('./page_data')
    .then((data)=>render(data))

    const render = ({page_title: pageTitle,plans,tabs}) => {
        const df = new DocumentFragment()
        const container = document.querySelector('.container')
        df.append(Header(pageTitle,plans),Navigation(tabs),Main(tabs))  
        container.prepend(df)      
    }
}

window.addEventListener('load',init)