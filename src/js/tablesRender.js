import render from './classRender';
// import tables from './db.tables';

const createTableItem=(item)=>`<li id="table-${item}">
<p>Table ${item}</p>
<button type="button" data-action="open">Open Menu</button>
<button type="button" data-action="check">Check order</button>
</li>`


export const creatListTablesTmp = (tables)=>{
    return `<ul>
    ${tables.reduce((acc, el)=> acc+createTableItem(el), "")
    }
  </ul>`
}

export default function renderListTables(){
  return creatListTablesTmp;
}