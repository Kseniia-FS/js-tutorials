import menu from "./db.menu.js";
import oficiants from "./db.oficiants.js";
import tables from "./db.tables.js";

function getPresentWorkers() {
  const presentWorkers = [];
  for (const worker of oficiants) {
    if (worker.isPresent === true) {
      presentWorkers.push({ ...worker });
    }
  }

  return presentWorkers;
}

const presentWorkers = getPresentWorkers();

// console.log(getPresentWorkers());

function checkTables(tables, presentWorkers) {
  for (let i = 0; i < tables.length; i += 1) {
    const indexWorker = i % presentWorkers.length;

    tables[i].service = presentWorkers[indexWorker].name;

    presentWorkers[indexWorker].tables = [
      ...presentWorkers[indexWorker].tables,
      tables[i].table,
    ];
  }
}

checkTables(tables, presentWorkers);
// console.log(tables);
// console.log(presentWorkers);

function getOrder(tableNum, dishId, quantity) {
  for (const table of tables) {
    if (table.table === tableNum) {
      if (!table.currentOrder) {
        table.currentOrder = {};
      }
      if (!table.currentOrder[dishId]) {
        table.currentOrder[dishId] = 0;
      }

      table.currentOrder[dishId] += quantity;
    }
  }
}
getOrder(1, "espresso", 3);
getOrder(1, "napoleon", 2);
getOrder(1, "napoleon", 3);
getOrder(1, "hfjdh", 3);
// console.log(tables);

// 4. Написать функцию для обработки заказа на кухне и на баре, которая принимает
// объект tabel(номер столика) и если в нём есть заполненное свойствами значение currentOrder,
// создает массив вида - пример: ["Капучино - 2", "Торт Наполеон - 2", "Пирожное заварное - 1"] и добавляет
// этот массив в свойстово prepearing в объекте соотвоетствующего столика.
