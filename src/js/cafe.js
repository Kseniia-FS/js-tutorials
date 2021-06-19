import menu from "./db.menu";
import  tables from "./db.tables";
import oficiants from '../js/db.oficiants';

const menuMap = menu.reduce((acc, element) => {
  acc[element.id] = element;
  //   console.log(acc);
  return acc;
}, {});
// console.log(menuMap);
class Cafe {
  getPresentWorkers = () => oficiants.filter((worker) => worker.isPresent);
  getCurTable = (tableNum) => tables.find((table) => table.table === tableNum);
  checkTables(tables) {
    this.presentWorkers = this.getPresentWorkers();
    tables.forEach((table, idx) => {
      const indexWorker = idx % this.presentWorkers.length;
      table.service = this.presentWorkers[indexWorker].name;
      this.presentWorkers[indexWorker].tables = [
        ...this.presentWorkers[indexWorker].tables,
        table.table,
      ];
    });
  }

  addOrder(tableNum, order) {
    const currentTable = this.getCurTable(tableNum);
    currentTable.currentOrder = order;

  }
  getOrderForKitchen(tableNum) {
    const currentTable = this.getCurTable(tableNum);
    if (!currentTable.currentOrder) return;
    const orderForKitchen = Object.entries(currentTable.currentOrder).map(
      ([dishId, quantity]) => {
        // const { name } = menu.find(({ id }) => id === dishId);
        // const curDish = menu.find(({ id }) => id === dishId);
        // const { name } = curDish;
        const { name } = menuMap[dishId];
        return `${name} - ${quantity}`;
      }
    );
    currentTable.toKitchen = orderForKitchen;
    // console.log(orderForKitchen);
  }
  removeOrderForKitchen(tableNum, dishName, quantity) {
    let removeIdx = null;
    const curTable = this.getCurTable(tableNum);
    curTable.toKitchen = curTable.toKitchen.map((element, idx) => {
      const [curDishName, curQuantity] = element.split(" - ");
      if (curDishName !== dishName) return element;
      const newQuantity = Number(curQuantity) - Number(quantity);
      if (newQuantity > 0) {
        return [curDishName, newQuantity].join(" - ");
      }
      if (newQuantity <= 0) {
        removeIdx = idx;
      }
    });
    if (removeIdx !== null) {
      curTable.toKitchen.splice(removeIdx, 1);
    }
  }
  getCheckOrder(tableNum) {
    const curTable = this.getCurTable(tableNum);
    if (curTable.toKitchen.length) return;
    const curOrderArr = Object.entries(curTable.currentOrder);
    console.log(curOrderArr);
    curTable.currentCheck =
      curOrderArr.reduce((acc, [dishId, quantity]) => {
        acc += quantity * menuMap[dishId].price;
        return acc;
      }, 0) * 1.15;
    curTable.totalCheck += curTable.currentCheck;
    oficiants.find((worker) => curTable.service === worker.name).tips +=
      curTable.currentCheck * 0.15;
  }
}
const cafe = new Cafe();

export default  cafe
