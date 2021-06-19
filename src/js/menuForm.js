import  menu from "./db.menu.js";
import render from "./classRender.js";
import cafe from "./cafe.js";

const createMenuFormTmp = (menu) => `
<form id="menu-form">
<ul>
    ${menu.reduce((acc, el) => {
      return (
        acc +
        `<li id="${el.id}">
<span>${el.name}</span>
<span>${el.price}</span>
<input type="text" value="0" name="${el.id}">
<button data-action="remove" type="button"> - </button>
<button data-action="add" type="button"> + </button>
<button data-action="reset" type="button"> reset </button> 
</li>`
      );
    }, "")}
</ul>
<button type="submit"> Submit </button>
</form>
`;

const addDishQuantity = (value) => {
  value++;
  return value;
};

const removeDishQuantity = (value) => {
  if (value === 0) return value;
  value--;
  return value;
};

const hendlerChangeDishQuantity = (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  if(!e.target.dataset.action) return;
  const parentItem = e.target.closest("li");
  const input = parentItem.querySelector("input");
  
  const value = Number(input.value);

  switch (e.target.dataset.action) {
    case "add":
      input.value = addDishQuantity(value);
      break;
    case "remove":
      input.value = removeDishQuantity(value);
      break;
    case "reset":
      input.value = removeDishQuantity(0);
      break;
    default:
      break;
  }
};

const handlerSubmit = (e)=>{
e.preventDefault();
const formInputs = e.currentTarget.querySelectorAll("input");

const formInputsData ={};
formInputs.forEach((input)=>{
  const {name, value} = input;
  if(value!=="0"){
    formInputsData[name] = value;
  }
})
if(Object.keys(formInputsData).length === 0) return;

cafe.addOrder(1, formInputsData)

render.removeElement(render.refs.menuForm);
delete render.refs.menuForm;
render.refs.openMenuBtn.style.display = "inline-block";
}

export default function openMenuForm () {
  const menuFormTmp = createMenuFormTmp(menu);
  render.renderElWithMarkup(render.refs.servicePannel, menuFormTmp);
  render.refs.menuForm = document.getElementById("menu-form");
  render.refs.menuForm.addEventListener("click", hendlerChangeDishQuantity);
  render.refs.menuForm.addEventListener('submit', handlerSubmit)
}