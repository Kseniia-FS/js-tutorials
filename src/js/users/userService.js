import render from "../classRender"
import openMenuForm from "../menuForm";
import renderTablesTmp, {creatListTablesTmp} from '../tablesRender';
import tables from '../db.tables';
import cafe from '../cafe';
cafe.checkTables(tables);

const a = 28;
const serviceTables = cafe.presentWorkers[0].tables;



render.refs.openMenuBtn = render.createElement("button", {
    type: "button",
    textContent: "Open menu",
    id: "open-menu-btn"
})

const handlerOpenMenu = () =>{
  openMenuForm();
  render.refs.openMenuBtn.style.display = "none";
}




  export default function renderServicePanel (){
    
    const markup = creatListTablesTmp(serviceTables);
    console.log(markup);
    render.renderElWithMarkup(render.refs.servicePannel, markup, "afterbegin") 

  
      render.renderElWithNode(
        render.refs.body,
        render.refs.servicePannel,
        "afterbegin"
      ); 

      render.refs.openMenuBtn.addEventListener("click", handlerOpenMenu);
      
  }


