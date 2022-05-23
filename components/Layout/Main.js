import { Section } from "./Section.js"
import { Input } from "../Input.js"
import { Table } from "../Table.js";
import { getContent } from "../../helpers/helpers.js";

export const Main = (tabs) => {
    const main = document.createElement('main');
    main.append(Section('Systems',()=>Table(getContent(tabs))),Section('Add System',Input))
    return main
}